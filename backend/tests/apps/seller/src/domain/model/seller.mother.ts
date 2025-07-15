import { Seller } from '../../../../../../apps/sellers/src/domain/model/seller';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { StringValueObject } from '@shared/domain/value-object/string.value-object';
import { NumberValueObject } from '@shared/domain/value-object/number.value-object';
import { BooleanValueObject } from '@shared/domain/value-object/boolean.value-object';
import { SellerBadgesConstants } from '../../../../../../apps/sellers/src/domain/model/seller-badges.constants';
import { IdValueObjectMother } from '../../../../../libs/src/domain/value-object/id.value-object.mother';
import { StringValueObjectMother } from '../../../../../libs/src/domain/value-object/string.value-object.mother';
import { NumberValueObjectMother } from '../../../../../libs/src/domain/value-object/number.value-object.mother';
import { faker } from '@faker-js/faker';

export class SellerMother {
    static create(
        id?: IdValueObject,
        name?: StringValueObject,
        totalProducts?: NumberValueObject,
        totalSales?: NumberValueObject,
        customerServiceRating?: NumberValueObject,
        onTimeDeliveryRating?: NumberValueObject,
        salesPerformanceRating?: NumberValueObject,
        imageId?: IdValueObject,
        isOfficial?: BooleanValueObject,
        badges?: SellerBadgesConstants[],
    ): Seller {
        return new Seller(
            id ?? IdValueObjectMother.create(),
            name ?? StringValueObjectMother.create(),
            totalProducts ?? NumberValueObjectMother.createInt(),
            totalSales ?? NumberValueObjectMother.createInt(),
            customerServiceRating ?? NumberValueObjectMother.createFloat(),
            onTimeDeliveryRating ?? NumberValueObjectMother.createFloat(),
            salesPerformanceRating ?? NumberValueObjectMother.createFloat(),
            imageId ?? IdValueObjectMother.create(),
            isOfficial ?? BooleanValueObject.create(false),
            badges ?? faker.helpers.arrayElements(Object.values(SellerBadgesConstants)),
        );
    }

    static createFromNormalized(
        id?: string,
        name?: string,
        totalProducts?: number,
        totalSales?: number,
        customerServiceRating?: number,
        onTimeDeliveryRating?: number,
        salesPerformanceRating?: number,
        imageId?: string,
        isOfficial?: boolean,
        badges?: SellerBadgesConstants[],
    ): Seller {
        return Seller.create(
            id ?? faker.string.uuid(),
            name ?? faker.company.name(),
            totalProducts ?? faker.number.int({ min: 1, max: 100 }),
            totalSales ?? faker.number.int({ min: 1, max: 10000 }),
            customerServiceRating ?? faker.number.float({ min: 0, max: 5 }),
            onTimeDeliveryRating ?? faker.number.float({ min: 0, max: 5 }),
            salesPerformanceRating ?? faker.number.float({ min: 0, max: 5 }),
            imageId ?? faker.string.uuid(),
            isOfficial ?? faker.datatype.boolean(),
            badges ?? faker.helpers.arrayElements(Object.values(SellerBadgesConstants)),
        );
    }
}
