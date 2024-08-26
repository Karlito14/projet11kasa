import logo from '../../assets/logo-white.png';
import style from './style.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <img className={style.container__logo} src={logo} alt='kasa blanc'/>
        <p className={style.container__rights}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};