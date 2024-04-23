import { Banner } from '../../components/Banner/Banner';
import bannerImg from '../../assets/banner-home.jpg';

export const HomePage = () => {
    return(
        <Banner img={bannerImg} text='Chez vous, partout et ailleurs' />
    );
};