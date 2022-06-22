import React from 'react';
import s from './MainPage.module.scss'
import Header from "../../components/Header/Header";
import TopBanner from "../../components/TopBanner/TopBanner";
import MainContent from "../../components/MainContent/MainContent";

const MainPage = (props) => {
    return (
        <section className={s['main-page']}>
            <TopBanner/>
            <MainContent/>
        </section>
    );
}

export default MainPage;