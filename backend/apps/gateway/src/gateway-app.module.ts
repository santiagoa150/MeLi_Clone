import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { EnvGatewaySchema } from './env.gateway.schema';
import { HttpProductController } from './infrastructure/controller/http/product/http-product.controller';
import { GatewayQueryHandlerProviders } from './application/query/query-handler.providers';
import { GatewayRepositoryProviders } from './infrastructure/repository/repository.providers';
import { join, resolve } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
    PRODUCTS_GRPC_PACKAGE_PACKAGE_NAME,
    protobufPackage as productsProtobufPackage,
} from '@shared/infrastructure/interfaces/grpc/product/products';
import {
    protobufPackage as reviewsProtobufPackage,
    REVIEWS_GRPC_PACKAGE_PACKAGE_NAME,
} from '@shared/infrastructure/interfaces/grpc/review/reviews';
import {
    protobufPackage as sellersProtobufPackage,
    SELLERS_GRPC_PACKAGE_PACKAGE_NAME,
} from '@shared/infrastructure/interfaces/grpc/seller/sellers';
import * as process from 'node:process';

/**
 * This module is the entry point for the Gateway application.
 * It configures the application, imports necessary modules, and registers controllers and providers.
 * It also sets up the gRPC client for product services.
 */
@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvGatewaySchema,
            envFilePath: resolve(__dirname, '.env.gateway'),
        }),
        ClientsModule.register([
            {
                transport: Transport.GRPC,
                name: PRODUCTS_GRPC_PACKAGE_PACKAGE_NAME,
                options: {
                    maxSendMessageLength: Math.pow(2, 32),
                    package: productsProtobufPackage,
                    protoPath: join(
                        process.cwd(),
                        ...'dist/libs/shared/infrastructure/interfaces/grpc/product/products.proto'.split('/'),
                    ),
                    url: process.env.GRPC_PRODUCTS_URL,
                },
            },
            {
                transport: Transport.GRPC,
                name: REVIEWS_GRPC_PACKAGE_PACKAGE_NAME,
                options: {
                    maxSendMessageLength: Math.pow(2, 32),
                    package: reviewsProtobufPackage,
                    protoPath: join(
                        process.cwd(),
                        ...'dist/libs/shared/infrastructure/interfaces/grpc/review/reviews.proto'.split('/'),
                    ),
                    url: process.env.GRPC_REVIEWS_URL,
                },
            },
            {
                transport: Transport.GRPC,
                name: SELLERS_GRPC_PACKAGE_PACKAGE_NAME,
                options: {
                    maxSendMessageLength: Math.pow(2, 32),
                    package: sellersProtobufPackage,
                    protoPath: join(
                        process.cwd(),
                        ...'dist/libs/shared/infrastructure/interfaces/grpc/seller/sellers.proto'.split('/'),
                    ),
                    url: process.env.GRPC_SELLERS_URL,
                },
            },
        ]),
    ],
    controllers: [HttpProductController],
    providers: [...GatewayRepositoryProviders, ...GatewayQueryHandlerProviders],
})
export class GatewayAppModule {}
