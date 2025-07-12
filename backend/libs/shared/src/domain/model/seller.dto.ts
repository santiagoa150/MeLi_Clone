import { ApiProperty } from '@nestjs/swagger';

/**
 * Seller Data Transfer Object (DTO) for representing seller information.
 * This DTO is used to transfer seller data between different layers of the application.
 */
export class SellerDto {
    @ApiProperty({ description: 'Unique identifier for the seller' })
    id: string;
}
