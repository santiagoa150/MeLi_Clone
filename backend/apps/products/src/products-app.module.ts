import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { EnvProductsSchema } from './env.products.schema';

@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvProductsSchema,
            envFilePath: resolve(__dirname, '.env.products'),
        }),
    ],
    controllers: [],
    providers: [],
})
export class ProductsAppModule {}
