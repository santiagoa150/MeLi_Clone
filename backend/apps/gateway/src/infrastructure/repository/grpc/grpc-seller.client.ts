import { SellerClient } from '../../../domain/product/repository/seller.client';
import { SellerNormalized } from '@shared/domain/model/seller/seller-normalized';
import { SellerServicesClient } from '@shared/infrastructure/interfaces/grpc/seller/sellers';
import { firstValueFrom } from 'rxjs';

/**
 * GrpcSellerClient is a client for interacting with seller services via gRPC.
 */
export class GrpcSellerClient implements SellerClient {
    /**
     * @param sellerServicesClient - The gRPC client for seller services.
     */
    constructor(private readonly sellerServicesClient: SellerServicesClient) {}

    /**
     * This method retrieves a seller by their ID.
     * @param sellerId - The ID of the seller to retrieve.
     * @return A promise that resolves to the normalized seller data.
     */
    getSellerById(sellerId: string): Promise<SellerNormalized> {
        return firstValueFrom(this.sellerServicesClient.getSellerBySellerId({ id: sellerId }));
    }
}
