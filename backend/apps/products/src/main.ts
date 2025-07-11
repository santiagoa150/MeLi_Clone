import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ProductsAppModule } from './products-app.module';
import { NestExceptionFilter } from '@shared/infrastructure/filters/nestjs/nest.exception-filter';
import { Transport } from '@nestjs/microservices';
import { protobufPackage } from './products';
import { join } from 'path';
import * as process from 'node:process';

async function bootstrap(): Promise<[number, Logger]> {
    const port: number = Number(process.env.PRODUCTS_APP_PORT);

    const app = await NestFactory.createMicroservice(ProductsAppModule, {
        transport: Transport.GRPC,
        options: {
            package: protobufPackage,
            protoPath: join(process.cwd(), ...'dist/apps/products/products.proto'.split('/')),
        },
        url: `0.0.0.0:${port}`,
    });
    app.useGlobalFilters(new NestExceptionFilter());
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.listen();

    return [port, app.get(Logger)];
}

void bootstrap().then(([port, logger]) => {
    logger.log(`Grpc Microservice is running on port: ${port}`, 'Bootstrap');
});
