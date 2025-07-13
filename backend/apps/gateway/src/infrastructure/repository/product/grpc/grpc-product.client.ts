import { ProductClient } from '../../../../domain/product/repository/product.client';
import { ProductNormalized } from '@shared/domain/model/product/product-normalized';

export class GrpcProductClient implements ProductClient {
    getProductById(productId: string): Promise<ProductNormalized> {
        console.log(productId);
        return Promise.resolve({ id: '', sellerId: '' });
    }
}
