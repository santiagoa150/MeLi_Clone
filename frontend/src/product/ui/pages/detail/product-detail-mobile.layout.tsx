import {type JSX, useState} from 'react';
import type { ProductDetail } from '../../../model/product-detail.ts';
import { parseNumberToCurrency } from '../../../../shared/utils/parse-number-to-currency.ts';
import SliderComponent from '../../../../shared/ui/components/slider/slider.component.tsx';
import RatingStars from '../../components/rating-starts/rating-stars.component.tsx';
import { BuyProductInfoComponent } from '../../components/buy-product-info/buy-product-info.component.tsx';
import { HighlightedProductAttributesComponent } from '../../components/highlighted-product-attributes/highlighted-product-attributes.component.tsx';
import { IoIosArrowForward } from 'react-icons/io';

/**
 * ProductDetailMobileLayout component that displays the mobile layout for product details.
 */
export function ProductDetailMobileLayout({ detail }: { detail: ProductDetail }): JSX.Element {

    const [showAttributesModal, setShowAttributesModal] = useState(false);

    const { product } = detail;
    return (
        <>
            <div className="bg-white flex flex-col w-full p-3 gap-y-8 box-border">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-2">
                        <div className="flex justify-between text-xs">
                            <p className="text-app-text-tertiary">Nuevo | +{product.soldQuantity} vendidos</p>
                            <RatingStars rating={product.rating} reviews={product.reviewsCount} />
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
                <div className="flex flex-col gap-y-2 cursor-pointer" onClick={() => }>
                    <h1 className="text-xl">Lo que tienes que saber de este producto</h1>
                    <div className="text-app-button-primary text-sm h-12 border-[1px] border-gray-300 rounded-sm flex items-center justify-between box-border px-3">
                        <p>Ver todas las características</p>
                        <IoIosArrowForward color="text-app-button-primary" size="20" />
                    </div>
                </div>
            </div>
        </>
    );
}
