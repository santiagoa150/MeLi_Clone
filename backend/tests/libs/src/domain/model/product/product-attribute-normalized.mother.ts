import { ProductAttributeNormalized } from '@shared/infrastructure/interfaces/grpc/product/products';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of ProductAttributeNormalized.
 */
export class ProductAttributeNormalizedMother {
    static create(params?: Partial<ProductAttributeNormalized>): ProductAttributeNormalized {
        return {
            name: params?.name ?? faker.commerce.productAdjective(),
            value: params?.value ?? faker.commerce.productMaterial(),
            category: params?.category ?? faker.commerce.department(),
            highlighted: params?.highlighted ?? faker.datatype.boolean(),
        };
    }
}
