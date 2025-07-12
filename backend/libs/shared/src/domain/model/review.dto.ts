import { ApiProperty } from '@nestjs/swagger';

/**
 * Review Data Transfer Object (DTO) for representing review information.
 * This DTO is used to transfer review data between different layers of the application.
 */
export class ReviewDto {
    @ApiProperty({ description: 'Unique identifier for the review' })
    id: string;

    @ApiProperty({ description: 'Unique identifier for the product being reviewed' })
    productId: string;
}
