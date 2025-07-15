import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { NumberValueObject } from '@shared/domain/value-object/number.value-object';
import { DateValueObject } from '@shared/domain/value-object/date.value-object';
import { StringValueObject } from '@shared/domain/value-object/string.value-object';
import { Review } from '../../../../../../apps/reviews/src/domain/model/review';
import { IdValueObjectMother } from '../../../../../libs/src/domain/value-object/id.value-object.mother';
import { NumberValueObjectMother } from '../../../../../libs/src/domain/value-object/number.value-object.mother';
import { DateValueObjectMother } from '../../../../../libs/src/domain/value-object/date.value-object.mother';
import { StringValueObjectMother } from '../../../../../libs/src/domain/value-object/string.value-object.mother';
import { faker } from '@faker-js/faker';

/**
 * Mother class for creating instances of Review.
 */
export class ReviewMother {
    static create(
        id?: IdValueObject,
        productId?: IdValueObject,
        userId?: IdValueObject,
        rating?: NumberValueObject,
        createdAt?: DateValueObject,
        comment?: StringValueObject,
    ): Review {
        return new Review(
            id ?? IdValueObjectMother.create(),
            productId ?? IdValueObjectMother.create(),
            userId ?? IdValueObjectMother.create(),
            rating ?? NumberValueObjectMother.createFloat(),
            createdAt ?? DateValueObjectMother.create(),
            comment ?? StringValueObjectMother.create(),
        );
    }

    static createFromNormalized(
        id?: string,
        productId?: string,
        userId?: string,
        rating?: number,
        createdAt?: Date,
        comment?: string,
    ): Review {
        return Review.create(
            id ?? faker.string.uuid(),
            productId ?? faker.string.uuid(),
            userId ?? faker.string.uuid(),
            rating ?? faker.number.float({ min: 0, max: 5 }),
            createdAt ?? faker.date.recent(),
            comment ?? faker.lorem.sentence(),
        );
    }
}
