import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { Product } from '../model/product';

/**
 * ProductRepository defines the contract for product-related data operations.
 */
export interface ProductRepository {
    /**
     * Retrieves a product by its unique identifier.
     * @param id - The unique identifier of the product to retrieve.
     * @return A promise that resolves to the product if found, or undefined if not found.
     */
    getProductById(id: IdValueObject): Promise<Product | undefined>;
}
