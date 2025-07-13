import {
    GetProductByIdRequest,
    Product as GrpcProduct,
    PRODUCT_SERVICES_SERVICE_NAME,
    ProductServicesController,
    ProductServicesControllerMethods,
} from '@shared/infrastructure/interfaces/grpc/product/products';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { QueryBus } from '@nestjs/cqrs';
import { GrpcMethod } from '@nestjs/microservices';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { Product } from '../../../domain/model/product';
import { GetProductByIdQuery } from '../../../application/query/get-product-by-id/get-product-by-id.query';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';

/**
 * This file contains the gRPC Product Controller.
 * It handles gRPC requests for product-related operations.
 */
@Controller()
@ProductServicesControllerMethods()
export class GrpcProductController implements ProductServicesController {
    /**
     * @param _queryBus - The QueryBus instance used to handle queries.
     */
    constructor(private readonly _queryBus: QueryBus) {}

    /**
     * This method retrieves a product by its ID.
     * @param request - The request containing the product ID.
     * @return An observable that emits the product details as a GrpcProduct.
     */
    @GrpcMethod(PRODUCT_SERVICES_SERVICE_NAME)
    getProductById(request: GetProductByIdRequest): Observable<GrpcProduct> {
        return fromPromise(
            (async () => {
                const product: Product = await this._queryBus.execute<GetProductByIdQuery, Product>(
                    new GetProductByIdQuery(IdValueObject.create(request.id)),
                );
                return product.normalize();
            })(),
        );
    }
}
