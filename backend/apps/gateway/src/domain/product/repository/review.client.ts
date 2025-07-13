import { ReviewNormalized } from '@shared/domain/model/review/review-normalized';

/**
 * This interface defines the contract for a review client that retrieves reviews for products.
 * It is used to interact with the review service to fetch product reviews.
 */
export interface ReviewClient {
    /**
     * This method retrieves reviews for a product by its ID.
     * @param productId - The ID of the product to retrieve reviews for.
     * @return A promise that resolves to an array of reviews for the specified product.
     */
    getReviewsByProductId(productId: string): Promise<ReviewNormalized[]>;
}
