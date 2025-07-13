import { ApiProperty } from '@nestjs/swagger';
import { ProductNormalized } from '@shared/domain/model/product/product-normalized';
import { SellerNormalized } from '@shared/domain/model/seller/seller-normalized';
import { ReviewNormalized } from '@shared/domain/model/review/review-normalized';
import { PaymentMethodNormalized } from '@shared/domain/model/payment/payment-method-normalized';

/**
 * Represents the details of a product, including its seller, reviews, and payment methods.
 */
export class ProductDetail {
    @ApiProperty({ description: 'The product found', type: ProductNormalized })
    product: ProductNormalized;

    @ApiProperty({ description: 'The seller of the product', type: SellerNormalized, required: false })
    seller?: SellerNormalized;

    @ApiProperty({ description: 'The reviews of the product', type: [ReviewNormalized] })
    reviews: ReviewNormalized[];

    @ApiProperty({ description: 'The payment methods available for the product', type: [PaymentMethodNormalized] })
    paymentMethods: PaymentMethodNormalized[];
}
