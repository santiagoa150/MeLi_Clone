import { ProductNormalized } from '@shared/domain/model/product/product-normalized';
import { GetProductDetailByIdQueryHandler } from '../../../../../../../../apps/gateway/src/application/query/product/get-product-detail-by-id/get-product-detail-by-id.query-handler';
import { ProductClient } from '../../../../../../../../apps/gateway/src/domain/product/repository/product.client';
import { ReviewClient } from '../../../../../../../../apps/gateway/src/domain/product/repository/review.client';
import { PaymentClient } from '../../../../../../../../apps/gateway/src/domain/product/repository/payment.client';
import { SellerClient } from '../../../../../../../../apps/gateway/src/domain/product/repository/seller.client';
import { GetProductDetailByIdQuery } from '../../../../../../../../apps/gateway/src/application/query/product/get-product-detail-by-id/get-product-detail-by-id.query';
import { ProductNormalizedMother } from '../../../../../../../libs/src/domain/model/product/product-normalized.mother';
import { faker } from '@faker-js/faker';
import { ReviewNormalizedMother } from '../../../../../../../libs/src/domain/model/review/review-normalized.mother';
import { PaymentMethodNormalizedMother } from '../../../../../../../libs/src/domain/model/payment/payment-method-normalized.mother';
import { SellerNormalizedMother } from '../../../../../../../libs/src/domain/model/seller/seller-normalized.mother';

describe('GetProductDetailByIdQueryHandler', () => {
    let handler: GetProductDetailByIdQueryHandler;

    const mockProductClient: jest.Mocked<ProductClient> = {
        getProductById: jest.fn(),
    };

    const mockReviewClient: jest.Mocked<ReviewClient> = {
        getReviewsByProductId: jest.fn(),
    };

    const mockPaymentClient: jest.Mocked<PaymentClient> = {
        getPaymentMethodsByIds: jest.fn(),
    };

    const mockSellerClient: jest.Mocked<SellerClient> = {
        getSellerById: jest.fn(),
    };

    beforeEach(() => {
        handler = new GetProductDetailByIdQueryHandler(
            mockProductClient,
            mockSellerClient,
            mockReviewClient,
            mockPaymentClient,
        );
        jest.clearAllMocks();
    });

    it('should return complete product details when all services succeed', async () => {
        const productId: string = faker.string.uuid();
        const paymentMethodsIds: string[] = [faker.string.uuid(), faker.string.uuid()];
        const query = new GetProductDetailByIdQuery(productId);

        const product: ProductNormalized = ProductNormalizedMother.create({
            id: productId,
            paymentMethods: paymentMethodsIds,
        });

        const reviews = [
            ReviewNormalizedMother.create({ productId }),
            ReviewNormalizedMother.create({ productId }),
            ReviewNormalizedMother.create({ productId }),
        ];
        const paymentMethods = paymentMethodsIds.map((id) => PaymentMethodNormalizedMother.create({ id }));

        const seller = SellerNormalizedMother.create({ id: product.sellerId });

        mockProductClient.getProductById.mockResolvedValue(product);
        mockReviewClient.getReviewsByProductId.mockResolvedValue(reviews);
        mockPaymentClient.getPaymentMethodsByIds.mockResolvedValue(paymentMethods);
        mockSellerClient.getSellerById.mockResolvedValue(seller);

        const result = await handler.execute(query);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockProductClient.getProductById).toHaveBeenCalledWith(productId);
        expect(result).toEqual({
            product,
            reviews,
            paymentMethods,
            seller,
        });
    });

    it('should handle rejected promises gracefully', async () => {
        const productId: string = faker.string.uuid();
        const query = new GetProductDetailByIdQuery(productId);

        const product: ProductNormalized = ProductNormalizedMother.create({ id: productId });

        mockProductClient.getProductById.mockResolvedValue(product);
        mockReviewClient.getReviewsByProductId.mockRejectedValue(new Error('Reviews failed'));
        mockPaymentClient.getPaymentMethodsByIds.mockResolvedValue([]);
        mockSellerClient.getSellerById.mockRejectedValue(new Error('Seller failed'));

        const result = await handler.execute(query);

        expect(result).toEqual({
            product,
            reviews: [],
            paymentMethods: [],
            seller: undefined,
        });
    });
});
