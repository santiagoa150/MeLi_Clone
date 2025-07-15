import { ProductNormalized } from '@shared/domain/model/product/product-normalized';
import { ProductAttributeNormalizedMother } from './product-attribute-normalized.mother';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of ProductNormalized.
 */
export class ProductNormalizedMother {
    static create(params?: Partial<ProductNormalized>): ProductNormalized {
        return {
            attributes: params?.attributes ?? [
                ProductAttributeNormalizedMother.create(),
                ProductAttributeNormalizedMother.create(),
            ],
            categories: params?.categories ?? [faker.commerce.department(), faker.commerce.department()],
            color: params?.color ?? faker.color.human(),
            currency: params?.currency ?? faker.finance.currencyCode(),
            description: params?.description ?? faker.commerce.productDescription(),
            discountPercentage: params?.discountPercentage ?? faker.number.float({ min: 0, max: 50 }),
            factoryWarrantyMonths: params?.factoryWarrantyMonths ?? faker.number.int({ min: 0, max: 24 }),
            freeReturnDays: params?.freeReturnDays ?? faker.number.int({ min: 0, max: 30 }),
            id: params?.id ?? faker.string.uuid(),
            imagesIds:
                params?.imagesIds ??
                faker.helpers.arrayElements([faker.string.uuid(), faker.string.uuid(), faker.string.uuid()]),
            isBestSeller: params?.isBestSeller ?? faker.datatype.boolean(),
            mainImageId: params?.mainImageId ?? faker.string.uuid(),
            paymentMethods: params?.paymentMethods ?? [faker.string.uuid(), faker.string.uuid()],
            price: params?.price ?? parseFloat(faker.commerce.price()),
            rating: params?.rating ?? faker.number.float({ min: 0, max: 5 }),
            reviewsCount: params?.reviewsCount ?? faker.number.int({ min: 0, max: 1000 }),
            sellerId: params?.sellerId ?? faker.string.uuid(),
            soldQuantity: params?.soldQuantity ?? faker.number.int({ min: 0, max: 10000 }),
            stock: params?.stock ?? faker.number.int({ min: 0, max: 500 }),
            title: params?.title ?? faker.commerce.productName(),
        };
    }
}
