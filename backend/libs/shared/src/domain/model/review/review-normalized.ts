import { ApiProperty } from '@nestjs/swagger';

/**
 * ReviewNormalized represents a normalized review entity.
 */
export class ReviewNormalized {
    @ApiProperty({ description: 'Unique identifier for the review' })
    id: string;

    @ApiProperty({ description: 'Unique identifier for the product being reviewed' })
    productId: string;
}
