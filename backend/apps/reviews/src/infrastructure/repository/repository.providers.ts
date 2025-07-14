import { Provider } from '@nestjs/common';
import { InMemoryReviewRepository } from './in-memory/in-memory-review.repository';

/**
 * This file contains the repository providers for the Reviews application.
 */
export const ReviewRepositoryProviders: Provider[] = [
    {
        provide: InMemoryReviewRepository,
        useFactory: (): InMemoryReviewRepository => {
            return new InMemoryReviewRepository();
        },
    },
];
