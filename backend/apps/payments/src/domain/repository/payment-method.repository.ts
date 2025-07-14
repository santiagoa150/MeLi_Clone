import { ArrayValueObject } from '@shared/domain/value-object/array.value-object';
import { PaymentMethod } from '../model/payment-method';

/**
 * PaymentMethodRepository interface defines the contract for a repository
 * that manages payment methods in the system.
 */
export interface PaymentMethodRepository {
    /**
     * Retrieves all payment methods available in the system.
     * @param ids - An optional array of payment method IDs to filter the results.
     * @return A promise that resolves to an array of PaymentMethod objects.
     */
    getPaymentMethodsByIds(ids: ArrayValueObject<string>): Promise<PaymentMethod[]>;
}
