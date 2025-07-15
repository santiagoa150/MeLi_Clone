import { BooleanValueObject } from '@shared/domain/value-object/boolean.value-object';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of BooleanValueObject.
 */
export class BooleanValueObjectMother {
    static create(value?: boolean): BooleanValueObject {
        return BooleanValueObject.create(value ?? faker.datatype.boolean());
    }
}
