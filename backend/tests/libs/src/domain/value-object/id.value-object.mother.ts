import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of IdValueObject.
 * This class provides a method to create an IdValueObject with a random UUID.
 */
export class IdValueObjectMother {
    static create(value?: string): IdValueObject {
        return IdValueObject.create(value ?? faker.string.uuid());
    }
}
