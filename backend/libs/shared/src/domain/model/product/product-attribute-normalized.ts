import { ApiProperty } from '@nestjs/swagger';

/**
 * ProductAttributeNormalized represents a normalized product attribute entity.
 */
export class ProductAttributeNormalized {
    @ApiProperty({ description: 'The name of the product attribute.' })
    name: string;

    @ApiProperty({ description: 'The value of the product attribute.' })
    value: string;
}
