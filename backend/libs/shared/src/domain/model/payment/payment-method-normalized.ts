import { ApiProperty } from '@nestjs/swagger';

/**
 * PaymentMethodNormalized represents a normalized payment method entity.
 */
export class PaymentMethodNormalized {
    @ApiProperty({ description: 'Unique identifier for the payment method' })
    id: string;

    @ApiProperty({ description: 'Type of the payment method' })
    type: string;

    @ApiProperty({ description: 'Brand of the payment method' })
    brand: string;
}
