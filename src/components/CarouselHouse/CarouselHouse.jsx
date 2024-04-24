import { useState } from 'react';
import style from './style.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const CarouselHouse = ({ pictures, title }) => {
    const [indexImage, setIndexImage] = useState(0);

    const incrIndex = () => {
        let newIndex = indexImage + 1;
        if(newIndex > pictures.length - 1) {
            newIndex = 0;
        }
        setIndexImage(newIndex);
    };

    const decrIndex = () => {
        let newIndex = indexImage - 1;
        if(newIndex < 0) {
            newIndex = pictures.length - 1;
        }
        setIndexImage(newIndex);
    };

    return (
        <div className={style.containerImg}>
            {pictures.length > 1 && <IoIosArrowBack className={style.containerImg__iconPrev} onClick={() => decrIndex()} />}
            <img src={pictures[indexImage]} alt={title} className={style.containerImg__img} />
            {pictures.length > 1 && <span className={style.containerImg__span}>{indexImage + 1}/{pictures.length}</span>}
            {pictures.length > 1 && <IoIosArrowForward className={style.containerImg__iconNext} onClick={() => incrIndex()} />}
        </div>
    );
};