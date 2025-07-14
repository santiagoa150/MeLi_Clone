import { Provider } from '@nestjs/common';
import { InMemorySellerRepository } from './in-memory/in-memory-seller.repository';

/**
 * This file contains the repository providers for the Sellers application.
 */
export const SellerRepositoryProviders: Provider[] = [
    {
        provide: InMemorySellerRepository,
        useFactory: (): InMemorySellerRepository => {
            return new InMemorySellerRepository();
        },
    },
];
