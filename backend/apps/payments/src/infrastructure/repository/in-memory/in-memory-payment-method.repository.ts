import { ArrayValueObject } from '@shared/domain/value-object/array.value-object';
import { PaymentMethodRepository } from '../../../domain/repository/payment-method.repository';
import { PaymentMethodNormalized } from '@shared/domain/model/payment/payment-method-normalized';
import { PaymentMethodTypeConstants } from '../../../domain/model/payment-method-type.constants';
import { PaymentMethodBrandConstants } from '../../../domain/model/payment-method-brand.constants';
import { PaymentMethod } from '../../../domain/model/payment-method';

/**
 * InMemoryPaymentMethodRepository class implements the PaymentMethodRepository interface.
 */
export class InMemoryPaymentMethodRepository implements PaymentMethodRepository {
    private readonly _paymentMethods: PaymentMethodNormalized[] = [
        {
            id: 'b040cd3e-729d-4510-94e7-e29f3d6e40f7',
            type: PaymentMethodTypeConstants.CREDIT_CARD,
            brand: PaymentMethodBrandConstants.MASTERCARD,
        },
        {
            id: 'f42e08f6-4b1b-4bd4-83d4-e9e2f188db02',
            type: PaymentMethodTypeConstants.CREDIT_CARD,
            brand: PaymentMethodBrandConstants.VISA,
        },
        {
            id: '3af1e832-5528-4329-8da6-3e07d5520e86',
            type: PaymentMethodTypeConstants.CREDIT_CARD,
            brand: PaymentMethodBrandConstants.AMERICAN_EXPRESS,
        },
        {
            id: '1c344051-97e1-4459-a672-49a46e1e97b2',
            type: PaymentMethodTypeConstants.CREDIT_CARD,
            brand: PaymentMethodBrandConstants.OCA,
        },
        {
            id: 'a688a88c-6e78-48a5-97da-8edf1b170da2',
            type: PaymentMethodTypeConstants.DEBIT_CARD,
            brand: PaymentMethodBrandConstants.MASTERCARD,
        },
        {
            id: '19475cb5-b122-40cb-a78b-0a3a1a258c77',
            type: PaymentMethodTypeConstants.DEBIT_CARD,
            brand: PaymentMethodBrandConstants.VISA,
        },
        {
            id: '3fbf4f5f-8369-4bfa-bc82-16ebcfa20f82',
            type: PaymentMethodTypeConstants.CASH,
            brand: PaymentMethodBrandConstants.ABITAB,
        },
        {
            id: '7894a479-c381-4e3d-9b7f-895378ff8ea6',
            type: PaymentMethodTypeConstants.CASH,
            brand: PaymentMethodBrandConstants.REDPAGOS,
        },
        {
            id: '605523fc-074d-41d4-9d64-755530c25841',
            type: PaymentMethodTypeConstants.CASH,
            brand: PaymentMethodBrandConstants.EFECTY,
        },
    ];

    /**
     * This method retrieves payment methods by their IDs.
     * @param ids - An array of payment method IDs to retrieve.
     * @return A promise that resolves to an array of PaymentMethod objects corresponding to the provided IDs.
     */
    getPaymentMethodsByIds(ids: ArrayValueObject<string>): Promise<PaymentMethod[]> {
        const result = this._paymentMethods
            .filter((pm) => ids.toArray().includes(pm.id))
            .map((pM) =>
                PaymentMethod.create(
                    pM.id,
                    pM.type as PaymentMethodTypeConstants,
                    pM.brand as PaymentMethodBrandConstants,
                ),
            );
        return Promise.resolve(result);
    }
}
