import style from './style.module.scss';

export const Banner = ({img, text}) => {
  return (
    <div className={style.container} style={{backgroundImage: `url(${img})`}}>
      {text && <h1 className={style.container__title}>{text}</h1>}
    </div>
  );
};