/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { HouseSheet } from '../../components/HouseSheet/HouseSheet';
import { useEffect, useState } from 'react';
import { ApiData } from '../../../api/api-data';
import { Error } from '../../components/Error/Error';

export const HousePage = () => {
    const [house, setHouse] = useState(null);
    
    const { id } = useParams();

    useEffect(() => {
        const getHouse = async () => {
            const data = await ApiData.fetchByID(id);
            setHouse(data);
        };
        getHouse();
    },[]);

    const renderComponent = () => {
        if(house) {
            return <HouseSheet house={house} />;
        } else if(house === undefined) {
            return <Error />;
        }
    };

    return renderComponent();
};