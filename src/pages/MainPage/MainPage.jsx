import React from 'react';
import s from './MainPage.module.scss'
import Header from "../../components/Header/Header";
import TopBanner from "../../components/TopBanner/TopBanner";

const MainPage = (props) => {
    return (
        <section className={s['main-page']}>
            <TopBanner/>
        </section>
    );
}

export default MainPage;