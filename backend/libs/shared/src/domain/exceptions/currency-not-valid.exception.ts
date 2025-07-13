import { Exception } from '@shared/domain/exceptions/exception';
import { HttpStatus } from '@nestjs/common';
import { SharedExceptionMessages } from '@shared/domain/exceptions/shared-exception-messages';

/**
 * CurrencyNotValidException is thrown when a currency value is not valid.
 * It extends the base Exception class and provides a specific error message.
 */
export class CurrencyNotValidException extends Exception {
    /**
     * @param currency - The currency that is not valid.
     * @param message - Optional custom message for the exception.
     */
    constructor(currency: string, message?: string) {
        super(
            (message ?? SharedExceptionMessages.CURRENCY_NOT_VALID).replace('{{currency}}', currency),
            HttpStatus.BAD_REQUEST,
        );
    }
}
