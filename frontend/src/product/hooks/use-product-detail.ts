import { useEffect, useState } from 'react';
import type { ProductDetail } from '../model/product-detail.ts';
import { MakeGetRequest } from '../../shared/api/make-get-request.ts';
import { ApiRoutesConstants } from '../../shared/api/api-routes.constants.ts';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Custom hook to fetch product details by product ID.
 * @param productId - The ID of the product to fetch details for.
 * @return An object containing the product details, loading state, and error message.
 */
export function useProductDetail(productId: string | undefined) {
    const location = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductDetail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    /**
     * Fetches product details from the API when the component mounts or when the productId changes.
     */
    useEffect(() => {
        setLoading(true);
        setError(null);

        if (!productId) {
            setLoading(false);
            setError('Product ID is required');
            return;
        }

        MakeGetRequest(ApiRoutesConstants.PRODUCT_DETAIL.replace('{id}', productId), setProduct, setError, setLoading);
    }, [productId]);

    useEffect(() => {
        if (error) {
            navigate(`${location.pathname}/not-found`);
        }
    }, [location, navigate, error]);

    return { product, loading, error };
}
