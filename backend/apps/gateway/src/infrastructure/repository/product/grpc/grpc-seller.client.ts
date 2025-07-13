import { SellerClient } from '../../../../domain/product/repository/seller.client';
import { SellerDto } from '@shared/domain/model/seller.dto';

export class GrpcSellerClient implements SellerClient {
    getSellerById(sellerId: string): Promise<SellerDto> {
        console.log(sellerId);
        return Promise.resolve({ id: '' });
    }
}
