import React from 'react';
import s from './MainContent.module.scss'
import Categorys from "./Categorys/Categorys";
import Cards from "./Cards/Cards";

const MainContent = (props) => {
    return (
        <section className={s['main-content']}>
            <div className={s['main-content__container']}>
                <Categorys/>
                <Cards/>
            </div>
        </section>
    );
}

export default MainContent;