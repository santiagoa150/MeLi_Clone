import { Type } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetSellerByIdQueryHandler } from './get-seller-by-id/get-seller-by-id.query-handler';

/**
 * This file contains the query handlers for the Sellers application.
 */
export const SellerQueryHandlerProviders: Array<Type<IQueryHandler>> = [GetSellerByIdQueryHandler];
