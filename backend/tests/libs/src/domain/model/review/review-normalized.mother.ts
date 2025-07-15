import { ReviewNormalized } from '@shared/domain/model/review/review-normalized';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of ReviewNormalized.
 */
export class ReviewNormalizedMother {
    static create(params?: Partial<ReviewNormalized>): ReviewNormalized {
        return {
            comment: params?.comment ?? faker.lorem.sentence(),
            createdAt: params?.createdAt ?? faker.date.recent().toISOString(),
            id: params?.id ?? faker.string.uuid(),
            productId: params?.productId ?? faker.string.uuid(),
            rating: params?.rating ?? faker.number.int({ min: 0, max: 5 }),
            userId: params?.userId ?? faker.string.uuid(),
        };
    }
}
