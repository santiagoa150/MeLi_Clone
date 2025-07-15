import { EntityNotFoundException } from '@shared/domain/exceptions/entity-not-found.exception';
import { ProductRepository } from '../../../../../../../apps/products/src/domain/repository/product.repository';
import { GetProductByIdQuery } from '../../../../../../../apps/products/src/application/query/get-product-by-id/get-product-by-id.query';
import { IdValueObjectMother } from '../../../../../../libs/src/domain/value-object/id.value-object.mother';
import { ProductMother } from '../../../domain/model/product.mother';
import { Product } from '../../../../../../../apps/products/src/domain/model/product';
import { GetProductByIdQueryHandler } from '../../../../../../../apps/products/src/application/query/get-product-by-id/get-product-by-id.query-handler';

describe('GetProductByIdQueryHandler', () => {
    let handler: GetProductByIdQueryHandler;
    let mockRepository: jest.Mocked<ProductRepository>;

    beforeEach(() => {
        mockRepository = {
            getProductById: jest.fn(),
        };

        handler = new GetProductByIdQueryHandler(mockRepository);
    });

    it('should return product when it exists', async () => {
        const id = IdValueObjectMother.create();
        const query = new GetProductByIdQuery(id);
        const expectedProduct: Product = ProductMother.create(id);

        mockRepository.getProductById.mockResolvedValueOnce(expectedProduct);

        const result = await handler.execute(query);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockRepository.getProductById).toHaveBeenCalledWith(id);
        expect(result).toEqual(expectedProduct);
    });

    it('should throw EntityNotFoundException when product does not exist', async () => {
        const id = IdValueObjectMother.create();
        const query = new GetProductByIdQuery(id);

        mockRepository.getProductById.mockResolvedValueOnce(undefined);

        await expect(handler.execute(query)).rejects.toThrow(EntityNotFoundException);
        await expect(handler.execute(query)).rejects.toThrow(
            `Entity (${Product.name}) not found with id: ${id.toString()}`,
        );

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockRepository.getProductById).toHaveBeenCalledWith(id);
    });
});
