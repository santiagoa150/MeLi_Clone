import { SellerNormalized } from '@shared/domain/model/seller/seller-normalized';

/**
 * This interface defines the contract for a seller client that retrieves seller details.
 * It is used to interact with the seller service to fetch seller information.
 */
export interface SellerClient {
    /**
     * This method retrieves a seller by their ID.
     * @param sellerId - The ID of the seller to retrieve.
     * @return A promise that resolves to the seller details.
     */
    getSellerById(sellerId: string): Promise<SellerNormalized>;
}
