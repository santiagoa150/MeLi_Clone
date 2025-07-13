import { ProductClient } from '../../../domain/product/repository/product.client';
import { ProductNormalized } from '@shared/domain/model/product/product-normalized';
import { ProductServicesClient } from '@shared/infrastructure/interfaces/grpc/product/products';
import { firstValueFrom } from 'rxjs';

/**
 * GrpcProductClient is a client for interacting with product services via gRPC.
 */
export class GrpcProductClient implements ProductClient {
    /**
     * @param productServicesClient - The gRPC client for product services.
     */
    constructor(private readonly productServicesClient: ProductServicesClient) {}

    /**
     * This method retrieves a product by its ID.
     * @param productId - The ID of the product to retrieve.
     * @return A promise that resolves to the normalized product data.
     */
    async getProductById(productId: string): Promise<ProductNormalized> {
        return firstValueFrom(this.productServicesClient.getProductById({ id: productId }));
    }
}
