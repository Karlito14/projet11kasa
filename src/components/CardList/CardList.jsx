import style from './style.module.scss';
import { Card } from '../Card/Card';

export const CardList = ({data}) => {
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