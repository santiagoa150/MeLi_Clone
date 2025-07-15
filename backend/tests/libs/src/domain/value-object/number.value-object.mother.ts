import { NumberValueObject } from '@shared/domain/value-object/number.value-object';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of NumberValueObject.
 */
export class NumberValueObjectMother {
    static createInt(value?: number): NumberValueObject {
        return NumberValueObject.create(value ?? faker.number.int({ min: 1, max: 1000 }));
    }

    static createFloat(value?: number): NumberValueObject {
        return NumberValueObject.create(value ?? faker.number.float({ min: 0, max: 1000 }));
    }
}
