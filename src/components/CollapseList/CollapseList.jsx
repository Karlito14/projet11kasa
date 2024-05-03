import { Collapse } from '../Collapse/Collapse';
import style from './style.module.scss';


export const CollapseList = ({ settlement }) => {
    return (
        <main className={style.container}>
            <ul className={style.container__content}>
                {settlement.map((rule, index) => {
                    return <Collapse key={`${index}-${rule.title}`} object={rule} />;
                })}
            </ul>
        </main>
    );
};