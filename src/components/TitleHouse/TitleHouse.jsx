import { Tags } from '../Tags/Tags';
import style from './style.module.scss';

export const TitleHouse = ({title, location, tags}) => {
    return (
        <div className={style.container}>
            <h2 className={style.container__title}>{title}</h2>
            <span className={style.container__span}>{location}</span>
            <ul>
                {tags.map((tag, index) => {
                    return <Tags key={`${index}-${tag}`} tag={tag} />;
                })}
            </ul>
        </div>
    );
};