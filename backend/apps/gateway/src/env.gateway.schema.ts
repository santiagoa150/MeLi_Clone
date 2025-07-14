import * as Joi from 'joi';

/**
 * Schema for validating environment variables in the Gateway application.
 */
export const EnvGatewaySchema = Joi.object({
    GATEWAY_APP_PORT: Joi.number().port(),
    APP_GLOBAL_PREFIX: Joi.string(),
    SWAGGER_TITLE: Joi.string(),
    SWAGGER_PATH: Joi.string(),
    GRPC_PRODUCTS_URL: Joi.string(),
    GRPC_REVIEWS_URL: Joi.string(),
    GRPC_SELLERS_URL: Joi.string(),
})
    .options({ presence: 'required' })
    .required();
