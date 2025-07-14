import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSellerByIdQuery } from './get-seller-by-id.query';
import { Seller } from '../../../domain/model/seller';
import { Inject, Logger } from '@nestjs/common';
import { GetProductByIdQueryHandler } from '../../../../../products/src/application/query/get-product-by-id/get-product-by-id.query-handler';
import { InMemorySellerRepository } from '../../../infrastructure/repository/in-memory/in-memory-seller.repository';
import { SellerRepository } from '../../../domain/repository/seller.repository';
import { EntityNotFoundException } from '@shared/domain/exceptions/entity-not-found.exception';

/**
 * This class handles the query to get a seller by their ID.
 */
@QueryHandler(GetSellerByIdQuery)
export class GetSellerByIdQueryHandler implements IQueryHandler<GetSellerByIdQuery, Seller> {
    private readonly _logger: Logger = new Logger(GetProductByIdQueryHandler.name);

    /**
     * @param _repository - The SellerRepository instance used to retrieve seller details.
     */
    constructor(@Inject(InMemorySellerRepository) private readonly _repository: SellerRepository) {}

    /**
     * This method executes the query to retrieve a seller by their ID.
     * @param query - The GetSellerByIdQuery containing the seller ID.
     * @return A promise that resolves to the Seller object if found.
     */
    async execute(query: GetSellerByIdQuery): Promise<Seller> {
        this._logger.log(`[${this.execute.name}] INIT :: ${query.id.toString()}`);
        const seller = await this._repository.getSellerById(query.id);
        if (!seller) {
            throw new EntityNotFoundException(Seller.name, query.id.toString());
        }
        this._logger.log(`[${this.execute.name}] FINISH ::`);
        return seller;
    }
}
