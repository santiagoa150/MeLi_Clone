import { IQuery } from '@nestjs/cqrs';
import { ArrayValueObject } from '@shared/domain/value-object/array.value-object';

/**
 * GetPaymentMethodsByIdsQuery class represents a query to retrieve payment methods by their IDs.
 */
export class GetPaymentMethodsByIdsQuery implements IQuery {
    /**
     * @param ids - An array of payment method IDs to be retrieved.
     */
    constructor(public readonly ids: ArrayValueObject<string>) {}
}
