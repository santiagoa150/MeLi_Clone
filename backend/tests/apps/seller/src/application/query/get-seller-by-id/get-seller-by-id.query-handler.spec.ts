import { EntityNotFoundException } from '@shared/domain/exceptions/entity-not-found.exception';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { GetSellerByIdQueryHandler } from '../../../../../../../apps/sellers/src/application/query/get-seller-by-id/get-seller-by-id.query-handler';
import { SellerRepository } from '../../../../../../../apps/sellers/src/domain/repository/seller.repository';
import { IdValueObjectMother } from '../../../../../../libs/src/domain/value-object/id.value-object.mother';
import { SellerMother } from '../../../domain/model/seller.mother';
import { GetSellerByIdQuery } from '../../../../../../../apps/sellers/src/application/query/get-seller-by-id/get-seller-by-id.query';
import { Seller } from '../../../../../../../apps/sellers/src/domain/model/seller';

describe('GetSellerByIdQueryHandler', () => {
    let handler: GetSellerByIdQueryHandler;
    let mockRepository: jest.Mocked<SellerRepository>;

    beforeEach(() => {
        mockRepository = {
            getSellerById: jest.fn(),
        };

        handler = new GetSellerByIdQueryHandler(mockRepository);
    });

    it('should return the seller when found by ID', async () => {
        const id = IdValueObjectMother.create();
        const seller = SellerMother.create(id);

        mockRepository.getSellerById.mockResolvedValue(seller);

        const query = new GetSellerByIdQuery(id);
        const result = await handler.execute(query);

        expect(result).toEqual(seller);
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockRepository.getSellerById).toHaveBeenCalledWith(id);
    });

    it('should throw EntityNotFoundException if seller is not found', async () => {
        const id = IdValueObjectMother.create();
        mockRepository.getSellerById.mockResolvedValue(undefined);

        const query = new GetSellerByIdQuery(id);

        await expect(handler.execute(query)).rejects.toThrow(new EntityNotFoundException(Seller.name, id.toString()));

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockRepository.getSellerById).toHaveBeenCalledWith(id);
    });
});
