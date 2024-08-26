import { Banner } from '../../components/Banner/Banner';
import bannerImg from '../../assets/banner-home.jpg';
import { CardList } from '../../components/CardList/CardList';
import { useEffect, useState } from 'react';
import { ApiData } from '../../../api/api-data';

export const HomePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const housesData = await ApiData.fetchAll();
        setData(housesData);
      } catch (error) {
        console.error(error);
      }  
    };
    getData();
  }, []);

  return(
    <>
      <Banner img={bannerImg} text='Chez vous, partout et ailleurs' />
      <CardList data={data} />
    </>
  );
};