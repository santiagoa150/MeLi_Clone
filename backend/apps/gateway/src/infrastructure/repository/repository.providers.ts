import { Provider } from '@nestjs/common';
import { GrpcProductClient } from './product/grpc/grpc-product.client';
import { GrpcSellerClient } from './product/grpc/grpc-seller.client';
import { GrpcReviewClient } from './product/grpc/grpc-review.client';
import { GrpcPaymentClient } from './product/grpc/grpc-payment.client';

/**
 * This file contains the repository providers for the Gateway application.
 */
export const GatewayRepositoryProviders: Provider[] = [
    {
        inject: [],
        provide: GrpcProductClient,
        useFactory: (): GrpcProductClient => {
            return new GrpcProductClient();
        },
    },
    {
        inject: [],
        provide: GrpcSellerClient,
        useFactory: (): GrpcSellerClient => {
            return new GrpcSellerClient();
        },
    },
    {
        inject: [],
        provide: GrpcReviewClient,
        useFactory: (): GrpcReviewClient => {
            return new GrpcReviewClient();
        },
    },
    {
        inject: [],
        provide: GrpcPaymentClient,
        useFactory: (): GrpcPaymentClient => {
            return new GrpcPaymentClient();
        },
    },
];
