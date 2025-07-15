import { ProductAttribute } from '../../../../../../apps/products/src/domain/model/product-attribute';
import { StringValueObject } from '@shared/domain/value-object/string.value-object';
import { StringValueObjectMother } from '../../../../../libs/src/domain/value-object/string.value-object.mother';
import { BooleanValueObject } from '@shared/domain/value-object/boolean.value-object';
import { BooleanValueObjectMother } from '../../../../../libs/src/domain/value-object/boolean.value-object.mother';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of ProductAttribute.
 */
export class ProductAttributeMother {
    static create(
        name?: StringValueObject,
        value?: StringValueObject,
        category?: StringValueObject,
        highlighted?: BooleanValueObject,
    ): ProductAttribute {
        return new ProductAttribute(
            name ?? StringValueObjectMother.create(),
            value ?? StringValueObjectMother.create(),
            category ?? StringValueObjectMother.create(),
            highlighted ?? BooleanValueObjectMother.create(),
        );
    }

    static createFromNormalized(
        name: string,
        value: string,
        category: string,
        highlighted?: boolean,
    ): ProductAttribute {
        return ProductAttribute.create(
            name ?? faker.commerce.productAdjective(),
            value ?? faker.commerce.productMaterial(),
            category ?? faker.commerce.department(),
            highlighted ?? faker.datatype.boolean(),
        );
    }
}
