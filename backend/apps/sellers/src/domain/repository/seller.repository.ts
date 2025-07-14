import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { Seller } from '../model/seller';

/**
 * SellerRepository defines the contract for seller-related data operations.
 * It provides methods to retrieve seller information by their unique identifier.
 */
export interface SellerRepository {
    /**
     * Retrieves a seller by its unique identifier.
     * @param id - The unique identifier of the seller to retrieve.
     * @return A promise that resolves to the seller if found, or undefined if not found.
     */
    getSellerById(id: IdValueObject): Promise<Seller | undefined>;
}
