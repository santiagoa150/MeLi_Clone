import { NestFactory } from '@nestjs/core';
import { GatewayAppModule } from './gateway-app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExceptionFilter } from '@shared/infrastructure/filters/nestjs/nest.exception-filter';
import * as process from 'node:process';

/**
 * Bootstrap function to initialize the Gateway application.
 */
async function bootstrap(): Promise<[number, string, Logger]> {
    const port: number = Number(process.env.GATEWAY_APP_PORT);
    const swaggerPath: string = process.env.SWAGGER_PATH!;

    const app = await NestFactory.create(GatewayAppModule);
    app.setGlobalPrefix(process.env.APP_GLOBAL_PREFIX!);
    app.useGlobalFilters(new NestExceptionFilter());
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    /**
     * Setup Swagger documentation for the application.
     */
    const swaggerBuilder = new DocumentBuilder().setTitle(process.env.SWAGGER_TITLE!).build();
    const swaggerDocument = SwaggerModule.createDocument(app, swaggerBuilder);
    SwaggerModule.setup(swaggerPath, app, swaggerDocument);

    await app.listen(port);
    return [port, swaggerPath, app.get(Logger)];
}

void bootstrap().then(([port, swaggerPath, logger]) => {
    logger.log(`App is running on port: ${port}`, 'Bootstrap');
    logger.log(`Swagger is available at: ${swaggerPath}`, 'Bootstrap');
});
