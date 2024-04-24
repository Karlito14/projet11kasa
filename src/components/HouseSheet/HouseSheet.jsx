import { CarouselHouse } from '../CarouselHouse/CarouselHouse';
import { TitleHouse } from '../TitleHouse/TitleHouse';
import style from './style.module.scss';

export const HouseSheet = ({ house }) => {

    const { description, pictures, host, equipments, location, title, rating, tags} = house;

    return (
        <main className={style.main}>
            <CarouselHouse pictures={pictures} title={title} />
            <section className={style.containerInfo}>
                <TitleHouse title={title} location={location} tags={tags} />
            </section>
        </main>
    );
};