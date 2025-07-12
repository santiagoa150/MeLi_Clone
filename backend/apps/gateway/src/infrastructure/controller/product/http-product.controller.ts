import { Controller } from '@nestjs/common';
import { HttpProductControllerConstants } from './http-product.controller.constants';
import { ApiTags } from '@nestjs/swagger';
import { QueryBus } from '@nestjs/cqrs';

/**
 * This file contains the HTTP Product Controller.
 */
@Controller(HttpProductControllerConstants.API_PREFIX)
@ApiTags(HttpProductControllerConstants.API_TAG)
export class HttpProductController {
    /**
     * @param _queryBus - The QueryBus instance used to handle queries.
     */
    constructor(private readonly _queryBus: QueryBus) {}
}
