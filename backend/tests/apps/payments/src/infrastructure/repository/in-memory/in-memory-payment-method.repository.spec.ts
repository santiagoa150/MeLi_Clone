import { ArrayValueObject } from '@shared/domain/value-object/array.value-object';
import { InMemoryPaymentMethodRepository } from '../../../../../../../apps/payments/src/infrastructure/repository/in-memory/in-memory-payment-method.repository';
import { ArrayValueObjectMother } from '../../../../../../libs/src/domain/value-object/array.value-object.mother';
import { PaymentMethod } from '../../../../../../../apps/payments/src/domain/model/payment-method';
import { PaymentMethodBrandConstants } from '../../../../../../../apps/payments/src/domain/model/payment-method-brand.constants';

describe('InMemoryPaymentMethodRepository', () => {
    let repository: InMemoryPaymentMethodRepository;

    beforeEach(() => {
        repository = new InMemoryPaymentMethodRepository();
    });

    it('should return matching payment methods by IDs', async () => {
        const ids = ArrayValueObjectMother.createIds([
            'b040cd3e-729d-4510-94e7-e29f3d6e40f7',
            'f42e08f6-4b1b-4bd4-83d4-e9e2f188db02',
        ]);

        const result = await repository.getPaymentMethodsByIds(ids);

        expect(result).toHaveLength(2);
        expect(result[0]).toBeInstanceOf(PaymentMethod);
        expect(result[0].id.toString()).toBe('b040cd3e-729d-4510-94e7-e29f3d6e40f7');
        expect(result[1].brand.toString()).toBe(PaymentMethodBrandConstants.VISA);
    });

    it('should return an empty array if no payment methods match', async () => {
        const ids = new ArrayValueObject([
            'b040cd3e-729d-4510-94e7-e29f3d6e40f6',
            'b040cd3e-729d-4510-94e7-e29f3d6e40f2',
        ]);

        const result = await repository.getPaymentMethodsByIds(ids);

        expect(result).toEqual([]);
    });

    it('should return a subset of matching payment methods', async () => {
        const ids = new ArrayValueObject(['b040cd3e-729d-4510-94e7-e29f3d6e40f7', 'non-existent-id']);

        const result = await repository.getPaymentMethodsByIds(ids);

        expect(result).toHaveLength(1);
        expect(result[0].id.toString()).toBe('b040cd3e-729d-4510-94e7-e29f3d6e40f7');
    });
});
