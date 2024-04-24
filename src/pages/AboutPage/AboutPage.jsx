import { Banner } from '../../components/Banner/Banner';
import bannerAbout from '../../assets/banner-about.jpg';
import { CollapseList } from '../../components/CollapseList/CollapseList';

export const AboutPage = () => {
    return (
        <>
            <Banner img={bannerAbout} />
            <CollapseList />
        </>
    );
};