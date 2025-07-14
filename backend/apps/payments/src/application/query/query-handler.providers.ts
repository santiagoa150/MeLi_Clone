import { Type } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetPaymentMethodsByIdsQueryHandler } from './get-payment-methods-by-ids/get-payment-methods-by-ids.query-handler';

/**
 * This file contains the query handlers for the Payments application.
 */
export const PaymentQueryHandlerProviders: Array<Type<IQueryHandler>> = [GetPaymentMethodsByIdsQueryHandler];
