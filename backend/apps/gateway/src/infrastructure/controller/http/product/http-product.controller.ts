import { Controller, Get, Param } from '@nestjs/common';
import { HttpProductControllerConstants } from './http-product.controller.constants';
import { ApiAcceptedResponse, ApiTags } from '@nestjs/swagger';
import { QueryBus } from '@nestjs/cqrs';
import { GetProductDetailByIdResponse } from './responses/get-product-detail-by-id.response';
import { ProductDetail } from '../../../../domain/product/model/product-detail';
import { GetProductDetailByIdQuery } from '../../../../application/query/product/get-product-detail-by-id/get-product-detail-by-id.query';

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

    /**
     * This method retrieves the details of a product by its ID.
     * @param productId - The ID of the product to retrieve details for.
     * @return A promise that resolves to the product details response.
     */
    @Get(HttpProductControllerConstants.API_PARAM_PRODUCT_ID)
    @ApiAcceptedResponse({ type: GetProductDetailByIdResponse })
    async getProductDetailById(@Param('id') productId: string): Promise<GetProductDetailByIdResponse> {
        const response = new GetProductDetailByIdResponse();
        response.data = await this._queryBus.execute<GetProductDetailByIdQuery, ProductDetail>(
            new GetProductDetailByIdQuery(productId),
        );
        return response;
    }
}
