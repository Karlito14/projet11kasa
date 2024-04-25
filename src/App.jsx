import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';

export const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <>
            <Header updatePage={setCurrentPage} currentPage={currentPage} />
            <Outlet context={setCurrentPage} />
            <Footer />
        </>
    );
};