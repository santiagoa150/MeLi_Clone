import { PaymentServicesClient } from '@shared/infrastructure/interfaces/grpc/payment/payments';
import { PaymentMethodNormalized } from '@shared/domain/model/payment/payment-method-normalized';
import { GrpcPaymentClient } from '../../../../../../../apps/gateway/src/infrastructure/repository/grpc/grpc-payment.client';
import { PaymentMethodNormalizedMother } from '../../../../../../libs/src/domain/model/payment/payment-method-normalized.mother';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';

describe('GrpcPaymentClient', () => {
    let client: GrpcPaymentClient;
    let mockPaymentServicesClient: jest.Mocked<PaymentServicesClient>;

    beforeEach(() => {
        mockPaymentServicesClient = {
            getPaymentMethodsByIds: jest.fn(),
        };

        client = new GrpcPaymentClient(mockPaymentServicesClient);
    });

    it('should call gRPC client with correct IDs and return payment methods', async () => {
        const ids: string[] = [faker.string.uuid(), faker.string.uuid()];
        const expectedMethods: PaymentMethodNormalized[] = ids.map((id) =>
            PaymentMethodNormalizedMother.create({ id }),
        );
        mockPaymentServicesClient.getPaymentMethodsByIds.mockReturnValue(of({ paymentMethods: expectedMethods }));

        const result = await client.getPaymentMethodsByIds(ids);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockPaymentServicesClient.getPaymentMethodsByIds).toHaveBeenCalledWith({ ids });
        expect(result).toEqual(expectedMethods);
    });

    it('should call gRPC even with empty ID list', async () => {
        mockPaymentServicesClient.getPaymentMethodsByIds.mockReturnValue(of({ paymentMethods: [] }));

        const result = await client.getPaymentMethodsByIds([]);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockPaymentServicesClient.getPaymentMethodsByIds).toHaveBeenCalledWith({ ids: [] });
        expect(result).toEqual([]);
    });
});
