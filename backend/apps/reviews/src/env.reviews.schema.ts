import * as Joi from 'joi';

/**
 * Schema for validating environment variables in the Reviews application.
 */
export const EnvReviewsSchema = Joi.object({
    REVIEWS_APP_PORT: Joi.number().port(),
})
    .options({ presence: 'required' })
    .required();
