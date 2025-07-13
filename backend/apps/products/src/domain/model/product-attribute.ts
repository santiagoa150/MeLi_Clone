import { DomainRoot } from '@shared/domain/model/domain-root';
import { ProductAttributeNormalized } from '@shared/domain/model/product/product-attribute-normalized';
import { StringValueObject } from '@shared/domain/value-object/string.value-object';

/**
 * ProductAttribute represents a product attribute in the domain model.
 * It implements the DomainRoot interface to ensure it can be normalized.
 */
export class ProductAttribute extends DomainRoot<ProductAttributeNormalized> {
    /**
     * @param _name - The name of the product attribute.
     * @param _value - The value of the product attribute.
     */
    constructor(
        private readonly _name: StringValueObject,
        private readonly _value: StringValueObject,
    ) {
        super();
    }

    /**
     * Creates a new ProductAttribute instance.
     */
    public static create(name: string, value: string): ProductAttribute {
        return new ProductAttribute(StringValueObject.create(value), StringValueObject.create(value));
    }

    /**
     * Normalizes the ProductAttribute instance into a ProductAttributeNormalized object.
     * @returns A normalized representation of the product attribute.
     */
    public normalize(): ProductAttributeNormalized {
        return {
            name: this._name.toString(),
            value: this._value.toString(),
        };
    }
}
