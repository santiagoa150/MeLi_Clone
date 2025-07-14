import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { EnvSellersSchema } from './env.sellers.schema';
import { resolve } from 'path';
import { SellerRepositoryProviders } from './infrastructure/repository/repository.providers';
import { SellerQueryHandlerProviders } from './application/query/query-handler.providers';
import { GrpcSellerController } from './infrastructure/controller/grpc/grpc-seller.controller';

/**
 * This module is the main entry point for the Sellers application.
 * It configures the application, imports necessary modules, controllers, and providers.
 */
@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvSellersSchema,
            envFilePath: resolve(__dirname, '.env.sellers'),
        }),
    ],
    controllers: [GrpcSellerController],
    providers: [...SellerRepositoryProviders, ...SellerQueryHandlerProviders],
})
export class SellersAppModule {}
