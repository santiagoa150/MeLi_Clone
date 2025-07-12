import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { EnvGatewaySchema } from './env.gateway.schema';
import { HttpProductController } from './infrastructure/controller/product/http-product.controller';
import { resolve } from 'path';

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
    providers: [],
})
export class GatewayAppModule {}
