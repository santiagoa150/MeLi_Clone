import { ApiProperty } from '@nestjs/swagger';

/**
 * PaymentMethodNormalized represents a normalized payment method entity.
 */
export class PaymentMethodNormalized {
    @ApiProperty({ description: 'Unique identifier for the payment method' })
    id: string;
}
