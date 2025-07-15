import { Star } from 'lucide-react';

interface RatingProps {
    rating: number;
    reviews: number;
}

/**
 * RatingStars component displays a rating with stars and the number of reviews.
 * @param rating
 * @param reviews
 * @constructor
 */
export default function RatingStars({ rating, reviews }: RatingProps) {
    const fullStars = Math.floor(rating);
    const totalStars = 5;

    return (
        <div className="flex items-center text-gray-600 space-x-1">
            <span>{rating.toFixed(1)}</span>
            <div className="flex space-x-0.5">
                {[...Array(totalStars)].map((_, index) => (
                    <Star key={index} size={16} fill={index < fullStars ? '#3483fa' : 'none'} stroke="#3483fa" />
                ))}
            </div>
            <span className="text-gray-500">({reviews})</span>
        </div>
    );
}
