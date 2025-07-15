import type { JSX } from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../../hooks/use-product-detail.ts';
import { HeaderComponent } from '../../../../shared/ui/components/header/header.component.tsx';
import { LoaderComponent } from '../../../../shared/ui/components/loader/loader.component.tsx';
import { ProductDetailMobileLayout } from './product-detail-mobile.layout.tsx';

/**
 * ProductDetailPage component that displays the details of a product based on its ID.
 */
export function ProductDetailPage(): JSX.Element {
    const { id } = useParams();
    const { product, loading } = useProductDetail(id);

    return (
        <>
            <main className="grow flex flex-col bg-app-background box-border">
                <HeaderComponent />
                {loading && !product ? (
                    <>
                        <div className="grow flex justify-center items-center">
                            <LoaderComponent />
                        </div>
                    </>
                ) : (
                    <>
                        <ProductDetailMobileLayout detail={product!} />
                    </>
                )}
            </main>
        </>
    );
}
