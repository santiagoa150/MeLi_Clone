import { type JSX, useLayoutEffect, useMemo, useState } from 'react';
import type { ProductDetail } from '../../../model/product-detail.ts';
import { parseNumberToCurrency } from '../../../../shared/utils/parse-number-to-currency.ts';
import SliderComponent from '../../../../shared/ui/components/slider/slider.component.tsx';
import RatingStars from '../../components/rating-starts/rating-stars.component.tsx';
import { BuyProductInfoComponent } from '../../components/buy-product-info/buy-product-info.component.tsx';
import { HighlightedProductAttributesComponent } from '../../components/highlighted-product-attributes/highlighted-product-attributes.component.tsx';
import { IoIosArrowForward } from 'react-icons/io';
import { ProductAttributesMobileComponent } from '../../components/product-attributes/product-attributes-mobile.component.tsx';
import { IoClose } from 'react-icons/io5';
import { ProductSellerComponent } from '../../components/product-seller/product-seller.component.tsx';
import { ProductPaymentMethodsComponent } from '../../components/product-payment-methods/product-payment-methods.component.tsx';
import { ProductReviewsComponent } from '../../components/product-reviews/product-reviews.component.tsx';

/**
 * ProductDetailMobileLayout component that displays the mobile layout for product details.
 */
export function ProductDetailMobileLayout({ detail }: { detail: ProductDetail }): JSX.Element {
    const [showAttributesModal, setShowAttributesModal] = useState(false);
    const { product } = detail;

    useLayoutEffect(() => {
        if (showAttributesModal) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showAttributesModal]);

    const attributesGrouped = useMemo(
        () =>
            Object.entries(
                detail.product.attributes.reduce(
                    (acc, attr) => {
                        if (!acc[attr.category]) acc[attr.category] = [];
                        acc[attr.category].push({ value: attr.value, title: attr.name });
                        return acc;
                    },
                    {} as Record<string, { value: string; title: string }[]>,
                ),
            ).map(([category, values]) => ({ category, values })),
        [detail],
    );

    return (
        <>
            <div className="bg-white flex flex-col w-full p-3 gap-y-8 box-border">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-2">
                        <div className="flex justify-between text-xs">
                            <p className="text-app-text-tertiary">Nuevo | +{product.soldQuantity} vendidos</p>
                            <div className="flex items-center text-gray-600 space-x-1">
                                <span>{product.rating.toFixed(1)}</span>
                                <RatingStars rating={product.rating} />
                                <span className="text-gray-500">({product.reviewsCount})</span>
                            </div>
                        </div>
                        <h1>{product.title}</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <SliderComponent>
                            {product.imagesIds.map((image, index) => (
                                <img
                                    key={index}
                                    src={`${import.meta.env.VITE_API_URL}/static/products/${image}`}
                                    alt={String(index + 1)}
                                    className="h-[350px] w-auto object-cover"
                                />
                            ))}
                        </SliderComponent>
                    </div>
                    <div>
                        <p>
                            Color: <span className="font-semibold">{product.color}</span>
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-2xl">{parseNumberToCurrency(product.price, product.currency)}</h2>
                        <p className="text-app-button-primary text-xs">Ver medios de pago</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <BuyProductInfoComponent detail={detail} />
                </div>
                <hr className="-mx-3 border-gray-300" />
                <div className="text-xl flex flex-col gap-y-4">
                    <HighlightedProductAttributesComponent detail={detail} listTextClassName="text-base" />
                </div>
                <hr className="-mx-3 border-gray-300" />
                <div className="flex flex-col gap-y-4 cursor-pointer" onClick={() => setShowAttributesModal(true)}>
                    <h1 className="text-xl">Características del producto</h1>
                    <div className="text-app-button-primary text-sm h-12 border-[1px] border-gray-300 rounded-sm flex items-center justify-between box-border px-3">
                        <p>Ver todas las características</p>
                        <IoIosArrowForward color="text-app-button-primary" size="20" />
                    </div>
                </div>
                <hr className="-mx-3 border-gray-300" />
                <div>
                    <ProductSellerComponent detail={detail} />
                </div>
                <hr className="-mx-3 border-gray-300" />
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-xl">Descripción</h1>
                    <p
                        className="text-app-text-tertiary text-xl"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                </div>
                <hr className="-mx-3 border-gray-300" />
                <div className="flex flex-col gap-y-4">
                    <ProductPaymentMethodsComponent detail={detail} />
                </div>
                <hr className="-mx-3 border-gray-300" />
                <div>
                    <h1 className="text-xl">Opiniones del producto</h1>
                    <ProductReviewsComponent detail={detail} />
                </div>
            </div>

            {showAttributesModal && (
                <div className="fixed w-[100vw] h-[100vh] bg-white inset-0 flex flex-col p-3 box-border gap-y-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold">Características del producto</h1>
                        <span className="text-app-button-primary cursor-pointer">
                            <IoClose
                                color="text-app-button-primary"
                                size="25"
                                onClick={() => setShowAttributesModal(false)}
                            />
                        </span>
                    </div>
                    <div className="w-full">
                        <ProductAttributesMobileComponent attributes={attributesGrouped} />
                    </div>
                </div>
            )}
        </>
    );
}
