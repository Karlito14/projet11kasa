import { useState } from 'react';
import style from './style.module.scss';
import { useEffect } from 'react';
import { ApiData } from '../../../api/api-data';
import { Card } from '../Card/Card';

export const CardList = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const housesData = await ApiData.fetchAll();
            setData(housesData);
        };
        getData();
    }, []);

    return (
        <main>
            <ul className={style.container}>
                {data && data.map((house, index) => {
                    return <Card key={`${index}-${house.id}`} card={house} />;
                })}
            </ul>  
        </main>
    );
};