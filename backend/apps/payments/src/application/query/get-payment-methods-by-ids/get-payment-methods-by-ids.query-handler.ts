import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPaymentMethodsByIdsQuery } from './get-payment-methods-by-ids.query';
import { PaymentMethod } from '../../../domain/model/payment-method';
import { PaymentMethodRepository } from '../../../domain/repository/payment-method.repository';
import { Inject, Logger } from '@nestjs/common';
import { InMemoryPaymentMethodRepository } from '../../../infrastructure/repository/in-memory/in-memory-payment-method.repository';

/**
 * GetPaymentMethodsByIdsQueryHandler class handles the query to retrieve payment methods by their IDs.
 */
@QueryHandler(GetPaymentMethodsByIdsQuery)
export class GetPaymentMethodsByIdsQueryHandler implements IQueryHandler<GetPaymentMethodsByIdsQuery, PaymentMethod[]> {
    private readonly _logger: Logger = new Logger(GetPaymentMethodsByIdsQueryHandler.name);

    /**
     * @param _repository - The PaymentMethodRepository instance used to access payment methods.
     */
    constructor(@Inject(InMemoryPaymentMethodRepository) private readonly _repository: PaymentMethodRepository) {}

    /**
     * This method retrieves payment methods by their IDs.
     * @param query - The query containing an array of payment method IDs.
     * @return A promise that resolves to an array of PaymentMethod objects corresponding to the provided IDs.
     */
    async execute(query: GetPaymentMethodsByIdsQuery): Promise<PaymentMethod[]> {
        this._logger.log(`[${this.execute.name}] INIT :: ${JSON.stringify(query.ids.toArray())}`);
        const paymentMethods: PaymentMethod[] = await this._repository.getPaymentMethodsByIds(query.ids);
        this._logger.log(`[${this.execute.name}] FINISH ::`);
        return paymentMethods;
    }
}
