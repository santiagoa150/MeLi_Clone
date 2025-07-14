import type { JSX, ReactNode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductListPage } from './product/infrastructure/ui/pages/list/product-list.page.tsx';
import { ProductDetailPage } from './product/infrastructure/ui/pages/detail/product-detail.page.tsx';

/**
 * Constants for the routes in the application.
 */
export const RoutesConstants = {
    HOME: '/',
    PRODUCT_DETAIL: '/product/:id',
} as const;

/**
 * Routes component that sets up the routing for the application.
 * @param params - The parameters for the component, including children.
 */
export function Routes(params: { children: ReactNode }): JSX.Element {
    return (
        <RouterProvider
            router={createBrowserRouter([
                {
                    children: [
                        {
                            element: <ProductDetailPage />,
                            path: RoutesConstants.PRODUCT_DETAIL,
                        },
                        {
                            element: <ProductListPage />,
                            path: RoutesConstants.HOME,
                        },
                    ],
                    element: params.children,
                    errorElement: undefined,
                },
            ])}
        />
    );
}
