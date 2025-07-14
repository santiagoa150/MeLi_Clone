import { PaymentClient } from '../../../domain/product/repository/payment.client';
import { PaymentMethodNormalized } from '@shared/domain/model/payment/payment-method-normalized';
import { PaymentServicesClient } from '@shared/infrastructure/interfaces/grpc/payment/payments';
import { firstValueFrom } from 'rxjs';

/**
 * GrpcPaymentClient is a client for interacting with payment services via gRPC.
 */
export class GrpcPaymentClient implements PaymentClient {
    /**
     * @param paymentServicesClient - The gRPC client for payment services.
     */
    constructor(private readonly paymentServicesClient: PaymentServicesClient) {}

    /**
     * This method retrieves payment methods by their IDs.
     * @param paymentMethodIds - An array of payment method IDs to retrieve.
     * @return A promise that resolves to an array of normalized payment method data.
     */
    async getPaymentMethodsByIds(paymentMethodIds: string[]): Promise<PaymentMethodNormalized[]> {
        const data = await firstValueFrom(this.paymentServicesClient.getPaymentMethodsByIds({ ids: paymentMethodIds }));
        return data.paymentMethods;
    }
}
