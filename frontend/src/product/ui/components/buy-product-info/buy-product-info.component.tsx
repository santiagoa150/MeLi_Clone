import type { JSX } from 'react';
import type { ProductDetail } from '../../../model/product-detail.ts';
import { TbArrowBack } from 'react-icons/tb';
import { TbShieldCheck } from 'react-icons/tb';
import { PiMedalLight } from 'react-icons/pi';
import { SellerBadgesConstants } from '../../../model/seller-badges.constants.ts';

/**
 * BuyProductInfoComponent is a functional component that displays product purchase information.
 * @param detail - The product detail object containing product information.
 */
export function BuyProductInfoComponent({ detail }: { detail: ProductDetail }): JSX.Element {
    const { product, seller } = detail;
    const badges = new Set(seller?.badges ?? []);

    return (
        <>
            <div>
                <p>
                    <span className="text-app-text-success font-semibold">Envío gratis</span> a todo el país
                </p>
                <p className="text-app-text-tertiary text-sm">Conoce los tiempos y las formas de envío.</p>
                <p className="text-app-button-primary text-xs">Calcular cuándo llega</p>
            </div>
            <div>
                <p>
                    <span className="font-semibold">Stock disponible:</span> {product.stock}
                </p>
            </div>
            <div className="flex w-full flex-col gap-y-2">
                <button className="bg-app-button-primary text-white h-11 rounded-sm hover:bg-app-button-primary-hover transition-colors duration-300 cursor-pointer">
                    Comprar ahora
                </button>
                <button className="bg-app-button-secondary text-app-button-primary h-11 rounded-sm cursor-pointer">
                    Agregar al carrito
                </button>
            </div>
            {seller && (
                <>
                    <div className="flex gap-x-3">
                        <img
                            className="w-16 h-auto bg-gray-200 rounded-xs"
                            src={`${import.meta.env.VITE_API_URL}/static/sellers/${seller.imageId}`}
                            alt=""
                        />
                        <div>
                            <p>
                                Vendido por <span className="text-app-button-primary">{seller.name}</span>
                            </p>
                            <p className="font-semibold">+{product.soldQuantity} ventas</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        {badges.has(SellerBadgesConstants.FREE_RETURN) && (
                            <div className="flex gap-1 items-center">
                                <div>
                                    <TbArrowBack size="25px" color="gray" />
                                </div>
                                <p className="text-sm text-app-text-tertiary">
                                    <span className="text-app-button-primary">Devolución gratis.</span> Tienes{' '}
                                    {product.freeReturnDays} días desde que lo recibes.
                                </p>
                            </div>
                        )}
                        {badges.has(SellerBadgesConstants.PURCHASE_PROTECTED) && (
                            <div className="flex gap-1 items-center">
                                <div>
                                    <TbShieldCheck size="25px" color="gray" />
                                </div>
                                <p className="text-sm text-app-text-tertiary">
                                    <span className="text-app-button-primary">Compra protegida</span>, recibe el
                                    producto que esperabas o te devolvemos tu dinero.
                                </p>
                            </div>
                        )}
                        {badges.has(SellerBadgesConstants.FACTORY_WARRANTY) && (
                            <div className="flex gap-1 items-center">
                                <div>
                                    <PiMedalLight size="25px" color="gray" strokeWidth={5} />
                                </div>
                                <p className="text-sm text-app-text-tertiary">
                                    {product.factoryWarrantyMonths} meses de garantía de fábrica.
                                </p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
