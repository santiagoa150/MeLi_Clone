import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { EnvSellersSchema } from './env.sellers.schema';
import { resolve } from 'path';

@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvSellersSchema,
            envFilePath: resolve(__dirname, '.env.sellers'),
        }),
    ],
})
export class SellersAppModule {}
