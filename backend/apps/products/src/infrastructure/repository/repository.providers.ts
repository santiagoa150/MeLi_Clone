import { Provider } from '@nestjs/common';
import { InMemoryProductRepository } from './in-memory/in-memory-product.repository';

/**
 * This file contains the repository providers for the Products application.
 */
export const RepositoryProviders: Provider[] = [
    {
        provide: InMemoryProductRepository,
        useFactory: (): InMemoryProductRepository => {
            return new InMemoryProductRepository();
        },
    },
];
