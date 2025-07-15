import { InMemorySellerRepository } from '../../../../../../../apps/sellers/src/infrastructure/repository/in-memory/in-memory-seller.repository';
import { IdValueObjectMother } from '../../../../../../libs/src/domain/value-object/id.value-object.mother';
import { Seller } from '../../../../../../../apps/sellers/src/domain/model/seller';

describe('InMemorySellerRepository', () => {
    let repository: InMemorySellerRepository;

    beforeEach(() => {
        repository = new InMemorySellerRepository();
    });

    it('should return Seller if the ID its valid', async () => {
        const existingId = IdValueObjectMother.create('80c98c32-b3ab-4803-86e0-3a74cac682e7');

        const result = await repository.getSellerById(existingId);

        expect(result).toBeInstanceOf(Seller);
        expect(result?.name.toString()).toBe('Samsung');
        expect(result?.isOfficial.toBoolean()).toBe(true);
    });

    it('should return undefined if the Id was not found', async () => {
        const nonExistentId = IdValueObjectMother.create('non-existent-id');

        const result = await repository.getSellerById(nonExistentId);

        expect(result).toBeUndefined();
    });
});
