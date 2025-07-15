import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { ArrayValueObject } from '@shared/domain/value-object/array.value-object';
import { StringValueObject } from '@shared/domain/value-object/string.value-object';
import { NumberValueObject } from '@shared/domain/value-object/number.value-object';
import { CurrencyValueObject } from '@shared/domain/value-object/currency.value-object';
import { BooleanValueObject } from '@shared/domain/value-object/boolean.value-object';
import { DomainRoot } from '@shared/domain/model/domain-root';
import { ProductNormalized } from '@shared/domain/model/product/product-normalized';
import { ProductAttribute } from './product-attribute';
import { ProductAttributeNormalized } from '@shared/domain/model/product/product-attribute-normalized';

/**
 * Product represents a product in the domain model.
 */
export class Product extends DomainRoot<ProductNormalized> {
    /**
     * @param _id - The unique identifier of the product.
     * @param _title - The title of the product.
     * @param _color - The color of the product.
     * @param _description - The description of the product.
     * @param _price - The price of the product.
     * @param _currency - The currency of the product price.
     * @param _stock - The stock quantity of the product.
     * @param _soldQuantity - The quantity of the product that has been sold.
     * @param _imagesIds - The array of image IDs associated with the product.
     * @param _mainImageId - The ID of the main image for the product.
     * @param _categories - The array of categories the product belongs to.
     * @param _rating - The average rating of the product.
     * @param _reviewsCount - The number of reviews for the product.
     * @param _isBestSeller - Indicates if the product is a bestseller.
     * @param _attributes - The array of product attributes.
     * @param _sellerId - The unique identifier of the seller offering the product.
     * @param _paymentMethods - The array of payment methods accepted for the product.
     * @param _discountPercentage - The discount percentage applied to the product, if any.
     */
    constructor(
        private readonly _id: IdValueObject,
        private readonly _title: StringValueObject,
        private readonly _color: StringValueObject,
        private readonly _description: StringValueObject,
        private readonly _price: NumberValueObject,
        private readonly _currency: CurrencyValueObject,
        private readonly _stock: NumberValueObject,
        private readonly _soldQuantity: NumberValueObject,
        private readonly _imagesIds: ArrayValueObject<string>,
        private readonly _mainImageId: IdValueObject,
        private readonly _categories: ArrayValueObject<string>,
        private readonly _rating: NumberValueObject,
        private readonly _reviewsCount: NumberValueObject,
        private readonly _isBestSeller: BooleanValueObject,
        private readonly _freeReturnDays: NumberValueObject,
        private readonly _factoryWarrantyMonths: NumberValueObject,
        private readonly _attributes: ProductAttribute[],
        private readonly _sellerId: IdValueObject,
        private readonly _paymentMethods: ArrayValueObject<string>,
        private readonly _discountPercentage?: NumberValueObject,
    ) {
        super();
    }

    /**
     * Creates a new Product instance.
     */
    public static create(
        id: string,
        title: string,
        color: string,
        description: string,
        price: number,
        currency: string,
        stock: number,
        soldQuantity: number,
        imagesIds: string[],
        mainImageId: string,
        categories: string[],
        rating: number,
        reviewsCount: number,
        isBestSeller: boolean,
        freeReturnDays: number,
        factoryWarrantyMonths: number,
        attributes: ProductAttributeNormalized[],
        sellerId: string,
        paymentMethods: string[],
        discountPercentage?: number,
    ): Product {
        return new Product(
            IdValueObject.create(id),
            StringValueObject.create(title),
            StringValueObject.create(color),
            StringValueObject.create(description),
            NumberValueObject.create(price),
            CurrencyValueObject.create(currency),
            NumberValueObject.create(stock),
            NumberValueObject.create(soldQuantity),
            ArrayValueObject.create<string>(imagesIds),
            IdValueObject.create(mainImageId),
            ArrayValueObject.create<string>(categories),
            NumberValueObject.create(rating),
            NumberValueObject.create(reviewsCount),
            BooleanValueObject.create(isBestSeller),
            NumberValueObject.create(freeReturnDays),
            NumberValueObject.create(factoryWarrantyMonths),
            attributes.map((attr) => ProductAttribute.create(attr.name, attr.value, attr.category, attr.highlighted)),
            IdValueObject.create(sellerId),
            ArrayValueObject.create<string>(paymentMethods),
            discountPercentage ? NumberValueObject.create(discountPercentage) : undefined,
        );
    }

    /**
     * Normalizes the Product instance into a ProductNormalized object.
     * @return A normalized representation of the product.
     */
    public normalize(): ProductNormalized {
        return {
            id: this._id.toString(),
            title: this._title.toString(),
            color: this._color.toString(),
            description: this._description.toString(),
            price: this._price.toNumber(),
            currency: this._currency.toString(),
            stock: this._stock.toNumber(),
            soldQuantity: this._soldQuantity.toNumber(),
            imagesIds: this._imagesIds.toArray(),
            mainImageId: this._mainImageId.toString(),
            categories: this._categories.toArray(),
            rating: this._rating.toNumber(),
            reviewsCount: this._reviewsCount.toNumber(),
            isBestSeller: this._isBestSeller.toBoolean(),
            freeReturnDays: this._freeReturnDays.toNumber(),
            factoryWarrantyMonths: this._factoryWarrantyMonths.toNumber(),
            attributes: this._attributes.map((attr) => attr.normalize()),
            sellerId: this._sellerId.toString(),
            paymentMethods: this._paymentMethods.toArray(),
            discountPercentage: this._discountPercentage?.toNumber(),
        };
    }
}
