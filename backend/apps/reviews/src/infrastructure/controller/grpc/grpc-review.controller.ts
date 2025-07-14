import {
    GetReviewsByProductIdRequest,
    GetReviewsByProductIdResponse,
    REVIEW_SERVICES_SERVICE_NAME,
    ReviewServicesController,
    ReviewServicesControllerMethods,
} from '@shared/infrastructure/interfaces/grpc/review/reviews';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { QueryBus } from '@nestjs/cqrs';
import { GrpcMethod } from '@nestjs/microservices';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { GetReviewsByProductIdQuery } from '../../../application/query/get-reviews-by-product-id/get-reviews-by-product-id.query';
import { Review } from '../../../domain/model/review';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';

/**
 * This file contains the gRPC Review Controller.
 * It handles gRPC requests for review-related operations.
 */
@Controller()
@ReviewServicesControllerMethods()
export class GrpcReviewController implements ReviewServicesController {
    /**
     * @param _queryBus - The QueryBus is used to dispatch queries to the appropriate query handlers.
     */
    constructor(private readonly _queryBus: QueryBus) {}

    /**
     * This method retrieves all reviews associated with a specific product.
     * @param request - The request containing the product ID for which reviews are to be retrieved.
     * @return An observable that emits the reviews associated with the specified product.
     */
    @GrpcMethod(REVIEW_SERVICES_SERVICE_NAME)
    getReviewsByProductId(request: GetReviewsByProductIdRequest): Observable<GetReviewsByProductIdResponse> {
        return fromPromise(
            (async () => {
                const reviews: Review[] = await this._queryBus.execute<GetReviewsByProductIdQuery, Review[]>(
                    new GetReviewsByProductIdQuery(IdValueObject.create(request.productId)),
                );
                return { reviews: reviews.map((review) => review.normalize()) };
            })(),
        );
    }
}
