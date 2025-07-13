import { Type } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetProductByIdQueryHandler } from './get-product-by-id/get-product-by-id.query-handler';

/**
 * This file contains the query handlers for the Products application.
 */
export const ProductQueryHandlerProviders: Array<Type<IQueryHandler>> = [GetProductByIdQueryHandler];
