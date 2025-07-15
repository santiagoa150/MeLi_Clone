import { GetPaymentMethodsByIdsQueryHandler } from '../../../../../../../apps/payments/src/application/query/get-payment-methods-by-ids/get-payment-methods-by-ids.query-handler';
import { PaymentMethodRepository } from '../../../../../../../apps/payments/src/domain/repository/payment-method.repository';
import { GetPaymentMethodsByIdsQuery } from '../../../../../../../apps/payments/src/application/query/get-payment-methods-by-ids/get-payment-methods-by-ids.query';
import { PaymentMethodMother } from '../../../domain/model/payment-method.mother';
import { ArrayValueObjectMother } from '../../../../../../libs/src/domain/value-object/array.value-object.mother';
import { PaymentMethod } from '../../../../../../../apps/payments/src/domain/model/payment-method';

describe('GetPaymentMethodsByIdsQueryHandler', () => {
    let handler: GetPaymentMethodsByIdsQueryHandler;
    let mockRepository: jest.Mocked<PaymentMethodRepository>;

    beforeEach(() => {
        mockRepository = {
            getPaymentMethodsByIds: jest.fn(),
        };

        handler = new GetPaymentMethodsByIdsQueryHandler(mockRepository);
    });

    it('should return a list of payment methods when valid IDs are provided', async () => {
        const ids = ArrayValueObjectMother.createIds();
        const query = new GetPaymentMethodsByIdsQuery(ids);

        const paymentMethods: PaymentMethod[] = ids.toArray().map((id) => PaymentMethodMother.createFromNormalized(id));
        mockRepository.getPaymentMethodsByIds.mockResolvedValue(paymentMethods);

        const result = await handler.execute(query);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockRepository.getPaymentMethodsByIds).toHaveBeenCalledWith(ids);
        expect(result).toEqual(paymentMethods);
    });

    it('should return an empty array when no payment methods are found', async () => {
        const ids = ArrayValueObjectMother.createIds();
        const query = new GetPaymentMethodsByIdsQuery(ids);

        mockRepository.getPaymentMethodsByIds.mockResolvedValue([]);

        const result = await handler.execute(query);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockRepository.getPaymentMethodsByIds).toHaveBeenCalledWith(ids);
        expect(result).toEqual([]);
    });
});
