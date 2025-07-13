import { PaymentMethodNormalized } from '@shared/domain/model/payment/payment-method-normalized';

/**
 * This interface defines the contract for a payment client that retrieves payment methods.
 * It is used to interact with the payment service to fetch available payment methods.
 */
export interface PaymentClient {
    /**
     * This method retrieves payment methods by their IDs.
     * @param paymentMethodIds - The IDs of the payment methods to retrieve.
     * @return A promise that resolves to an array of payment methods.
     */
    getPaymentMethodsByIds(paymentMethodIds: string[]): Promise<PaymentMethodNormalized[]>;
}
