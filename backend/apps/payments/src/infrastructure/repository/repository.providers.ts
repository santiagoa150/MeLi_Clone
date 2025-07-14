import { Provider } from '@nestjs/common';
import { InMemoryPaymentMethodRepository } from './in-memory/in-memory-payment-method.repository';

/**
 * This file contains the repository providers for the Payments application.
 */
export const PaymentsRepositoryProviders: Provider[] = [
    {
        provide: InMemoryPaymentMethodRepository,
        useFactory: (): InMemoryPaymentMethodRepository => {
            return new InMemoryPaymentMethodRepository();
        },
    },
];
