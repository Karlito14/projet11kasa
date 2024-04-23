import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import style from './style.module.scss';

export const Header = () => {

    return (
        <header className={style.container}>
            <img className={style.container__logo} src={logo} alt='Kasa' />
            <nav className={style.container__nav}>
                <Link className={style.container__nav__link} to='/'>Accueil</Link>
                <Link className={style.container__nav__link} to='/about'>A propos</Link>
            </nav>
        </header>
    );
};