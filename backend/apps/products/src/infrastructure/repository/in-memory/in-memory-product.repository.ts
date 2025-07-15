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
            color: 'Amarillo',
            description:
                '<p>SAMSUNG GALAXY A55 5G 256GB (SIM FÍSICA + ESIM)</p><br/>' +
                '<p>Capacidad y eficiencia</p><br />' +
                'Con su potente procesador y memoria RAM de 8 GB, tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.<br />' +
                '<br />' +
                '<p>Capacidad de almacenamiento ilimitada</p><br />' +
                'Olvídate de borrar. Con su memoria interna de 256 GB podrás descargar todos los archivos y aplicaciones que necesites, guardar fotos y almacenar tus películas, series y videos favoritos para reproducirlos cuando quieras.<br />' +
                '<br />' +
                '<p>Garantía de fábrica: 12 meses</p>',
            price: 1549894,
            currency: 'COP',
            stock: 50,
            soldQuantity: 100,
            imagesIds: [
                '1bd0214f-538c-4939-93e2-e835599e1431.webp',
                '38d94da9-30a6-4430-933a-5cbfcf9a13ec.webp',
                '34584b2c-506f-4949-a9e8-7e2d0ee2faf2.webp',
            ],
            mainImageId: '1bd0214f-538c-4939-93e2-e835599e1431.webp',
            categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
            rating: 4.7,
            reviewsCount: 61,
            isBestSeller: true,
            freeReturnDays: 30,
            factoryWarrantyMonths: 12,
            attributes: [
                { name: 'Marca', value: 'Samsung', category: 'Características generales' },
                { name: 'Línea', value: 'Galaxy A', category: 'Características generales' },
                { name: 'Modelo', value: 'A55', category: 'Características generales' },
                { name: 'Color', value: 'Amarillo', category: 'Características generales' },
                { name: 'Nombre del sistema operativo', value: 'Android', category: 'Sistema operativo' },
                { name: 'Red móvil', value: '5G', category: 'Conectividad' },
                { name: 'Es Dual SIM', value: 'No', category: 'Tarjeta SIM' },
                { name: 'Cantidad de ranuras para tarjeta SIM', value: '1', category: 'Tarjeta SIM' },
                { name: 'Cantidad de eSIMs', value: '1', category: 'Tarjeta SIM' },
                { name: 'Memoria interna', value: '256 GB', highlighted: true, category: 'Memoria' },
                { name: 'Memoria RAM', value: '8 GB', highlighted: true, category: 'Memoria' },
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
        {
            id: '662aed8f-5493-41c5-bcc5-9862d99776e0',
            title: 'Cesto Canasta De Ropa Sucia Organizador Lavanderia Plegable',
            color: 'Negro',
            description:
                '<p>\n' +
                '  Material ligero y resistente de alta calidad aplicado a la canasta de lavandería. Mantiene la ropa seca y facilita la limpieza.\n' +
                '  <br />\n' +
                '  <em>Límpielo con una esponja o un paño húmedo.</em>\n' +
                '</p>\n' +
                '<p>\n' +
                '  Las manijas están reforzadas con costuras ajustadas y duraderas para evitar desgarros. La longitud de las asas permite transportarlo fácilmente con una o dos manos.\n' +
                '<br />\n' +
                '</p>\n' +
                '<p>\n' +
                '  Este organizador de almacenamiento puede guardar ropa, almohadas, etc. Adecuado para <em>residencias universitarias</em> y la <em>vida familiar</em>.\n' +
                '</p>\n' +
                '<p>\n' +
                '  Se pliega fácilmente para almacenar en un cajón cuando no se usa. Apto para viajes de negocios o de placer, puede llevarse en el equipaje.\n' +
                '</p>\n' +
                '<p>\n' +
                '  Diseño plegable que ahorra espacio cuando no está en uso. Ideal para dormitorios universitarios, campistas, apartamentos y lavaderos.\n' +
                '</p>\n' +
                '<p>\n' +
                '  Dimensiones (Largo x Ancho x Altura): 33 cm x 30 cm x 52 cm<br>\n' +
                '</p>',
            price: 20,
            currency: 'USD',
            stock: 25,
            soldQuantity: 5,
            imagesIds: [
                '074b0935-4e42-44e0-9316-96ce1cea1e3e.webp',
                'bddf8d05-93da-42ae-944b-343c4505b556.webp',
                '2cc365f0-5b71-465b-94e5-a51d7d356cc4.webp',
                '34a0045a-4bec-4c08-908f-3fa909f9c68a.webp',
                'eeb344da-f91c-4265-9b68-e004e20ed55c.webp',
            ],
            mainImageId: '074b0935-4e42-44e0-9316-96ce1cea1e3e.webp',
            categories: ['Hogar y Muebles', 'Baños', 'Accesorios para Baños', 'Cestos para Ropa', 'Organizador Ropa'],
            rating: 3.8,
            reviewsCount: 4,
            isBestSeller: true,
            freeReturnDays: 30,
            factoryWarrantyMonths: 2,
            attributes: [
                { name: 'Marca', value: 'Kwalux', category: 'Características principales' },
                { name: 'Modelo', value: 'Negro', category: 'Características principales' },
                {
                    name: 'Formato de venta',
                    value: 'Unidad',
                    category: 'Características principales',
                    highlighted: true,
                },
                { name: 'Forma', value: 'Plegable', category: 'Otros' },
                { name: 'Material', value: 'Tela', category: 'Otros' },
                { name: 'Es plegable', value: 'Sí', category: 'Otros' },
                {
                    name: 'Largo x Ancho x Altura',
                    value: '33 cm x 30 cm x 52 cm',
                    category: 'Otros',
                    highlighted: true,
                },
                { name: 'Incluye tapa', value: 'No', category: 'Otros' },
                { name: 'Con ruedas', value: 'No', category: 'Otros' },
                { name: 'Incluye agarre', value: 'Sí', category: 'Otros' },
            ],
            sellerId: 'ff4d4481-4e1e-4158-902f-8cdffd81347b',
            paymentMethods: [
                'b040cd3e-729d-4510-94e7-e29f3d6e40f7',
                'f42e08f6-4b1b-4bd4-83d4-e9e2f188db02',
                '3af1e832-5528-4329-8da6-3e07d5520e86',
                'a688a88c-6e78-48a5-97da-8edf1b170da2',
                '19475cb5-b122-40cb-a78b-0a3a1a258c77',
                '605523fc-074d-41d4-9d64-755530c25841',
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
                      productData.color,
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
                      productData.freeReturnDays,
                      productData.factoryWarrantyMonths,
                      productData.attributes,
                      productData.sellerId,
                      productData.paymentMethods,
                      productData.discountPercentage,
                  )
                : undefined,
        );
    }
}
