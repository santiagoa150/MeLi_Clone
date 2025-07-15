import { faker } from '@faker-js/faker';
import { of } from 'rxjs';
import { GrpcReviewClient } from '../../../../../../../apps/gateway/src/infrastructure/repository/grpc/grpc-review.client';
import { ReviewServicesClient } from '@shared/infrastructure/interfaces/grpc/review/reviews';
import { ReviewNormalizedMother } from '../../../../../../libs/src/domain/model/review/review-normalized.mother';
import { ReviewNormalized } from '@shared/domain/model/review/review-normalized';

/**
 * GrpcReviewClient is a client for interacting with review services via gRPC.
 */
describe('GrpcReviewClient', () => {
    let client: GrpcReviewClient;
    let mockReviewServicesClient: jest.Mocked<ReviewServicesClient>;

    beforeEach(() => {
        mockReviewServicesClient = {
            getReviewsByProductId: jest.fn(),
        };

        client = new GrpcReviewClient(mockReviewServicesClient);
    });

    it('should call gRPC client with correct productId and return reviews', async () => {
        const productId: string = faker.string.uuid();
        const expectedReviews: ReviewNormalized[] = [
            ReviewNormalizedMother.create({ productId }),
            ReviewNormalizedMother.create({ productId }),
        ];
        mockReviewServicesClient.getReviewsByProductId.mockReturnValue(of({ reviews: expectedReviews }));

        const result = await client.getReviewsByProductId(productId);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockReviewServicesClient.getReviewsByProductId).toHaveBeenCalledWith({ productId });
        expect(result).toEqual(expectedReviews);
    });

    it('should call gRPC even with empty ID list', async () => {
        const productId: string = faker.string.uuid();
        mockReviewServicesClient.getReviewsByProductId.mockReturnValue(of({ reviews: [] }));

        const result = await client.getReviewsByProductId(productId);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockReviewServicesClient.getReviewsByProductId).toHaveBeenCalledWith({ productId });
        expect(result).toEqual([]);
    });
});
