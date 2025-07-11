import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { EnvPaymentsSchema } from './env.payments.schema';
import { resolve } from 'path';

@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvPaymentsSchema,
            envFilePath: resolve(__dirname, '.env.payments'),
        }),
    ],
})
export class PaymentsAppModule {}
