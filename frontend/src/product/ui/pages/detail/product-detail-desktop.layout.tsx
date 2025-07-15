import type { ProductDetail } from '../../../model/product-detail.ts';
import { type JSX, useMemo } from 'react';
import { ProductAttributesDesktopComponent } from '../../components/product-attributes/product-attributes-desktop.component.tsx';
import { ProductReviewsComponent } from '../../components/product-reviews/product-reviews.component.tsx';
import { BuyProductInfoComponent } from '../../components/buy-product-info/buy-product-info.component.tsx';
import { ProductSellerComponent } from '../../components/product-seller/product-seller.component.tsx';
import { ProductPaymentMethodsComponent } from '../../components/product-payment-methods/product-payment-methods.component.tsx';
import RatingStars from '../../components/rating-starts/rating-stars.component.tsx';
import SliderComponent from '../../../../shared/ui/components/slider/slider.component.tsx';
import { parseNumberToCurrency } from '../../../../shared/utils/parse-number-to-currency.ts';
import { HighlightedProductAttributesComponent } from '../../components/highlighted-product-attributes/highlighted-product-attributes.component.tsx';

export function ProductDetailDesktopLayout({ detail }: { detail: ProductDetail }): JSX.Element {
    const { product } = detail;

    /**
     * Groups product attributes by category.
     */
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
        <div className="w-full flex justify-center">
            <div className="bg-white w-[1200px] mt-10 rounded-sm shadow-md flex">
                <div className="w-[65%] flex flex-col p-8 gap-y-8 box-border">
                    <div className="grid grid-cols-[50%_50%]">
                        <div className="flex items-center justify-center">
                            <SliderComponent>
                                {product.imagesIds.map((image, index) => (
                                    <img
                                        key={index}
                                        src={`${import.meta.env.VITE_API_URL}/static/products/${image}`}
                                        alt={String(index + 1)}
                                        className="h-[350px] w-auto object-cover"
                                        draggable={false}
                                    />
                                ))}
                            </SliderComponent>
                        </div>
                        <div className="flex flex-col gap-y-8">
                            <div className="flex justify-between text-xs">
                                <p className="text-app-text-tertiary">Nuevo | +{product.soldQuantity} vendidos</p>
                                <div className="flex items-center text-gray-600 space-x-1">
                                    <span>{product.rating.toFixed(1)}</span>
                                    <RatingStars rating={product.rating} />
                                    <span className="text-gray-500">({product.reviewsCount})</span>
                                </div>
                            </div>
                            <h1>{product.title}</h1>
                            <div>
                                <h2 className="text-2xl">{parseNumberToCurrency(product.price, product.currency)}</h2>
                                <p className="text-app-button-primary text-xs">Ver medios de pago</p>
                            </div>
                            <div>
                                <p>
                                    Color: <span className="font-semibold">{product.color}</span>
                                </p>
                            </div>
                            <div className="text-lg flex flex-col gap-y-4">
                                <HighlightedProductAttributesComponent detail={detail} listTextClassName="text-sm" />
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="w-full flex flex-col gap-y-4 ">
                        <h1 className="text-xl">Características del producto</h1>
                        <ProductAttributesDesktopComponent attributes={attributesGrouped} />
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-xl">Descripción</h1>
                        <p
                            className="text-app-text-tertiary text-xl"
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        />
                    </div>
                    <div>
                        <h1 className="text-xl">Opiniones del producto</h1>
                        <ProductReviewsComponent detail={detail} />
                    </div>
                </div>
                <div className="flex flex-col w-[35%] box-border p-8 gap-y-6">
                    <div className="flex flex-col gap-y-6 border border-gray-200 rounded-md box-border p-4 shadow-sm">
                        <BuyProductInfoComponent detail={detail} />
                    </div>
                    <div className="flex flex-col border border-gray-200 rounded-md box-border p-4 shadow-sm">
                        <ProductSellerComponent detail={detail} />
                    </div>
                    <div className="flex flex-col gap-y-4 border border-gray-200 rounded-md box-border p-4 shadow-sm">
                        <ProductPaymentMethodsComponent detail={detail} />
                    </div>
                </div>
            </div>
        </div>
    );
}
