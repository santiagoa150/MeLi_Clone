import { ApiProperty } from '@nestjs/swagger';

/**
 * SellerNormalized represents a normalized seller entity.
 */
export class SellerNormalized {
    @ApiProperty({ description: 'Unique identifier for the seller' })
    id: string;

    @ApiProperty({ description: 'Name of the seller' })
    name: string;

    @ApiProperty({ description: 'Total number of products offered by the seller' })
    totalProducts: number;

    @ApiProperty({ description: 'Total sales amount of the seller' })
    totalSales: number;

    @ApiProperty({ description: "Seller's customer service rating" })
    customerServiceRating: number;

    @ApiProperty({ description: 'On-time delivery rate of the seller' })
    onTimeDeliveryRating: number;

    @ApiProperty({ description: 'Sales performance rating of the seller' })
    salesPerformanceRating: number;

    @ApiProperty({ description: "Unique identifier for the seller's image" })
    imageId: string;

    @ApiProperty({ description: 'Indicates if the seller is an official seller' })
    isOfficial: boolean;

    @ApiProperty({ description: 'Array of badges associated with the seller' })
    badges: string[];
}
