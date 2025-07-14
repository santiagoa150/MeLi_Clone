import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { EnvProductsSchema } from './env.products.schema';
import { ProductQueryHandlerProviders } from './application/query/query-handler.providers';
import { ProductRepositoryProviders } from './infrastructure/repository/repository.providers';
import { GrpcProductController } from './infrastructure/controller/grpc/grpc-product.controller';

/**
 * This file contains the Products application module.
 * It imports necessary modules, controllers, and providers for the Products application.
 */
@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvProductsSchema,
            envFilePath: resolve(__dirname, '.env.products'),
        }),
    ],
    controllers: [GrpcProductController],
    providers: [...ProductRepositoryProviders, ...ProductQueryHandlerProviders],
})
export class ProductsAppModule {}
