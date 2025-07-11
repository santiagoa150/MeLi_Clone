import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { GatewaySchema } from '../gateway.schema';
import { resolve } from 'path';

@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: GatewaySchema,
            envFilePath: resolve(__dirname, '../.gateway.env'),
        }),
    ],
    controllers: [],
    providers: [],
})
export class GatewayAppModule {}
