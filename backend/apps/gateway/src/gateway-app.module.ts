import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { EnvGatewaySchema } from './env.gateway.schema';
import { HttpProductController } from './infrastructure/controller/product/http-product.controller';
import { GatewayQueryHandlerProviders } from './application/query/query-handlers.providers';
import { GatewayRepositoryProviders } from './infrastructure/repository/repository.providers';
import { resolve } from 'path';

/**
 * This module is the entry point for the Gateway application.
 * It configures the application, imports necessary modules, and registers controllers and providers.
 */
@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvGatewaySchema,
            envFilePath: resolve(__dirname, '.env.gateway'),
        }),
    ],
    controllers: [HttpProductController],
    providers: [...GatewayRepositoryProviders, ...GatewayQueryHandlerProviders],
})
export class GatewayAppModule {}
