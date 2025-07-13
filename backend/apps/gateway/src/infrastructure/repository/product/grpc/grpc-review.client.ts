import { ReviewClient } from '../../../../domain/product/repository/review.client';
import { ReviewDto } from '@shared/domain/model/review.dto';

export class GrpcReviewClient implements ReviewClient {
    getReviewsByProductId(productId: string): Promise<ReviewDto[]> {
        console.log(productId);
        return Promise.resolve([]);
    }
}
