import { ReviewRepository } from '../../../domain/repository/review.repository';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { ReviewNormalized } from '@shared/domain/model/review/review-normalized';
import { Review } from '../../../domain/model/review';

/**
 * InMemoryReviewRepository is an in-memory implementation of the ReviewRepository interface.
 */
export class InMemoryReviewRepository implements ReviewRepository {
    private readonly _reviews: ReviewNormalized[] = [
        {
            id: '2e018a98-4a50-4822-addd-1c086f76807c',
            rating: 4,
            comment: 'Great product, very satisfied!',
            productId: 'c07dce9d-cd5d-4c67-8368-480546fcdbee',
            userId: '80c98c32-b3ab-4803-86e0-3a74cac682e7',
            createdAt: '2023-10-01T12:00:00Z',
        },
        {
            id: '188008a4-5740-4a98-816c-5a9b7f13ba02',
            rating: 5,
            comment: 'Excelente calidad, lo recomiendo.',
            productId: 'c07dce9d-cd5d-4c67-8368-480546fcdbee',
            userId: '0bc945f6-659c-4857-8ea7-e9951b0db4da',
            createdAt: '2023-10-02T09:30:00Z',
        },
        {
            id: '5cca8c2a-9fe3-4ee4-a79c-40d61c7409ff',
            rating: 3,
            comment: 'Cumple con lo esperado.',
            productId: 'c07dce9d-cd5d-4c67-8368-480546fcdbee',
            userId: '073ebb47-ff14-45f7-bff0-680fdba316a0',
            createdAt: '2023-10-03T15:45:00Z',
        },
        {
            id: 'a7e5d6e3-1741-4f9a-b79f-d374375b9d8e',
            rating: 2,
            comment: 'No era lo que esperaba.',
            productId: 'c07dce9d-cd5d-4c67-8368-480546fcdbee',
            userId: '34334304-95fb-4b2f-970d-05cfd2adacc5',
            createdAt: '2023-10-04T11:20:00Z',
        },
        {
            id: 'c5b40f80-b497-4beb-9cc2-9b496845310b',
            rating: 4,
            comment: 'Buen servicio y entrega rápida.',
            productId: 'c07dce9d-cd5d-4c67-8368-480546fcdbee',
            userId: 'a34b08c8-51de-4b3a-a0d5-4a0cb1a43792',
            createdAt: '2023-10-05T18:10:00Z',
        },
        {
            id: '0c89adea-e60d-44a2-8667-8db92ab32a6f',
            rating: 5,
            comment: 'Superó mis expectativas.',
            productId: 'd7d124d1-2051-4f2f-bc00-f8474f8da713',
            userId: '80c98c32-b3ab-4803-86e0-3a74cac682e7',
            createdAt: '2023-10-06T08:00:00Z',
        },
    ];

    /**
     * Retrieves all reviews associated with a specific product.
     * This method filters the reviews by the provided product ID and sorts them by creation date.
     * @param productId - The unique identifier of the product for which reviews are to be retrieved.
     * @return A promise that resolves to an array of ReviewNormalized objects associated with the specified product.
     */
    getReviewsByProductId(productId: IdValueObject): Promise<Review[]> {
        const reviews = this._reviews
            .filter((review) => review.productId === productId.toString())
            .map((r) => Review.create(r.id, r.productId, r.userId, r.rating, new Date(r.createdAt), r.comment))
            .sort((a, b) => a.createdAt.toDate().getTime() - b.createdAt.toDate().getTime());
        return Promise.resolve(reviews);
    }
}
