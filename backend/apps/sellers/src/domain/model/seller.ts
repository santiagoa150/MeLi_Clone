import { DomainRoot } from '@shared/domain/model/domain-root';
import { SellerNormalized } from '@shared/domain/model/seller/seller-normalized';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { StringValueObject } from '@shared/domain/value-object/string.value-object';
import { NumberValueObject } from '@shared/domain/value-object/number.value-object';
import { BooleanValueObject } from '@shared/domain/value-object/boolean.value-object';
import { SellerBadgesConstants } from './seller-badges.constants';

/**
 * The Seller class represents a seller in the domain model.
 */
export class Seller extends DomainRoot<SellerNormalized> {
    /**
     * @param _id - The unique identifier of the seller.
     * @param _name - The name of the seller.
     * @param _totalProducts - The total number of products offered by the seller.
     * @param _totalSales - The total number of sales made by the seller.
     * @param _customerServiceRating - The customer service rating of the seller.
     * @param _onTimeDeliveryRating - The on-time delivery rating of the seller.
     * @param _salesPerformanceRating - The sales performance rating of the seller.
     * @param _imageId - The unique identifier of the seller's image.
     * @param _isOfficial - Indicates whether the seller is an official seller.
     * @param _badges - The badges associated with the seller, represented by SellerBadgesConstants.
     */
    constructor(
        private readonly _id: IdValueObject,
        private readonly _name: StringValueObject,
        private readonly _totalProducts: NumberValueObject,
        private readonly _totalSales: NumberValueObject,
        private readonly _customerServiceRating: NumberValueObject,
        private readonly _onTimeDeliveryRating: NumberValueObject,
        private readonly _salesPerformanceRating: NumberValueObject,
        private readonly _imageId: IdValueObject,
        private readonly _isOfficial: BooleanValueObject,
        private readonly _badges: SellerBadgesConstants[],
    ) {
        super();
    }

    /**
     * Creates a new instance of the Seller class.
     */
    public static create(
        id: string,
        name: string,
        totalProducts: number,
        totalSales: number,
        customerServiceRating: number,
        onTimeDeliveryRating: number,
        salesPerformanceRating: number,
        imageId: string,
        isOfficial: boolean,
        badges: SellerBadgesConstants[],
    ): Seller {
        return new Seller(
            IdValueObject.create(id),
            StringValueObject.create(name),
            NumberValueObject.create(totalProducts),
            NumberValueObject.create(totalSales),
            NumberValueObject.create(customerServiceRating),
            NumberValueObject.create(onTimeDeliveryRating),
            NumberValueObject.create(salesPerformanceRating),
            IdValueObject.create(imageId),
            BooleanValueObject.create(isOfficial),
            badges,
        );
    }

    /**
     * Normalizes the seller data into a structured format.
     * @return The normalized seller data.
     */
    public normalize(): SellerNormalized {
        return {
            badges: this._badges,
            customerServiceRating: this._customerServiceRating.toNumber(),
            id: this._id.toString(),
            imageId: this._imageId.toString(),
            isOfficial: this._isOfficial.toBoolean(),
            name: this._name.toString(),
            onTimeDeliveryRating: this._onTimeDeliveryRating.toNumber(),
            salesPerformanceRating: this._salesPerformanceRating.toNumber(),
            totalProducts: this._totalProducts.toNumber(),
            totalSales: this._totalSales.toNumber(),
        };
    }
}
