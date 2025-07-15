import { GrpcProductClient } from '../../../../../../../apps/gateway/src/infrastructure/repository/grpc/grpc-product.client';
import { ProductServicesClient } from '@shared/infrastructure/interfaces/grpc/product/products';
import { ProductNormalized } from '@shared/domain/model/product/product-normalized';
import { ProductNormalizedMother } from '../../../../../../libs/src/domain/model/product/product-normalized.mother';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';

describe('GrpcProductClient', () => {
    let client: GrpcProductClient;
    let mockProductServicesClient: jest.Mocked<ProductServicesClient>;

    beforeEach(() => {
        mockProductServicesClient = {
            getProductById: jest.fn(),
        };

        client = new GrpcProductClient(mockProductServicesClient);
    });

    it('should call gRPC client with correct productId and return product', async () => {
        const productId: string = faker.string.uuid();
        const expectedProduct: ProductNormalized = ProductNormalizedMother.create({ id: productId });
        mockProductServicesClient.getProductById.mockReturnValue(of(expectedProduct));

        const result = await client.getProductById(productId);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockProductServicesClient.getProductById).toHaveBeenCalledWith({ id: productId });
        expect(result).toEqual(expectedProduct);
    });
});
