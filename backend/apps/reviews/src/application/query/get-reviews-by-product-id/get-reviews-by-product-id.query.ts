import { IQuery } from '@nestjs/cqrs';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';

/**
 * Query to retrieve all reviews associated with a specific product.
 */
export class GetReviewsByProductIdQuery implements IQuery {
    /**
     * @param productId - The unique identifier of the product for which reviews are to be retrieved.
     */
    constructor(public readonly productId: IdValueObject) {}
}
