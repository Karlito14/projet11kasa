import { useState } from 'react';
import style from './style.module.scss';
import { IoIosArrowDown } from 'react-icons/io';

export const Collapse = ({ object }) => {
    const [displayContent, setDisplayContent] = useState(false);
    return (
        <li className={style.container}>
            <h3 className={style.container__title}>
                {object.title} 
                <IoIosArrowDown 
                    className={style.container__title__icon} 
                    onClick={()=> setDisplayContent(!displayContent)}
                    style={{transform: !displayContent ? 'rotate(180deg)' : ''}}
                /> 
            </h3>
            {displayContent && <p className={style.container__content}>{object.content}</p>}
        </li>
    );
};