import { ApiProperty } from '@nestjs/swagger';

/**
 * ReviewNormalized represents a normalized review entity.
 */
export class ReviewNormalized {
    @ApiProperty({ description: 'Unique identifier for the review' })
    id: string;

    @ApiProperty({ description: 'Unique identifier for the product being reviewed' })
    productId: string;

    @ApiProperty({ description: 'Unique identifier for the user who wrote the review' })
    userId: string;

    @ApiProperty({ description: 'Unique identifier for the user who wrote the review' })
    rating: number;

    @ApiProperty({ description: 'Unique identifier for the user who wrote the review' })
    createdAt: string;

    @ApiProperty({ description: 'Content of the review' })
    comment?: string;
}
