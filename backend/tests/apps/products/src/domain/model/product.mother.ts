import { Product } from '../../../../../../apps/products/src/domain/model/product';
import { IdValueObjectMother } from '../../../../../libs/src/domain/value-object/id.value-object.mother';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { StringValueObject } from '@shared/domain/value-object/string.value-object';
import { StringValueObjectMother } from '../../../../../libs/src/domain/value-object/string.value-object.mother';
import { NumberValueObject } from '@shared/domain/value-object/number.value-object';
import { NumberValueObjectMother } from '../../../../../libs/src/domain/value-object/number.value-object.mother';
import { CurrencyValueObject } from '@shared/domain/value-object/currency.value-object';
import { CurrencyValueObjectMother } from '../../../../../libs/src/domain/value-object/currency.value-object.mother';
import { ArrayValueObject } from '@shared/domain/value-object/array.value-object';
import { ArrayValueObjectMother } from '../../../../../libs/src/domain/value-object/array.value-object.mother';
import { BooleanValueObject } from '@shared/domain/value-object/boolean.value-object';
import { ProductAttribute } from '../../../../../../apps/products/src/domain/model/product-attribute';
import { ProductAttributeMother } from './product-attribute.mother';
import { ProductAttributeNormalized } from '@shared/domain/model/product/product-attribute-normalized';
import { faker } from '@faker-js/faker';
import { ProductAttributeNormalizedMother } from '../../../../../libs/src/domain/model/product/product-attribute-normalized.mother';

/**
 * Mother class for creating instances of Product.
 */
export class ProductMother {
    static create(
        id?: IdValueObject,
        title?: StringValueObject,
        color?: StringValueObject,
        description?: StringValueObject,
        price?: NumberValueObject,
        currency?: CurrencyValueObject,
        stock?: NumberValueObject,
        soldQuantity?: NumberValueObject,
        imagesIds?: ArrayValueObject<string>,
        mainImageId?: IdValueObject,
        categories?: ArrayValueObject<string>,
        rating?: NumberValueObject,
        reviewsCount?: NumberValueObject,
        isBestSeller?: BooleanValueObject,
        freeReturnDays?: NumberValueObject,
        factoryWarrantyMonths?: NumberValueObject,
        attributes?: ProductAttribute[],
        sellerId?: IdValueObject,
        paymentMethods?: ArrayValueObject<string>,
        discountPercentage?: NumberValueObject,
    ): Product {
        return new Product(
            id ?? IdValueObjectMother.create(),
            title ?? StringValueObjectMother.create(),
            color ?? StringValueObjectMother.create(),
            description ?? StringValueObjectMother.create(),
            price ?? NumberValueObjectMother.createFloat(),
            currency ?? CurrencyValueObjectMother.create(),
            stock ?? NumberValueObjectMother.createInt(),
            soldQuantity ?? NumberValueObjectMother.createInt(),
            imagesIds ?? ArrayValueObjectMother.createString(),
            mainImageId ?? IdValueObjectMother.create(),
            categories ?? ArrayValueObjectMother.createString(),
            rating ?? NumberValueObjectMother.createFloat(),
            reviewsCount ?? NumberValueObjectMother.createInt(),
            isBestSeller ?? BooleanValueObject.create(false),
            freeReturnDays ?? NumberValueObjectMother.createInt(),
            factoryWarrantyMonths ?? NumberValueObjectMother.createInt(),
            attributes ?? [ProductAttributeMother.create(), ProductAttributeMother.create()],
            sellerId ?? IdValueObjectMother.create(),
            paymentMethods ?? ArrayValueObjectMother.createString(),
            discountPercentage ?? NumberValueObjectMother.createFloat(),
        );
    }

    static createFromNormalized(
        id?: string,
        title?: string,
        color?: string,
        description?: string,
        price?: number,
        currency?: string,
        stock?: number,
        soldQuantity?: number,
        imagesIds?: string[],
        mainImageId?: string,
        categories?: string[],
        rating?: number,
        reviewsCount?: number,
        isBestSeller?: boolean,
        freeReturnDays?: number,
        factoryWarrantyMonths?: number,
        attributes?: ProductAttributeNormalized[],
        sellerId?: string,
        paymentMethods?: string[],
        discountPercentage?: number,
    ): Product {
        return Product.create(
            id ?? faker.string.uuid(),
            title ?? faker.commerce.productName(),
            color ?? faker.color.human(),
            description ?? faker.commerce.productDescription(),
            price ?? parseFloat(faker.commerce.price()),
            currency ?? faker.finance.currencyCode(),
            stock ?? faker.number.int({ min: 0, max: 500 }),
            soldQuantity ?? faker.number.int({ min: 0, max: 10000 }),
            imagesIds ?? faker.helpers.arrayElements([faker.string.uuid(), faker.string.uuid(), faker.string.uuid()]),
            mainImageId ?? faker.string.uuid(),
            categories ?? [faker.commerce.department(), faker.commerce.department()],
            rating ?? faker.number.float({ min: 0, max: 5 }),
            reviewsCount ?? faker.number.int({ min: 0, max: 1000 }),
            isBestSeller ?? faker.datatype.boolean(),
            freeReturnDays ?? faker.number.int({ min: 0, max: 30 }),
            factoryWarrantyMonths ?? faker.number.int({ min: 0, max: 24 }),
            attributes ?? [ProductAttributeNormalizedMother.create(), ProductAttributeNormalizedMother.create()],
            sellerId ?? faker.string.uuid(),
            paymentMethods ?? [faker.string.uuid(), faker.string.uuid()],
            discountPercentage ?? faker.number.float({ min: 0, max: 50 }),
        );
    }
}
