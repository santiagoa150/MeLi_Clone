import { ApiProperty } from '@nestjs/swagger';

/**
 * PaymentMethod Data Transfer Object (DTO) for representing payment method information.
 * This DTO is used to transfer payment method data between different layers of the application.
 */
export class PaymentMethodDto {
    @ApiProperty({ description: 'Unique identifier for the payment method' })
    id: string;
}
