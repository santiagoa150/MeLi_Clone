import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { GetReviewsByProductIdQueryHandler } from '../../../../../../../apps/reviews/src/application/query/get-reviews-by-product-id/get-reviews-by-product-id.query-handler';
import { ReviewRepository } from '../../../../../../../apps/reviews/src/domain/repository/review.repository';
import { ReviewMother } from '../../../domain/model/review.mother';
import { IdValueObjectMother } from '../../../../../../libs/src/domain/value-object/id.value-object.mother';
import { Review } from '../../../../../../../apps/reviews/src/domain/model/review';
import { GetReviewsByProductIdQuery } from '../../../../../../../apps/reviews/src/application/query/get-reviews-by-product-id/get-reviews-by-product-id.query';

describe('GetReviewsByProductIdQueryHandler', () => {
    let handler: GetReviewsByProductIdQueryHandler;
    let mockRepository: jest.Mocked<ReviewRepository>;

    beforeEach(() => {
        mockRepository = {
            getReviewsByProductId: jest.fn(),
        };

        handler = new GetReviewsByProductIdQueryHandler(mockRepository);
    });

    it('should return an array of reviews for the given product ID', async () => {
        const productId = IdValueObjectMother.create();
        const reviews: Review[] = [
            ReviewMother.create(undefined, productId),
            ReviewMother.create(undefined, productId),
        ];

        mockRepository.getReviewsByProductId.mockResolvedValue(reviews);

        const query = new GetReviewsByProductIdQuery(productId);
        const result = await handler.execute(query);

        expect(result).toEqual(reviews);
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockRepository.getReviewsByProductId).toHaveBeenCalledWith(productId);
    });

    it('should return an empty array if no reviews are found', async () => {
        const productId = IdValueObjectMother.create();
        mockRepository.getReviewsByProductId.mockResolvedValue([]);

        const query = new GetReviewsByProductIdQuery(productId);
        const result = await handler.execute(query);

        expect(result).toEqual([]);
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockRepository.getReviewsByProductId).toHaveBeenCalledWith(productId);
    });
});
