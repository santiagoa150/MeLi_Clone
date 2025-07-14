import { Controller } from '@nestjs/common';
import {
    GetPaymentMethodsByIdsRequest,
    GetPaymentMethodsByIdsResponse,
    PAYMENT_SERVICES_SERVICE_NAME,
    PaymentServicesController,
    PaymentServicesControllerMethods,
} from '@shared/infrastructure/interfaces/grpc/payment/payments';
import { Observable } from 'rxjs';
import { QueryBus } from '@nestjs/cqrs';
import { GrpcMethod } from '@nestjs/microservices';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { GetPaymentMethodsByIdsQuery } from '../../../application/query/get-payment-methods-by-ids/get-payment-methods-by-ids.query';
import { PaymentMethod } from '../../../domain/model/payment-method';
import { ArrayValueObject } from '@shared/domain/value-object/array.value-object';

/**
 * This file contains the gRPC Payment Controller.
 * It handles gRPC requests for payment-related operations.
 */
@Controller()
@PaymentServicesControllerMethods()
export class GrpcPaymentController implements PaymentServicesController {
    /**
     * @param _queryBus - The QueryBus instance used to handle queries.
     */
    constructor(private readonly _queryBus: QueryBus) {}

    /**
     * This method retrieves payment methods by their IDs.
     * @param request - The request containing an array of payment method IDs.
     * @return An observable that emits the payment methods corresponding to the provided IDs.
     */
    @GrpcMethod(PAYMENT_SERVICES_SERVICE_NAME)
    getPaymentMethodsByIds(request: GetPaymentMethodsByIdsRequest): Observable<GetPaymentMethodsByIdsResponse> {
        return fromPromise(
            (async () => {
                const paymentMethods: PaymentMethod[] = await this._queryBus.execute<
                    GetPaymentMethodsByIdsQuery,
                    PaymentMethod[]
                >(new GetPaymentMethodsByIdsQuery(ArrayValueObject.create(request.ids)));
                return {
                    paymentMethods: paymentMethods.map((pM) => pM.normalize()),
                };
            })(),
        );
    }
}
