import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <>
            <h1>header</h1>
            <Outlet />
            <footer>Footer</footer>
        </>
    );
};