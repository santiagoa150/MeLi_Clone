import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { EnvReviewsSchema } from './env.reviews.schema';
import { ReviewQueryHandlerProviders } from './application/query/query-handler.providers';
import { GrpcReviewController } from './infrastructure/controller/grpc/grpc-review.controller';
import { ReviewRepositoryProviders } from './infrastructure/repository/repository.providers';
import { resolve } from 'path';

/**
 * ReviewsAppModule is the main module for the Reviews application.
 * It imports the SharedModule and ConfigModule, sets up global configuration.
 * It also registers the GrpcReviewController and the necessary providers for repositories and query handlers.
 */
@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvReviewsSchema,
            envFilePath: resolve(__dirname, '.env.reviews'),
        }),
    ],
    controllers: [GrpcReviewController],
    providers: [...ReviewRepositoryProviders, ...ReviewQueryHandlerProviders],
})
export class ReviewsAppModule {}
