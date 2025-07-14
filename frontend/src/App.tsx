import type { JSX } from 'react';
import { Routes } from './routes.tsx';
import { Outlet } from 'react-router-dom';

/**
 * App component that serves as the main entry point for the application.
 */
function App(): JSX.Element {
    return (
        <Routes>
            <Outlet />
        </Routes>
    );
}

export default App;
