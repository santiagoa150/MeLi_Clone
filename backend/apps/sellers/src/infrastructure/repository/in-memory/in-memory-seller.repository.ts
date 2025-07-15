import { SellerRepository } from '../../../domain/repository/seller.repository';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { Seller } from '../../../domain/model/seller';
import { SellerNormalized } from '@shared/domain/model/seller/seller-normalized';
import { SellerBadgesConstants } from '../../../domain/model/seller-badges.constants';

/**
 * InMemorySellerRepository is an in-memory implementation of the SellerRepository interface.
 */
export class InMemorySellerRepository implements SellerRepository {
    private readonly _sellers: SellerNormalized[] = [
        {
            id: '80c98c32-b3ab-4803-86e0-3a74cac682e7',
            name: 'Samsung',
            salesPerformanceRating: 4,
            customerServiceRating: 5,
            onTimeDeliveryRating: 5,
            imageId: '83db39c4-dfbb-4c3b-a9cf-313a4b9e9267.png',
            isOfficial: true,
            totalProducts: 100,
            totalSales: 1000,
            badges: [
                SellerBadgesConstants.FACTORY_WARRANTY,
                SellerBadgesConstants.FREE_RETURN,
                SellerBadgesConstants.PURCHASE_PROTECTED,
            ],
        },
        {
            id: 'ff4d4481-4e1e-4158-902f-8cdffd81347b',
            name: 'ONEPIXELCO',
            salesPerformanceRating: 2,
            customerServiceRating: 2,
            onTimeDeliveryRating: 0,
            imageId: 'c6a6c40f-a0b0-41ee-998b-3b4771d808f5.jpg',
            isOfficial: false,
            totalProducts: 50,
            totalSales: 1000,
            badges: [
                SellerBadgesConstants.FACTORY_WARRANTY,
                SellerBadgesConstants.FREE_RETURN,
                SellerBadgesConstants.PURCHASE_PROTECTED,
            ],
        },
    ];

    /**
     * Retrieves a seller by their ID.
     * @param id - The unique identifier of the seller to be retrieved.
     * @return A promise that resolves to the Seller object if found, or undefined if not found.
     */
    getSellerById(id: IdValueObject): Promise<Seller | undefined> {
        const sellerData = this._sellers.find((seller) => seller.id === id.toString()) || undefined;
        return Promise.resolve(
            sellerData
                ? Seller.create(
                      sellerData.id,
                      sellerData.name,
                      sellerData.totalProducts,
                      sellerData.totalSales,
                      sellerData.customerServiceRating,
                      sellerData.onTimeDeliveryRating,
                      sellerData.salesPerformanceRating,
                      sellerData.imageId,
                      sellerData.isOfficial,
                      sellerData.badges as SellerBadgesConstants[],
                  )
                : undefined,
        );
    }
}
