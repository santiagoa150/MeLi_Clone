import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetReviewsByProductIdQuery } from './get-reviews-by-product-id.query';
import { Review } from '../../../domain/model/review';
import { ReviewRepository } from '../../../domain/repository/review.repository';
import { Inject, Logger } from '@nestjs/common';
import { InMemoryReviewRepository } from '../../../infrastructure/repository/in-memory/in-memory-review.repository';

/**
 * Query handler to retrieve all reviews associated with a specific product.
 */
@QueryHandler(GetReviewsByProductIdQuery)
export class GetReviewsByProductIdQueryHandler implements IQueryHandler<GetReviewsByProductIdQuery, Review[]> {
    private readonly _logger: Logger = new Logger(GetReviewsByProductIdQuery.name);

    /**
     * @param _repository - The ReviewRepository is used to access review data.
     */
    constructor(@Inject(InMemoryReviewRepository) private readonly _repository: ReviewRepository) {}

    /**
     * This method retrieves all reviews associated with a specific product.
     * @param query - The query containing the product ID for which reviews are to be retrieved.
     * @return A promise that resolves to an array of Review objects associated with the specified product.
     */
    async execute(query: GetReviewsByProductIdQuery): Promise<Review[]> {
        this._logger.log(`[${this.execute.name}] INIT :: ${query.productId.toString()}`);
        const reviews: Review[] = await this._repository.getReviewsByProductId(query.productId);
        this._logger.log(`[${this.execute.name}] FINISH ::`);
        return reviews;
    }
}
