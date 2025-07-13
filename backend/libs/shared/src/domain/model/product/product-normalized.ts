import { ApiProperty } from '@nestjs/swagger';
import { ProductAttributeNormalized } from '@shared/domain/model/product/product-attribute-normalized';

/**
 * ProductNormalized represents a normalized product entity.
 */
export class ProductNormalized {
    @ApiProperty({ description: 'Unique identifier for the product' })
    id: string;

    @ApiProperty({ description: 'Title of the product' })
    title: string;

    @ApiProperty({ description: 'Description of the product' })
    description: string;

    @ApiProperty({ description: 'Price of the product' })
    price: number;

    @ApiProperty({ description: 'Currency of the product price' })
    currency: string;

    @ApiProperty({ description: 'Stock quantity of the product' })
    stock: number;

    @ApiProperty({ description: 'Quantity of the product sold' })
    soldQuantity: number;

    @ApiProperty({ description: 'Array of image IDs associated with the product' })
    imagesIds: string[];

    @ApiProperty({ description: 'ID of the main image for the product' })
    mainImageId: string;

    @ApiProperty({ description: 'Array of category IDs the product belongs to' })
    categories: string[];

    @ApiProperty({ description: 'Average rating of the product' })
    rating: number;

    @ApiProperty({ description: 'Count of reviews for the product' })
    reviewsCount: number;

    @ApiProperty({ description: 'Indicates if the product is a best seller' })
    isBestSeller: boolean;

    @ApiProperty({ description: 'Attributes of the product', type: [ProductAttributeNormalized] })
    attributes: ProductAttributeNormalized[];

    @ApiProperty({ description: 'Unique identifier fot the product seller' })
    sellerId: string;

    @ApiProperty({ description: 'Accepted payment methods for the product' })
    paymentMethods: string[];

    @ApiProperty({ description: 'Discount percentage applied to the product', required: false })
    discountPercentage?: number;
}
