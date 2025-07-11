import { Logger, Module } from '@nestjs/common';

/**
 * Is a module that provides shared services and utilities across the application.
 */
@Module({
    providers: [Logger],
})
export class SharedModule {}
