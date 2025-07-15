import { DomainRoot } from '@shared/domain/model/domain-root';
import { ProductAttributeNormalized } from '@shared/domain/model/product/product-attribute-normalized';
import { StringValueObject } from '@shared/domain/value-object/string.value-object';
import { BooleanValueObject } from '@shared/domain/value-object/boolean.value-object';

/**
 * ProductAttribute represents a product attribute in the domain model.
 * It implements the DomainRoot interface to ensure it can be normalized.
 */
export class ProductAttribute extends DomainRoot<ProductAttributeNormalized> {
    /**
     * @param _name - The name of the product attribute.
     * @param _value - The value of the product attribute.
     * @param _category - The category of the product attribute.
     * @param _highlighted - Optional boolean indicating if the attribute is highlighted.
     */
    constructor(
        private readonly _name: StringValueObject,
        private readonly _value: StringValueObject,
        private readonly _category: StringValueObject,
        private readonly _highlighted?: BooleanValueObject,
    ) {
        super();
    }

    /**
     * Creates a new ProductAttribute instance.
     */
    public static create(name: string, value: string, category: string, highlighted?: boolean): ProductAttribute {
        return new ProductAttribute(
            StringValueObject.create(name),
            StringValueObject.create(value),
            StringValueObject.create(category),
            highlighted !== undefined ? BooleanValueObject.create(highlighted) : undefined,
        );
    }

    /**
     * Normalizes the ProductAttribute instance into a ProductAttributeNormalized object.
     * @returns A normalized representation of the product attribute.
     */
    public normalize(): ProductAttributeNormalized {
        return {
            name: this._name.toString(),
            value: this._value.toString(),
            category: this._category.toString(),
            highlighted: this._highlighted?.toBoolean(),
        };
    }
}
