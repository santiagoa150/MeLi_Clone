import { Review } from '../model/review';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';

/**
 * ReviewRepository defines the contract for review-related data operations.
 * It provides methods to retrieve reviews associated with a specific product.
 */
export interface ReviewRepository {
    /**
     * Retrieves all reviews associated with a specific product.
     * @param productId - The unique identifier of the product for which reviews are to be retrieved.
     * @return A promise that resolves to an array of Review objects associated with the specified product.
     */
    getReviewsByProductId(productId: IdValueObject): Promise<Review[]>;
}
