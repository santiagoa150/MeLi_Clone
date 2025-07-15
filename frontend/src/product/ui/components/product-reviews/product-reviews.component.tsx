import type { ProductDetail } from '../../../model/product-detail.ts';
import RatingStars from '../rating-starts/rating-stars.component.tsx';
import { useCallback } from 'react';

/**
 * ProductReviewsComponent displays the reviews and ratings for a product.
 * @param detail - The detailed information of the product including reviews.
 */
export function ProductReviewsComponent({ detail }: { detail: ProductDetail }) {
    /**
     * Calculates the summary of reviews for the product.
     */
    const countReviewsByStars = useCallback((): number[] => {
        const counts = [0, 0, 0, 0, 0];

        for (const review of detail.reviews) {
            const rating = Math.floor(review.rating);
            if (rating >= 1 && rating <= 5) {
                counts[rating - 1]++;
            }
        }

        return counts;
    }, [detail.reviews]);

    const distribution = countReviewsByStars();

    return (
        <div className="p-4 w-full font-sans">
            <div className="grid grid-cols-[20%_75%] gap-8">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="text-5xl text-blue-600 font-bold">{detail.product.rating}</div>
                    <div>
                        <RatingStars rating={detail.product.rating} />
                        <div className="text-sm text-gray-600">{detail.product.reviewsCount} calificaciones</div>
                    </div>
                </div>

                <div className="mt-4 space-y-1 w-full">
                    {distribution.map((stars, i) => {
                        const percent = (distribution[i] / detail.product.reviewsCount) * 100;
                        return (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                <div className="w-full bg-gray-200 h-2 rounded relative overflow-hidden">
                                    <div
                                        className="bg-blue-500 h-2 absolute top-0 left-0"
                                        style={{ width: `${percent}%` }}
                                    />
                                </div>
                                <span className="w-8 text-right tabular-nums">{stars}</span>
                                <span className="text-sm text-gray-500">★</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <h4 className="mt-6 font-medium text-base">Opiniones</h4>
            <div className="text-sm text-gray-500">{detail.reviews.length} comentarios</div>
            <div className="mt-4 space-y-4">
                {detail.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-300 pb-4">
                        <div className="flex justify-between text-sm">
                            <RatingStars rating={review.rating} />
                            <span className="text-gray-400">
                                {(() => {
                                    const date = new Date(review.createdAt);
                                    const day = date.getDate().toString().padStart(2, '0');
                                    const month = date.toLocaleString('es-CO', { month: 'short' });
                                    const year = date.getFullYear();

                                    return `${day} ${month} ${year}`;
                                })()}
                            </span>
                        </div>
                        <p className="mt-1 text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
