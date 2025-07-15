import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { InMemoryReviewRepository } from '../../../../../../../apps/reviews/src/infrastructure/repository/in-memory/in-memory-review.repository';
import { Review } from '../../../../../../../apps/reviews/src/domain/model/review';
import { IdValueObjectMother } from '../../../../../../libs/src/domain/value-object/id.value-object.mother';

describe('InMemoryReviewRepository', () => {
    let repository: InMemoryReviewRepository;

    beforeEach(() => {
        repository = new InMemoryReviewRepository();
    });

    it('should return all reviews associated with the given product ID', async () => {
        const productId = IdValueObjectMother.create('c07dce9d-cd5d-4c67-8368-480546fcdbee');

        const reviews = await repository.getReviewsByProductId(productId);

        expect(reviews).toBeInstanceOf(Array);
        expect(reviews.length).toBe(5);
        reviews.forEach((review) => {
            expect(review).toBeInstanceOf(Review);
            expect(review.productId.toString()).toBe(productId.toString());
        });
    });

    it('should return reviews sorted by createdAt ascending', async () => {
        const productId = IdValueObjectMother.create('c07dce9d-cd5d-4c67-8368-480546fcdbee');

        const reviews = await repository.getReviewsByProductId(productId);

        const timestamps = reviews.map((r) => r.createdAt.toDate().getTime());
        const sortedTimestamps = [...timestamps].sort((a, b) => a - b);

        expect(timestamps).toEqual(sortedTimestamps);
    });

    it('should return an empty array if no reviews match the given product ID', async () => {
        const productId = IdValueObjectMother.create('non-existent-product-id');

        const reviews = await repository.getReviewsByProductId(productId);

        expect(reviews).toEqual([]);
    });
});
