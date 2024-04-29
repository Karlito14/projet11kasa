import { Link, useOutletContext } from 'react-router-dom';
import style from './style.module.scss';

export const Card = ({ card }) => {
    const setCurrentPage = useOutletContext();
    return (
        <li>
            <Link to={`/house/${card.id}`} onClick={() => setCurrentPage('')}>
                <figure className={style.container}>
                    <img src={card.cover} alt={card.title} className={style.container__img} />
                    <figcaption className={style.container__title}>{card.title}</figcaption>
                </figure>
            </Link>
        </li>
    );
};