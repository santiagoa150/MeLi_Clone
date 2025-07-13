import { HttpSuccessfulResponse } from '@shared/infrastructure/controller/responses/http-successful.response';
import { ProductDetail } from '../../../../domain/product/model/product-detail';
import { ApiProperty } from '@nestjs/swagger';

/**
 * This class represents the response for getting product details.
 */
export class GetProductDetailByIdResponse extends HttpSuccessfulResponse {
    @ApiProperty({ description: 'The product found', type: ProductDetail }) data: ProductDetail;
}
