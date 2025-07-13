import { ApiProperty } from '@nestjs/swagger';
import { ProductDto } from '@shared/domain/model/product.dto';
import { SellerDto } from '@shared/domain/model/seller.dto';
import { ReviewDto } from '@shared/domain/model/review.dto';
import { PaymentMethodDto } from '@shared/domain/model/payment-method.dto';

/**
 * Represents the details of a product, including its seller, reviews, and payment methods.
 */
export class ProductDetail {
    @ApiProperty({ description: 'The product found', type: ProductDto })
    product: ProductDto;

    @ApiProperty({ description: 'The seller of the product', type: SellerDto, nullable: true })
    seller?: SellerDto;

    @ApiProperty({ description: 'The reviews of the product', type: [ReviewDto] })
    reviews: ReviewDto[];

    @ApiProperty({ description: 'The payment methods available for the product', type: [PaymentMethodDto] })
    paymentMethods: PaymentMethodDto[];
}
