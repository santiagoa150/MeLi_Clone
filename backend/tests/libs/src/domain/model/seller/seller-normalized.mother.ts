import { SellerNormalized } from '@shared/domain/model/seller/seller-normalized';
import { faker } from '@faker-js/faker';
import { SellerBadgesConstants } from '../../../../../../apps/sellers/src/domain/model/seller-badges.constants';

/**
 * Mother class for creating instances of SellerNormalized.
 */
export class SellerNormalizedMother {
    static create(params?: Partial<SellerNormalized>): SellerNormalized {
        return {
            badges: params?.badges ?? faker.helpers.arrayElements(Object.values(SellerBadgesConstants)),
            customerServiceRating: params?.customerServiceRating ?? faker.number.float({ min: 0, max: 5 }),
            id: params?.id ?? faker.string.uuid(),
            imageId: params?.imageId ?? faker.string.uuid(),
            isOfficial: params?.isOfficial ?? faker.datatype.boolean(),
            name: params?.name ?? faker.company.name(),
            onTimeDeliveryRating: params?.onTimeDeliveryRating ?? faker.number.float({ min: 0, max: 5 }),
            salesPerformanceRating: params?.salesPerformanceRating ?? faker.number.float({ min: 0, max: 5 }),
            totalProducts: params?.totalProducts ?? faker.number.int({ min: 1, max: 100 }),
            totalSales: params?.totalSales ?? faker.number.int({ min: 1, max: 10000 }),
        };
    }
}
