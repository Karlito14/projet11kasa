import { useState } from 'react';
import style from './style.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const HouseSheet = ({ house }) => {
    const [indexImage, setIndexImage] = useState(0);

    const { description, pictures, host, equipments, location, title, rating, tags} = house;
    console.log(house)
    return (
        <main className={style.main}>
            <div className={style.containerImg}>
                {<IoIosArrowBack />}
                {<IoIosArrowForward />}
            </div>
        </main>
    );
};