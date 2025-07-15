import { DateValueObject } from '@shared/domain/value-object/date.value-object';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of DateValueObject.
 */
export class DateValueObjectMother {
    static create(value?: Date): DateValueObject {
        return DateValueObject.create(value ?? faker.date.recent());
    }
}
