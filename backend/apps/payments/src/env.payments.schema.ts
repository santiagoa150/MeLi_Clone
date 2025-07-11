import * as Joi from 'joi';

export const EnvPaymentsSchema = Joi.object({
    PAYMENTS_APP_PORT: Joi.number().port(),
})
    .options({ presence: 'required' })
    .required();
