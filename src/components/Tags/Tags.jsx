import style from './style.module.scss';

export const Tags = ({ tag }) => {
    return (
        <li className={style.tag}>{tag}</li>
    );
};