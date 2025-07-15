import { Star } from 'lucide-react';

interface RatingProps {
    rating: number;
}

/**
 * RatingStars component displays a rating with stars and the number of reviews.
 * @param rating - The average rating of the product.
 */
export default function RatingStars({ rating }: RatingProps) {
    const fullStars = Math.floor(rating);
    const totalStars = 5;

    return (
        <div className="flex space-x-0.5">
            {[...Array(totalStars)].map((_, index) => (
                <Star key={index} size={16} fill={index < fullStars ? '#3483fa' : 'none'} stroke="#3483fa" />
            ))}
        </div>
    );
}
