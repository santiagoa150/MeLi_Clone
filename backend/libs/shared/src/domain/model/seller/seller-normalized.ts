import { ApiProperty } from '@nestjs/swagger';

/**
 * SellerNormalized represents a normalized seller entity.
 */
export class SellerNormalized {
    @ApiProperty({ description: 'Unique identifier for the seller' })
    id: string;
}
