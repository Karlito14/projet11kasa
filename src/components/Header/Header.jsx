/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import style from './style.module.scss';

export const Header = ({ updatePage, currentPage }) => {

    return (
        <header className={style.container}>
            <img className={style.container__logo} src={logo} alt='Kasa' />
            <nav>
                <ul className={style.container__nav}>
                    <li>
                        <Link 
                            className={style.container__nav__link} 
                            to='/' 
                            style={{textDecoration: currentPage === 'home' ? 'underline' : ''}}
                            onClick={() => updatePage('home')}
                        >Accueil</Link>
                    </li>
                    <li>
                        <Link 
                            className={style.container__nav__link} 
                            to='/about'
                            style={{textDecoration: currentPage === 'about' ? 'underline' : ''}}
                            onClick={() => updatePage('about')}
                        >A propos</Link>
                    </li>
                </ul> 
            </nav>
        </header>
    );
};