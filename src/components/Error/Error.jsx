import { Link, useOutletContext } from 'react-router-dom';
import style from './style.module.scss';
import { useEffect } from 'react';

export const Error = () => {
    const setCurrentPage = useOutletContext();
    
    useEffect(() => {
        setCurrentPage('');
    }),[];

    return (
        <main className={style.container}>
            <h2 className={style.container__title}>404</h2>
            <p className={style.container__paragraph}>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to='/' onClick={() => setCurrentPage('/')} className={style.container__link}>Retourner sur la page d’accueil</Link>
        </main>
    );
};