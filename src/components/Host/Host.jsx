import { FaStar } from 'react-icons/fa';
import style from './style.module.scss';

export const Host = ({ host, rating}) => {

  const renderStars = () => {
    const score = +rating;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if(i <= score) {
        stars.push(<FaStar key={i} className={style.container__stars__star} style={{color: '#FF6060'}} />);
      } else {
        stars.push(<FaStar key={i} className={style.container__stars__star} style={{color: '#E3E3E3'}} />);
      }
    }

    return stars;
  };

  return (
    <div className={style.container}>
      <div className={style.container__infoHost}>
        <h3 className={style.container__infoHost__name}>{host.name}</h3>
        <img className={style.container__infoHost__img} src={host.picture} alt='' />
      </div>
      <div className={style.container__stars}>
        {renderStars()}
      </div>
    </div>
  );
};