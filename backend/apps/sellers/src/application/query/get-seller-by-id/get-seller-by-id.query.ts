import { IQuery } from '@nestjs/cqrs';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';

/**
 * GetSellerByIdQuery class represents a query to retrieve a seller by their ID.
 */
export class GetSellerByIdQuery implements IQuery {
    /**
     * @param id - The unique identifier of the seller to be retrieved.
     */
    constructor(public readonly id: IdValueObject) {}
}
