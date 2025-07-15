import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { InMemoryProductRepository } from '../../../../../../../apps/products/src/infrastructure/repository/in-memory/in-memory-product.repository';
import { IdValueObjectMother } from '../../../../../../libs/src/domain/value-object/id.value-object.mother';
import { Product } from '../../../../../../../apps/products/src/domain/model/product';
import { ProductMother } from '../../../domain/model/product.mother';

describe('InMemoryProductRepository', () => {
    let repository: InMemoryProductRepository;

    beforeEach(() => {
        repository = new InMemoryProductRepository();
    });

    it('should return a product when a valid ID is provided', async () => {
        const validId = IdValueObjectMother.create('c07dce9d-cd5d-4c67-8368-480546fcdbee');

        const expectedProduct: Product = ProductMother.createFromNormalized(
            validId.toString(),
            'Samsung Galaxy A55 5G Dual SIM 256 GB azul oscuro 8 GB RAM',
        );
        const product = await repository.getProductById(validId);

        expect(product).toBeInstanceOf(Product);
        expect(product?.id.toString()).toBe(expectedProduct?.id.toString());
        expect(product?.title.toString()).toBe(expectedProduct?.title.toString());
    });

    it('should return undefined when the product does not exist', async () => {
        const invalidId = new IdValueObject('00000000-0000-0000-0000-000000000000');

        const product = await repository.getProductById(invalidId);

        expect(product).toBeUndefined();
    });
});
