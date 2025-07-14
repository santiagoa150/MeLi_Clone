import type { JSX } from 'react';
import { useParams } from 'react-router-dom';

/**
 * ProductDetailPage component that displays the details of a product based on its ID.
 */
export function ProductDetailPage(): JSX.Element {
    const { id } = useParams();

    return (
        <>
            <p>Product Number: {id}</p>
        </>
    );
}
