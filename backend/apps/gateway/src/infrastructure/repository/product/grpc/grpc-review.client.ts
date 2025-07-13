import { ReviewClient } from '../../../../domain/product/repository/review.client';
import { ReviewNormalized } from '@shared/domain/model/review/review-normalized';

export class GrpcReviewClient implements ReviewClient {
    getReviewsByProductId(productId: string): Promise<ReviewNormalized[]> {
        console.log(productId);
        return Promise.resolve([]);
    }
}
