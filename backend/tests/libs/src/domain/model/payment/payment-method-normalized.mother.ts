import { PaymentMethodNormalized } from '@shared/domain/model/payment/payment-method-normalized';
import { PaymentMethodTypeConstants } from '../../../../../../apps/payments/src/domain/model/payment-method-type.constants';
import { PaymentMethodBrandConstants } from '../../../../../../apps/payments/src/domain/model/payment-method-brand.constants';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of PaymentMethodNormalized.
 */
export class PaymentMethodNormalizedMother {
    static create(params?: Partial<PaymentMethodNormalized>): PaymentMethodNormalized {
        return {
            id: params?.id ?? faker.string.uuid(),
            type: params?.type ?? faker.helpers.arrayElement(Object.values(PaymentMethodTypeConstants)),
            brand: params?.brand ?? faker.helpers.arrayElement(Object.values(PaymentMethodBrandConstants)),
        };
    }
}
