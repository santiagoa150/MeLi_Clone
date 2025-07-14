import { ReviewClient } from '../../../domain/product/repository/review.client';
import { ReviewNormalized } from '@shared/domain/model/review/review-normalized';
import { ReviewServicesClient } from '@shared/infrastructure/interfaces/grpc/review/reviews';
import { firstValueFrom } from 'rxjs';

/**
 * GrpcReviewClient is a client for interacting with review services via gRPC.
 */
export class GrpcReviewClient implements ReviewClient {
    /**
     * @param reviewServicesClient - The gRPC client for review services.
     */
    constructor(private readonly reviewServicesClient: ReviewServicesClient) {}

    /**
     * This method retrieves all reviews associated with a specific product.
     * @param productId - The ID of the product for which reviews are to be retrieved.
     * @return A promise that resolves to an array of normalized review data.
     */
    async getReviewsByProductId(productId: string): Promise<ReviewNormalized[]> {
        const data = await firstValueFrom(this.reviewServicesClient.getReviewsByProductId({ productId }));
        return data.reviews;
    }
}
