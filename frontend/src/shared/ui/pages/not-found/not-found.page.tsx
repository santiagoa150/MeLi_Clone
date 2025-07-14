import type { JSX } from 'react';
import { HeaderComponent } from '../../components/header.component.tsx';
import NotFoundIconSvg from '../../assets/not-found-icon.svg.tsx';
import { NavLink } from 'react-router-dom';
import { RoutesConstants } from '../../../../routes.tsx';

/**
 * NotFoundPage component that serves as a placeholder for the not found page.
 */
export function NotFoundPage(): JSX.Element {
    return (
        <main className="grow flex w-full flex-col">
            <HeaderComponent />
            <div className="grow flex w-full justify-center items-center">
                <div className="flex w-[60%] flex-col items-center justify-center gap-8 text-center text-app-text-secondary">
                    <NotFoundIconSvg />
                    <h1 className="font-semibold text-xl">Parece que esta página no existe</h1>
                    <NavLink to={RoutesConstants.HOME}>
                        <h3 className="text-sm cursor-pointer">Ir a la página principal</h3>
                    </NavLink>
                </div>
            </div>
        </main>
    );
}
