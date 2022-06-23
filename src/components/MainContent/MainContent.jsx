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
                <Outlet/>
                <Routes>
                    <Route index element={<Navigate to = {`showAll`}/>}/>
                    <Route path="showAll" element={<Cards cardsType={"all"}/>}/>
                    <Route index element={<Cards cardsType={"all"}/>}/>
                    <Route path="design" element={<Cards cardsType={"Design"}/>}/>
                    <Route path="branding" element={<Cards cardsType={"Branding"}/>}/>
                    <Route path="illustration" element={<Cards cardsType={"Illustration"}/>}/>
                    <Route path="motion" element={<Cards cardsType={"Motion"}/>}/>
                </Routes>
            </div>
        </section>
    );
}

export default MainContent;