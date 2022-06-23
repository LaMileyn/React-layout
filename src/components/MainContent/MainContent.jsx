import React from 'react';
import s from './MainContent.module.scss'
import Categorys from "./Categorys/Categorys";
import Cards from "./Cards/Cards";
import {Outlet, Route, Routes, Navigate} from "react-router-dom";


const MainContent = (props) => {
    return (
        <section className={s['main-content']}>
            <div className={s['main-content__container']}>
                <Categorys/>
                <div className={s['main-content__grid']}>
                    <Outlet/>
                </div>
                <Routes>
                    <Route index element={<Navigate to={`all`}/>}/>
                    <Route path="all" element={<Cards cardsType={"all"}/>}/>
                    <Route path="Design" element={<Cards cardsType={"Design"}/>}/>
                    <Route path="Branding" element={<Cards cardsType={"Branding"}/>}/>
                    <Route path="Illustration" element={<Cards cardsType={"Illustration"}/>}/>
                    <Route path="Motion" element={<Cards cardsType={"Motion"}/>}/>
                </Routes>
            </div>
        </section>
    );
}

export default MainContent;