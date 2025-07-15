import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesConstants } from '../../../../routes.tsx';

/**
 * ProductListPage component that serves as a placeholder for the product list page.
 * It currently contains two buttons that navigate to a product detail page.
 */
export function ProductListPage(): JSX.Element {
    return (
        <>
            <main className="grow flex w-full items-center justify-center flex-col gap-3">
                <NavLink
                    to={RoutesConstants.PRODUCT_DETAIL.replace(':id', 'c07dce9d-cd5d-4c67-8368-480546fcdbee')}
                    className="w-60 h-11"
                >
                    <button
                        className="rounded-md cursor-pointer w-60 h-11 bg-app-button-primary text-white font-semibold hover:bg-app-button-primary-hover
                    transition delay-150 duration-200 ease-in-out"
                    >
                        Caso: Producto 1
                    </button>
                </NavLink>
                <NavLink
                    to={RoutesConstants.PRODUCT_DETAIL.replace(':id', '662aed8f-5493-41c5-bcc5-9862d99776e0')}
                    className="w-60 h-11"
                >
                    <button
                        className="rounded-md cursor-pointer w-60 h-11 bg-app-button-primary text-white font-semibold hover:bg-app-button-primary-hover
                    transition delay-150 duration-200 ease-in-out"
                    >
                        Caso: Producto 2
                    </button>
                </NavLink>
                <NavLink to={RoutesConstants.PRODUCT_DETAIL.replace(':id', 'adadadad')} className="w-60 h-11">
                    <button
                        className="rounded-md cursor-pointer w-60 h-11 bg-app-button-primary text-white font-semibold hover:bg-app-button-primary-hover
                    transition delay-150 duration-200 ease-in-out"
                    >
                        Caso: Producto no existente
                    </button>
                </NavLink>
            </main>
        </>
    );
}
