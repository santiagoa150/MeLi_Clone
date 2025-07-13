import { GetProductDetailByIdQueryHandler } from './product/get-product-detail-by-id/get-product-detail-by-id.query-handler';
import { IQueryHandler } from '@nestjs/cqrs';
import { Type } from '@nestjs/common';

/**
 * This file contains the query handlers for the Gateway application.
 */
export const GatewayQueryHandlerProviders: Array<Type<IQueryHandler>> = [GetProductDetailByIdQueryHandler];
