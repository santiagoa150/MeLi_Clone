import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ProductsAppModule } from './products-app.module';
import { NestExceptionFilter } from '@shared/infrastructure/filters/nestjs/nest.exception-filter';
import { Transport } from '@nestjs/microservices';
import { protobufPackage } from '@shared/infrastructure/interfaces/grpc/product/products';
import { join } from 'path';
import * as process from 'node:process';

/**
 * Bootstrap function to initialize the Products application.
 */
async function bootstrap(): Promise<[number, Logger]> {
    const port: number = Number(process.env.PRODUCTS_APP_PORT);

    /**
     * Create a microservice using NestJS with gRPC transport.
     */
    const app = await NestFactory.createMicroservice(ProductsAppModule, {
        transport: Transport.GRPC,
        options: {
            package: protobufPackage,
            protoPath: join(
                process.cwd(),
                ...'dist/libs/shared/infrastructure/interfaces/grpc/product/products.proto'.split('/'),
            ),
            url: `0.0.0.0:${port}`,
        },
    });
    app.useGlobalFilters(new NestExceptionFilter());
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.listen();

    return [port, app.get(Logger)];
}

void bootstrap().then(([port, logger]) => {
    logger.log(`Grpc Microservice is running on port: ${port}`, 'Bootstrap');
});
