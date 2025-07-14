import {
    GetSellerBySellerIdRequest,
    Seller as GrpcSeller,
    SELLER_SERVICES_SERVICE_NAME,
    SellerServicesController,
    SellerServicesControllerMethods,
} from '@shared/infrastructure/interfaces/grpc/seller/sellers';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { QueryBus } from '@nestjs/cqrs';
import { GrpcMethod } from '@nestjs/microservices';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { GetSellerByIdQuery } from '../../../application/query/get-seller-by-id/get-seller-by-id.query';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { Seller } from '../../../domain/model/seller';

/**
 * This file contains the gRPC Seller Controller.
 * It handles gRPC requests for seller-related operations.
 */
@Controller()
@SellerServicesControllerMethods()
export class GrpcSellerController implements SellerServicesController {
    /**
     * @param _queryBus - The QueryBus instance used to handle queries.
     */
    constructor(private readonly _queryBus: QueryBus) {}

    /**
     * This method retrieves a seller by their seller ID.
     * @param request - The request containing the seller ID.
     * @return An observable that emits the seller details as a Seller.
     */
    @GrpcMethod(SELLER_SERVICES_SERVICE_NAME)
    getSellerBySellerId(request: GetSellerBySellerIdRequest): Observable<GrpcSeller> {
        return fromPromise(
            (async () => {
                const seller = await this._queryBus.execute<GetSellerByIdQuery, Seller>(
                    new GetSellerByIdQuery(IdValueObject.create(request.id)),
                );
                return seller.normalize();
            })(),
        );
    }
}
