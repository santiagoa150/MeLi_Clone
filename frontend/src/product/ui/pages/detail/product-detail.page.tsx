import type { JSX } from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../../hooks/use-product-detail.ts';
import { HeaderComponent } from '../../../../shared/ui/components/header.component.tsx';

/**
 * ProductDetailPage component that displays the details of a product based on its ID.
 */
export function ProductDetailPage(): JSX.Element {
    const { id } = useParams();
    const { product, loading, error } = useProductDetail(id);

    return (
        <>
            <main className="grow flex w-full flex-col">
                <HeaderComponent />
                {loading ? (
                    <>
                        <p>Cargando el producto: {id}</p>
                    </>
                ) : (
                    <>
                        {product ? (
                            <>
                                <p>Producto encontrado</p>
                            </>
                        ) : (
                            <>Error: {error}</>
                        )}
                    </>
                )}
            </main>
        </>
    );
}
