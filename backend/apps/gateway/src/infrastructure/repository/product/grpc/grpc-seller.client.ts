import { SellerClient } from '../../../../domain/product/repository/seller.client';
import { SellerNormalized } from '@shared/domain/model/seller/seller-normalized';

export class GrpcSellerClient implements SellerClient {
    getSellerById(sellerId: string): Promise<SellerNormalized> {
        console.log(sellerId);
        return Promise.resolve({ id: '' });
    }
}
