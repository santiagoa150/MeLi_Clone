import { ProductClient } from '../../../../domain/product/repository/product.client';
import { ProductDto } from '@shared/domain/model/product.dto';

export class GrpcProductClient implements ProductClient {
    getProductById(productId: string): Promise<ProductDto> {
        console.log(productId);
        return Promise.resolve({ id: '', sellerId: '' });
    }
}
