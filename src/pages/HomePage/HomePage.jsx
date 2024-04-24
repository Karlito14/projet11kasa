import { Banner } from '../../components/Banner/Banner';
import bannerImg from '../../assets/banner-home.jpg';
import { CardList } from '../../components/CardList/CardList';

export const HomePage = () => {
    return(
        <>
            <Banner img={bannerImg} text='Chez vous, partout et ailleurs' />
            <CardList />
        </>
    );
};