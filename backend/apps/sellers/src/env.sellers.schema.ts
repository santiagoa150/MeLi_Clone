import * as Joi from 'joi';

/**
 * Schema for validating environment variables in the Sellers application.
 */
export const EnvSellersSchema = Joi.object({
    SELLERS_APP_PORT: Joi.number().port(),
})
    .options({ presence: 'required' })
    .required();
