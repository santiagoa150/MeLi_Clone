import { PaymentClient } from '../../../../domain/product/repository/payment.client';
import { PaymentMethodDto } from '@shared/domain/model/payment-method.dto';

export class GrpcPaymentClient implements PaymentClient {
    getPaymentMethodsByIds(paymentMethodIds: string[]): Promise<PaymentMethodDto[]> {
        console.log(paymentMethodIds);
        return Promise.resolve([]);
    }
}
