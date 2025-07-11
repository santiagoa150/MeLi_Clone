import * as Joi from 'joi';

/**
 * Schema for validating environment variables in the Products application.
 */
export const EnvProductsSchema = Joi.object({
    PRODUCTS_APP_PORT: Joi.number().port(),
})
    .options({ presence: 'required' })
    .required();
