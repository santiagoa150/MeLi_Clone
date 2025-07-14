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
            title: 'Samsung Galaxy A55 5G Dual SIM 256 GB azul oscuro 8 GB RAM',
            description:
                'SAMSUNG GALAXY A55 5G 256GB ( SIM FISICA + ESIM )\n' +
                '\n' +
                'Capacidad y eficiencia\n' +
                'Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.\n' +
                '\n' +
                'Capacidad de almacenamiento ilimitada\n' +
                'Olvidate de borrar. Con su memoria interna de 256 GB podrás descargar todos los archivos y aplicaciones que necesites, guardar fotos y almacenar tus películas, series y videos favoritos para reproducirlos cuando quieras.\n' +
                '\n' +
                'Garantía de fábrica: 12 meses',
            price: 1549894,
            currency: 'COP',
            stock: 50,
            soldQuantity: 100,
            imagesIds: [
                '1bd0214f-538c-4939-93e2-e835599e1431',
                '38d94da9-30a6-4430-933a-5cbfcf9a13ec',
                '34584b2c-506f-4949-a9e8-7e2d0ee2faf2',
            ],
            mainImageId: '1bd0214f-538c-4939-93e2-e835599e1431',
            categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
            rating: 4.7,
            reviewsCount: 61,
            isBestSeller: true,
            attributes: [
                { name: 'Marca', value: 'Samsung' },
                { name: 'Línea', value: 'Galaxy A' },
                { name: 'Modelo', value: 'A55' },
                { name: 'Color', value: 'Amarillo' },
                { name: 'Nombre del sistema operativo', value: 'Android' },
                { name: 'Red móvil', value: '5G' },
                { name: 'Es Dual SIM', value: 'No' },
                { name: 'Cantidad de ranuras para tarjeta SIM', value: '1' },
                { name: 'Cantidad de eSIMs', value: '1' },
                { name: 'Memoria interna', value: '256 GB' },
                { name: 'Memoria RAM', value: '8 GB' },
            ],
            sellerId: '80c98c32-b3ab-4803-86e0-3a74cac682e7',
            paymentMethods: [
                'b040cd3e-729d-4510-94e7-e29f3d6e40f7',
                'f42e08f6-4b1b-4bd4-83d4-e9e2f188db02',
                '3af1e832-5528-4329-8da6-3e07d5520e86',
                '1c344051-97e1-4459-a672-49a46e1e97b2',
                'a688a88c-6e78-48a5-97da-8edf1b170da2',
                '19475cb5-b122-40cb-a78b-0a3a1a258c77',
                '3fbf4f5f-8369-4bfa-bc82-16ebcfa20f82',
                '7894a479-c381-4e3d-9b7f-895378ff8ea6',
            ],
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
