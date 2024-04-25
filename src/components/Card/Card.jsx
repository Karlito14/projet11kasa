import { Link, useOutletContext } from 'react-router-dom';
import style from './style.module.scss';

export const Card = ({ card }) => {
    const setCurrentPage = useOutletContext();
    return (
        <li>
            <Link to={`/house/${card.id}`} onClick={() => setCurrentPage('')}>
                <article className={style.container} style={{backgroundImage: `url(${card.cover})`}}>
                    <h2 className={style.container__title}>{card.title}</h2>
                </article>
            </Link>
        </li>
    );
};