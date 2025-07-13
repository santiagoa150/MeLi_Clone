import { IQuery } from '@nestjs/cqrs';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';

/**
 * GetProductByIdQuery is a query class used to retrieve a product by its ID.
 */
export class GetProductByIdQuery implements IQuery {
    /**
     * @param id - The ID of the product to retrieve, represented as an IdValueObject.
     */
    constructor(public readonly id: IdValueObject) {}
}
