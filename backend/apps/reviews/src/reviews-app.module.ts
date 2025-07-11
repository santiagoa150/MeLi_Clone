import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { EnvReviewsSchema } from './env.reviews.schema';
import { resolve } from 'path';

@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvReviewsSchema,
            envFilePath: resolve(__dirname, '.env.reviews'),
        }),
    ],
    controllers: [],
    providers: [],
})
export class ReviewsAppModule {}
