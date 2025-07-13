import { ProductClient } from '../../../../domain/product/repository/product.client';
import { ReviewClient } from '../../../../domain/product/repository/review.client';
import { PaymentClient } from '../../../../domain/product/repository/payment.client';
import { SellerClient } from '../../../../domain/product/repository/seller.client';
import { GrpcProductClient } from '../../../../infrastructure/repository/product/grpc/grpc-product.client';
import { GrpcSellerClient } from '../../../../infrastructure/repository/product/grpc/grpc-seller.client';
import { GrpcReviewClient } from '../../../../infrastructure/repository/product/grpc/grpc-review.client';
import { GrpcPaymentClient } from '../../../../infrastructure/repository/product/grpc/grpc-payment.client';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductDetailByIdQuery } from './get-product-detail-by-id.query';
import { ProductDetail } from '../../../../domain/product/model/product-detail';
import { ProductDto } from '@shared/domain/model/product.dto';
import { Inject, Logger } from '@nestjs/common';

/**
 * This class handles the query to get the details of a product by its ID.
 */
@QueryHandler(GetProductDetailByIdQuery)
export class GetProductDetailByIdQueryHandler implements IQueryHandler<GetProductDetailByIdQuery, ProductDetail> {
    private readonly _logger: Logger = new Logger(GetProductDetailByIdQueryHandler.name);

    /**
     * @param _productClient - The ProductClient instance used to retrieve product details.
     * @param _sellerClient - The SellerClient instance used to retrieve seller details.
     * @param _reviewClient - The ReviewClient instance used to retrieve product reviews.
     * @param _paymentClient - The PaymentClient instance used to retrieve payment methods.
     */
    constructor(
        @Inject(GrpcProductClient) private readonly _productClient: ProductClient,
        @Inject(GrpcSellerClient) private readonly _sellerClient: SellerClient,
        @Inject(GrpcReviewClient) private readonly _reviewClient: ReviewClient,
        @Inject(GrpcPaymentClient) private readonly _paymentClient: PaymentClient,
    ) {}

    /**
     * This method executes the query to get the product details by its ID.
     * @param query - The query containing the product ID to retrieve details for.
     * @return A promise that resolves to the product details.
     */
    async execute(query: GetProductDetailByIdQuery): Promise<ProductDetail> {
        this._logger.log(`[${this.execute.name}] INIT :: ${JSON.stringify(query)}`);
        const product: ProductDto = await this._productClient.getProductById(query.productId);
        const [reviewsResult, paymentMethodsResult, sellerResult] = await Promise.allSettled([
            this._reviewClient.getReviewsByProductId(query.productId),
            this._paymentClient.getPaymentMethodsByIds(product.paymentMethods),
            this._sellerClient.getSellerById(product.sellerId),
        ]);

        const productDetail: ProductDetail = {
            product,
            reviews: reviewsResult.status === 'fulfilled' ? reviewsResult.value : [],
            paymentMethods: paymentMethodsResult.status === 'fulfilled' ? paymentMethodsResult.value : [],
            seller: sellerResult.status === 'fulfilled' ? sellerResult.value : undefined,
        };
        this._logger.log(`[${this.execute.name}] FINISH ::`);
        return productDetail;
    }
}
