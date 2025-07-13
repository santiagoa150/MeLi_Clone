import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductByIdQuery } from './get-product-by-id.query';
import { Product } from '../../../domain/model/product';
import { ProductRepository } from '../../../domain/repository/product.repository';
import { Inject, Logger } from '@nestjs/common';
import { EntityNotFoundException } from '@shared/domain/exceptions/entity-not-found.exception';
import { InMemoryProductRepository } from '../../../infrastructure/repository/in-memory/in-memory-product.repository';

/**
 * This class handles the query to get a product by its ID.
 */
@QueryHandler(GetProductByIdQuery)
export class GetProductByIdQueryHandler implements IQueryHandler<GetProductByIdQuery, Product> {
    private readonly _logger: Logger = new Logger(GetProductByIdQueryHandler.name);

    /**
     * param _repository - The ProductRepository instance used to retrieve product details.
     */
    constructor(@Inject(InMemoryProductRepository) private readonly _repository: ProductRepository) {}

    /**
     * This method executes the query to retrieve a product by its ID.
     * @param query - The GetProductByIdQuery containing the product ID.
     * @return A promise that resolves to the Product object if found.
     */
    async execute(query: GetProductByIdQuery): Promise<Product> {
        this._logger.log(`[${this.execute.name}] INIT :: ${query.id.toString()}`);
        const product = await this._repository.getProductById(query.id);
        if (!product) {
            throw new EntityNotFoundException(Product.name, query.id.toString());
        }
        this._logger.log(`[${this.execute.name}] FINISH ::`);
        return product;
    }
}
