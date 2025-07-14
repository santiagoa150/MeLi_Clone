import { Type } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetReviewsByProductIdQueryHandler } from './get-reviews-by-product-id/get-reviews-by-product-id.query-handler';

/**
 * This file contains the query handlers for the Reviews application.
 */
export const ReviewQueryHandlerProviders: Array<Type<IQueryHandler>> = [GetReviewsByProductIdQueryHandler];
