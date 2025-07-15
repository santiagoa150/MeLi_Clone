import type { JSX } from 'react';

/**
 * LoaderComponent is a functional component that displays a loading spinner.
 */
export function LoaderComponent(): JSX.Element {
    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-28 h-28 border-8 text-app-primary text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-app-primary rounded-full"></div>
        </div>
    );
}
