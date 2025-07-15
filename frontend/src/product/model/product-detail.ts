/**
 * The ProductDetail type represents the detailed information of a product.
 */
export type ProductDetail = {
    product: {
        id: string;
        title: string;
        color: string;
        description: string;
        price: number;
        currency: string;
        stock: number;
        soldQuantity: number;
        imagesIds: string[];
        mainImageId: string;
        categories: string[];
        rating: number;
        reviewsCount: number;
        isBestSeller: boolean;
        freeReturnDays: number;
        factoryWarrantyMonths: number;
        attributes: {
            name: string;
            value: string;
            category: string;
            highlighted: boolean;
        }[];
        sellerId: string;
        paymentMethods: string[];
        discountPercentage: number;
    };
    seller?: {
        id: string;
        name: string;
        totalProducts: number;
        totalSales: number;
        customerServiceRating: number;
        onTimeDeliveryRating: number;
        salesPerformanceRating: number;
        imageId: string;
        isOfficial: boolean;
        badges: string[];
    };
    reviews: {
        id: string;
        productId: string;
        userId: string;
        rating: number;
        createdAt: string;
        comment: string;
    }[];
    paymentMethods: {
        id: string;
        type: string;
        brand: string;
    }[];
};
