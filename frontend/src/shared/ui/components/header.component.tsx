import type { JSX } from 'react';
import LogoSmall from '../assets/logo__small@2x.png';

/**
 * HeaderComponent is a functional component that renders the header of the application.
 */
export function HeaderComponent(): JSX.Element {
    return (
        <header className="bg-app-primary w-full h-10 flex items-center">
            <img className="ml-2 h-[28px]" src={LogoSmall} alt={'Logo Small'} />
        </header>
    );
}
