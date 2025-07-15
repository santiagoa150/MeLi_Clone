import type { JSX } from 'react';
import type { ProductDetail } from '../../../model/product-detail.ts';
import { CheckCircle, Truck } from 'lucide-react';
import { ProductSellerPerformanceBarComponent } from './product-seller-performance-bar.component.tsx';
import { BsPatchCheckFill } from 'react-icons/bs';

export function ProductSellerComponent({ detail }: { detail: ProductDetail }): JSX.Element {
    const { seller } = detail;
    return (
        <>
            <h2 className="text-xl">Vendido por {seller!.name}</h2>
            {seller?.isOfficial && (
                <div className="flex items-center gap-x-2">
                    <span className="text-app-button-primary">
                        <BsPatchCheckFill />
                    </span>
                    <p>Tienda oficial de Mercado Libre</p>
                </div>
            )}
            <p className="text-xs text-gray-600 mb-1">
                {seller!.totalProducts > 1
                    ? `+${seller!.totalProducts} Productos`
                    : `${seller!.totalProducts} Producto`}
            </p>

            <div className="mt-5 w-full">
                <ProductSellerPerformanceBarComponent
                    onTimeDeliveryRating={seller!.onTimeDeliveryRating}
                    customerServiceRating={seller!.customerServiceRating}
                    salesPerformanceRating={seller!.salesPerformanceRating}
                />
            </div>

            <div className="mt-5">
                {seller!.customerServiceRating || seller!.onTimeDeliveryRating || seller!.salesPerformanceRating ? (
                    <div className="flex gap-y-1 text-sm text-gray-700 mt-1 text-center items-center justify-around">
                        <div className="flex flex-col gap-2 w-[30%] ">
                            <p className="font-semibold">{seller!.totalSales}</p>
                            <p className="text-xs">Ventas concretadas</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 w-[30%]">
                            <CheckCircle
                                size={16}
                                className={seller!.salesPerformanceRating ? 'text-app-text-success' : 'text-gray-400'}
                            />
                            <p className="text-xs">Brinda buena atención</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 w-[30%]">
                            <Truck
                                size={16}
                                className={seller!.onTimeDeliveryRating ? 'text-app-text-success' : 'text-gray-400'}
                            />
                            <p className="text-xs">Entrega sus productos a tiempo</p>
                        </div>
                    </div>
                ) : (
                    <div className="text-sm text-gray-500 mt-1">
                        No tiene suficientes ventas para evaluar su atención
                    </div>
                )}
            </div>
        </>
    );
}
