import { StringValueObject } from '@shared/domain/value-object/string.value-object';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of StringValueObject.
 * This class provides methods to create a StringValueObject with a random string value,
 * or a string with a specific length.
 */
export class StringValueObjectMother {
    static create(value?: string): StringValueObject {
        return StringValueObject.create(value ?? faker.string.alpha(10));
    }
}
