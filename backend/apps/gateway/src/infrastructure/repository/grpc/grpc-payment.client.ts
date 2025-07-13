import { PaymentClient } from '../../../domain/product/repository/payment.client';
import { PaymentMethodNormalized } from '@shared/domain/model/payment/payment-method-normalized';

export class GrpcPaymentClient implements PaymentClient {
    getPaymentMethodsByIds(paymentMethodIds: string[]): Promise<PaymentMethodNormalized[]> {
        console.log(paymentMethodIds);
        return Promise.resolve([]);
    }
}
