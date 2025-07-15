import { CurrencyValueObject } from '@shared/domain/value-object/currency.value-object';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of CurrencyValueObject.
 */
export class CurrencyValueObjectMother {
    static create(value?: string): CurrencyValueObject {
        return CurrencyValueObject.create(value ?? faker.finance.currencyCode());
    }
}
