import { StringValueObject } from '@shared/domain/value-object/string.value-object';
import { CurrencyNotValidException } from '@shared/domain/exceptions/currency-not-valid.exception';
import { SharedExceptionMessages } from '@shared/domain/exceptions/shared-exception-messages';

/**
 * CurrencyValueObject is a value object that represents a currency.
 */
export class CurrencyValueObject extends StringValueObject {
    /**
     * @param value - The currency value.
     */
    constructor(value: string) {
        CurrencyValueObject.validate(value);
        super(value);
    }

    /**
     * Validates the currency value.
     * @param value - The currency value to validate.
     * @throws {CurrencyNotValidException} - If the currency value is not valid.
     */
    static validate(value: string): void {
        if (!/^[A-Z]{3}$/.test(value)) {
            throw new CurrencyNotValidException(value, SharedExceptionMessages.CURRENCY_MUST_BE_3_UPPERCASE_LETTERS);
        }
    }
}
