import { ApiProperty } from '@nestjs/swagger';

/**
 * Product Data Transfer Object (DTO) for representing product information.
 * This DTO is used to transfer product data between different layers of the application.
 */
export class ProductDto {
    @ApiProperty({ description: 'Unique identifier for the product' })
    id: string;

    @ApiProperty({ description: 'Unique identifier fot the product seller' })
    sellerId: string;

    @ApiProperty({ description: 'Accepted payment methods for the product' })
    paymentMethods: string[];
}
