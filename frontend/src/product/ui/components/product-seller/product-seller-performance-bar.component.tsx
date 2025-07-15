interface PerformanceBarProps {
    customerServiceRating: number;
    onTimeDeliveryRating: number;
    salesPerformanceRating: number;
}

/**
 * ProductSellerPerformanceBarComponent displays a performance bar for a product seller.
 * @param customerServiceRating - The customer service rating of the seller.
 * @param onTimeDeliveryRating - The on-time delivery rating of the seller.
 * @param salesPerformanceRating - The sales performance rating of the seller.
 */
export function ProductSellerPerformanceBarComponent({
    customerServiceRating,
    onTimeDeliveryRating,
    salesPerformanceRating,
}: PerformanceBarProps) {
    const average = (customerServiceRating + onTimeDeliveryRating + salesPerformanceRating) / 3;

    const levels = ['red', 'orange', 'yellow', 'lime', 'green'];
    const strongColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500'];
    const softColors = ['bg-red-200', 'bg-orange-200', 'bg-yellow-200', 'bg-lime-200', 'bg-green-200'];

    const getColorClass = (index: number): string => {
        const levelMin = index;
        const levelMax = index + 1;
        const isCurrentLevel = average >= levelMin && (index === 4 ? average <= levelMax : average < levelMax);
        const isPastLevel = average > levelMax;

        if (isCurrentLevel) return strongColors[index];
        if (isPastLevel) return softColors[index];
        return 'bg-gray-100';
    };

    return (
        <div className="flex gap-[2px] h-3 w-full">
            {levels.map((_, index) => (
                <div key={index} className={`${getColorClass(index)} flex-1 rounded-sm transition-all`} />
            ))}
        </div>
    );
}
