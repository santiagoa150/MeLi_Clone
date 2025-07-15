import { ArrayValueObject } from '@shared/domain/value-object/array.value-object';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of ArrayValueObject.
 */
export class ArrayValueObjectMother {
    static createString(value?: string[]): ArrayValueObject<string> {
        return ArrayValueObject.create(value ?? [faker.string.sample(), faker.string.sample()]);
    }

    static createIds(value?: string[]): ArrayValueObject<string> {
        return ArrayValueObject.create(value ?? [faker.string.uuid(), faker.string.uuid()]);
    }

    static createNumber(value?: number[]): ArrayValueObject<number> {
        return ArrayValueObject.create(value ?? [faker.number.int(), faker.number.int()]);
    }
}
