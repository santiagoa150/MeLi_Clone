import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { EnvPaymentsSchema } from './env.payments.schema';
import { GrpcPaymentController } from './infrastructure/controller/grpc/grpc-payment.controller';
import { resolve } from 'path';
import { PaymentsRepositoryProviders } from './infrastructure/repository/repository.providers';
import { PaymentQueryHandlerProviders } from './application/query/query-handler.providers';

/**
 * This file contains the main module for the Payments application.
 * It imports the SharedModule and ConfigModule, and registers the controllers and providers for the application.
 */
@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvPaymentsSchema,
            envFilePath: resolve(__dirname, '.env.payments'),
        }),
    ],
    controllers: [GrpcPaymentController],
    providers: [...PaymentsRepositoryProviders, ...PaymentQueryHandlerProviders],
})
export class PaymentsAppModule {}
