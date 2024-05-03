import { useState } from 'react';
import style from './style.module.scss';
import { IoIosArrowDown } from 'react-icons/io';

export const Collapse = ({ object }) => {
    const [displayContent, setDisplayContent] = useState(false);

    const styleContent = () => {
        const style = {
            opacity: displayContent ? '1' : '0',
            position: displayContent ? 'relative' : 'absolute',
        };

        return style;
    };

    const renderContent = () => {
        const typeContent = typeof object.content;
        if(typeContent === 'string') {
            return <p className={style.container__content} style={styleContent()}>{object.content}</p>;
        } else if (typeContent === 'object') {
            const list = [];

            object.content.map((item, index) => {
                list.push(<li className={style.contentUl__contentLi} key={`${index}-${item}`}>{item}</li>);
            });

            return <ul className={style.contentUl} style={styleContent()}>{list}</ul>;
        }
    };

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
            {renderContent()}
        </li>
    );
};