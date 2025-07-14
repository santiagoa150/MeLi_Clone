import { Provider } from '@nestjs/common';
import { GrpcProductClient } from './grpc/grpc-product.client';
import { GrpcSellerClient } from './grpc/grpc-seller.client';
import { GrpcReviewClient } from './grpc/grpc-review.client';
import { GrpcPaymentClient } from './grpc/grpc-payment.client';
import {
    PRODUCT_SERVICES_SERVICE_NAME,
    PRODUCTS_GRPC_PACKAGE_PACKAGE_NAME,
    ProductServicesClient,
} from '@shared/infrastructure/interfaces/grpc/product/products';
import { ClientGrpc } from '@nestjs/microservices';
import {
    REVIEW_SERVICES_SERVICE_NAME,
    REVIEWS_GRPC_PACKAGE_PACKAGE_NAME,
    ReviewServicesClient,
} from '@shared/infrastructure/interfaces/grpc/review/reviews';

/**
 * This file contains the repository providers for the Gateway application.
 */
export const GatewayRepositoryProviders: Provider[] = [
    {
        inject: [PRODUCTS_GRPC_PACKAGE_PACKAGE_NAME],
        provide: GrpcProductClient,
        useFactory: (client: ClientGrpc): GrpcProductClient => {
            return new GrpcProductClient(client.getService<ProductServicesClient>(PRODUCT_SERVICES_SERVICE_NAME));
        },
    },
    {
        provide: GrpcSellerClient,
        useFactory: (): GrpcSellerClient => {
            return new GrpcSellerClient();
        },
    },
    {
        inject: [REVIEWS_GRPC_PACKAGE_PACKAGE_NAME],
        provide: GrpcReviewClient,
        useFactory: (client: ClientGrpc): GrpcReviewClient => {
            return new GrpcReviewClient(client.getService<ReviewServicesClient>(REVIEW_SERVICES_SERVICE_NAME));
        },
    },
    {
        provide: GrpcPaymentClient,
        useFactory: (): GrpcPaymentClient => {
            return new GrpcPaymentClient();
        },
    },
];
