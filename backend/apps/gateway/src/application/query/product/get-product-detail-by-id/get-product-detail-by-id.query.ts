import { IQuery } from '@nestjs/cqrs';

/**
 * This class represents a query to get the details of a product by its ID.
 */
export class GetProductDetailByIdQuery implements IQuery {
    /**
     * @param productId - The ID of the product to retrieve details for.
     */
    constructor(public readonly productId: string) {}
}
