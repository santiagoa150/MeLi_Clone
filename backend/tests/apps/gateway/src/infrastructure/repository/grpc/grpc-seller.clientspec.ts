import { GrpcSellerClient } from '../../../../../../../apps/gateway/src/infrastructure/repository/grpc/grpc-seller.client';
import { SellerServicesClient } from '@shared/infrastructure/interfaces/grpc/seller/sellers';
import { SellerNormalized } from '@shared/domain/model/seller/seller-normalized';
import { SellerNormalizedMother } from '../../../../../../libs/src/domain/model/seller/seller-normalized.mother';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';

describe('GrpcSellerClient', () => {
    let client: GrpcSellerClient;
    let mockSellerServicesClient: jest.Mocked<SellerServicesClient>;

    beforeEach(() => {
        mockSellerServicesClient = {
            getSellerBySellerId: jest.fn(),
        };

        client = new GrpcSellerClient(mockSellerServicesClient);
    });

    it('should call gRPC client with correct sellerId and return seller', async () => {
        const sellerId: string = faker.string.uuid();
        const expectedSeller: SellerNormalized = SellerNormalizedMother.create({ id: sellerId });
        mockSellerServicesClient.getSellerBySellerId.mockReturnValue(of(expectedSeller));

        const result = await client.getSellerById(sellerId);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockSellerServicesClient.getSellerBySellerId).toHaveBeenCalledWith({ id: sellerId });
        expect(result).toEqual(expectedSeller);
    });
});
