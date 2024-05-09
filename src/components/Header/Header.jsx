import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import style from './style.module.scss';

export const Header = ({ updatePage, currentPage }) => {

    return (
        <header className={style.container}>
            <Link to='/' onClick={() => updatePage('/')}>
                <img className={style.container__logo} src={logo} alt='Kasa' />
            </Link>
            <nav>
                <ul className={style.container__nav}>
                    <li>
                        <Link 
                            className={style.container__nav__link} 
                            to='/' 
                            style={{textDecoration: currentPage === '/' ? 'underline' : ''}}
                            onClick={() => updatePage('/')}
                        >Accueil</Link>
                    </li>
                    <li>
                        <Link 
                            className={style.container__nav__link} 
                            to='/about'
                            style={{textDecoration: currentPage === '/about' ? 'underline' : ''}}
                            onClick={() => updatePage('/about')}
                        >A propos</Link>
                    </li>
                </ul> 
            </nav>
        </header>
    );
};