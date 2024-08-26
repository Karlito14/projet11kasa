import { CarouselHouse } from '../CarouselHouse/CarouselHouse';
import { Collapse } from '../Collapse/Collapse';
import { Host } from '../Host/Host';
import { TitleHouse } from '../TitleHouse/TitleHouse';
import style from './style.module.scss';

export const HouseSheet = ({ house }) => {

  const { description, pictures, host, equipments, location, title, rating, tags} = house;

  return (
    <main className={style.main}>
      <CarouselHouse pictures={pictures} title={title} />
      <section className={style.containerInfo}>
        <TitleHouse title={title} location={location} tags={tags} />
        <Host host={host} rating={rating} />
      </section>
      <ul className={style.main__dropdown}>
        <Collapse object={{title: 'Description', content: description}} />
        <Collapse object={{title: 'Équipements', content: equipments}} />
      </ul>
    </main>
  );
};