import { ProductRepository } from '../../../domain/repository/product.repository';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { Product } from '../../../domain/model/product';
import { ProductNormalized } from '@shared/domain/model/product/product-normalized';

/**
 * InMemoryProductRepository is an in-memory implementation of the ProductRepository interface.
 */
export class InMemoryProductRepository implements ProductRepository {
    private readonly _products: ProductNormalized[] = [
        {
            id: 'c07dce9d-cd5d-4c67-8368-480546fcdbee',
            title: 'Cesto Para Ropa Sucia Color Gris',
            description:
                'CESTO PARA ROPA SUCIA KE-0015\n' +
                '\n' +
                'Este cesto para ropa sucia es práctico y te permite tener separada y organizada la ropa a lavar. Está hecho 100% de poliéster resistente y lavable que brinda resistencia para almacenar hasta 15 kg de ropa. Ocupa muy poco espacio, es súper discreto, moderno y compacto. Puedes colocarlo en el baño, la habitación o cuarto de lavado.\n' +
                '\n' +
                'Colores disponibles: Gris oscuro, negro, rojo, gris claro y menta.\n' +
                '\n' +
                'Cuenta con 2 asas súper resistentes para poderlo transportar.\n' +
                '\n' +
                'Material: Poliéster.\n' +
                '\n' +
                '- Lavable.\n' +
                '- Impermeable.',
            price: 52470,
            currency: 'COP',
            stock: 1,
            soldQuantity: 100,
            imagesIds: [
                '1bd0214f-538c-4939-93e2-e835599e1431',
                '38d94da9-30a6-4430-933a-5cbfcf9a13ec',
                '34584b2c-506f-4949-a9e8-7e2d0ee2faf2',
            ],
            mainImageId: '1bd0214f-538c-4939-93e2-e835599e1431',
            categories: ['Hogar y Muebles', 'Baños', 'Accesorios para Baños', 'Cestos para Ropa', 'Cesta Ropa Sucia'],
            rating: 4.7,
            reviewsCount: 61,
            isBestSeller: true,
            attributes: [
                { name: 'Nombre del diseño', value: 'Lisa' },
                { name: 'Formato de venta', value: 'Unidad' },
                { name: 'Medidas', value: '64cm x 36cm x 36cm' },
                { name: 'Material', value: 'Poliéster' },
                { name: 'Es plegable', value: 'Si' },
                { name: 'Incluye tapa', value: 'No' },
                { name: 'Con ruedas', value: 'No' },
                { name: 'Incluye agarre', value: 'Si' },
            ],
            sellerId: '80c98c32-b3ab-4803-86e0-3a74cac682e7',
            paymentMethods: ['b040cd3e-729d-4510-94e7-e29f3d6e40f7', 'f42e08f6-4b1b-4bd4-83d4-e9e2f188db02'],
            discountPercentage: 10,
        },
    ];

    /**
     * Get a product by its ID.
     * @param id - The ID of the product to retrieve, represented as an IdValueObject.
     * @return A promise that resolves to the Product object if found, or undefined if not found.
     */
    getProductById(id: IdValueObject): Promise<Product | undefined> {
        const productData = this._products.find((p) => p.id === id.toString());
        return Promise.resolve(
            productData
                ? Product.create(
                      productData.id,
                      productData.title,
                      productData.description,
                      productData.price,
                      productData.currency,
                      productData.stock,
                      productData.soldQuantity,
                      productData.imagesIds,
                      productData.mainImageId,
                      productData.categories,
                      productData.rating,
                      productData.reviewsCount,
                      productData.isBestSeller,
                      productData.attributes,
                      productData.sellerId,
                      productData.paymentMethods,
                      productData.discountPercentage,
                  )
                : undefined,
        );
    }
}
