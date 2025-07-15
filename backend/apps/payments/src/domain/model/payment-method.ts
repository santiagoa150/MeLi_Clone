import { DomainRoot } from '@shared/domain/model/domain-root';
import { PaymentMethodNormalized } from '@shared/domain/model/payment/payment-method-normalized';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { PaymentMethodTypeConstants } from './payment-method-type.constants';
import { PaymentMethodBrandConstants } from './payment-method-brand.constants';

/**
 * PaymentMethod class represents a payment method in the system.
 * It extends the DomainRoot class and encapsulates the properties of a payment method.
 */
export class PaymentMethod extends DomainRoot<PaymentMethodNormalized> {
    /**
     * @param _id - The unique identifier of the payment method.
     * @param _type - The type of the payment method.
     * @param _brand - The brand of the payment method.
     */
    constructor(
        private readonly _id: IdValueObject,
        private readonly _type: PaymentMethodTypeConstants,
        private readonly _brand: PaymentMethodBrandConstants,
    ) {
        super();
    }

    /**
     * Creates a new instance of PaymentMethod with the provided parameters.
     */
    public static create(
        id: string,
        type: PaymentMethodTypeConstants,
        brand: PaymentMethodBrandConstants,
    ): PaymentMethod {
        return new PaymentMethod(IdValueObject.create(id), type, brand);
    }

    get id(): IdValueObject {
        return this._id;
    }

    get brand(): PaymentMethodBrandConstants {
        return this._brand;
    }

    /**
     * Returns the payment method normalized representation.
     * @returns The normalized representation of the payment method.
     */
    public normalize(): PaymentMethodNormalized {
        return {
            id: this._id.toString(),
            type: this._type,
            brand: this._brand,
        };
    }
}
