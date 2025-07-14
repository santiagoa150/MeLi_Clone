import Joi from 'joi';

/**
 * Joi schema for validating the environment variables used in the API.
 */
export const EnvSchema: Joi.ObjectSchema = Joi.object({
    VITE_APP_PORT: Joi.number().port(),
    VITE_API_URL: Joi.string(),
})
    .options({ presence: 'required' })
    .required();
