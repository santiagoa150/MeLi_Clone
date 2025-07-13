import { ProductDto } from '@shared/domain/model/product.dto';

/**
 * This interface defines the contract for a product client that retrieves product details.
 * It is used to interact with the product service to fetch product information.
 */
export interface ProductClient {
    /**
     * This method retrieves a product by its ID.
     * @param productId - The ID of the product to retrieve.
     * @return A promise that resolves to the product details.
     */
    getProductById(productId: string): Promise<ProductDto>;
}
