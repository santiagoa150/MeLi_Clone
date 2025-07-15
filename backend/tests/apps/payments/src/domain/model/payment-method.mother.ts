import { PaymentMethod } from '../../../../../../apps/payments/src/domain/model/payment-method';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { IdValueObjectMother } from '../../../../../libs/src/domain/value-object/id.value-object.mother';
import { PaymentMethodTypeConstants } from '../../../../../../apps/payments/src/domain/model/payment-method-type.constants';
import { faker } from '@faker-js/faker';
import { PaymentMethodBrandConstants } from '../../../../../../apps/payments/src/domain/model/payment-method-brand.constants';

export class PaymentMethodMother {
    static create(
        id?: IdValueObject,
        type?: PaymentMethodTypeConstants,
        brand?: PaymentMethodBrandConstants,
    ): PaymentMethod {
        return new PaymentMethod(
            id ?? IdValueObjectMother.create(),
            type ?? faker.helpers.arrayElement(Object.values(PaymentMethodTypeConstants)),
            brand ?? faker.helpers.arrayElement(Object.values(PaymentMethodBrandConstants)),
        );
    }

    static createFromNormalized(
        id?: string,
        type?: PaymentMethodTypeConstants,
        brand?: PaymentMethodBrandConstants,
    ): PaymentMethod {
        return PaymentMethod.create(
            id ?? faker.string.uuid(),
            type ?? faker.helpers.arrayElement(Object.values(PaymentMethodTypeConstants)),
            brand ?? faker.helpers.arrayElement(Object.values(PaymentMethodBrandConstants)),
        );
    }
}
