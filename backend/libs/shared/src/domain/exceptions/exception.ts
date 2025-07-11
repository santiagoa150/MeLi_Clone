import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Exception is a base class for exceptions that are shared across the application.
 */
export class Exception extends HttpException {
    /**
     * @param message - The message to be displayed in the exception.
     * @param status - The HTTP status code associated with the exception.
     */
    constructor(
        public readonly message: string,
        status: HttpStatus,
    ) {
        super({ message }, status);
    }
}
