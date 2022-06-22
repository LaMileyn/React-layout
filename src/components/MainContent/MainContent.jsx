import React from 'react';
import s from './MainContent.module.scss'
import Categorys from "./Categorys/Categorys";
import Cards from "./Cards/Cards";
import {Outlet, Route, Routes} from "react-router-dom";


const MainContent = (props) => {
    return (
        <section className={s['main-content']}>
            <div className={s['main-content__container']}>
                <Categorys/>
                <Outlet/>
                <Routes>
                    <Route path="showAll" element={<Cards/>}/>
                    <Route index element={<Cards/>}/>
                    <Route path="design" element={<Cards/>}/>
                    <Route path="branding" element={<Cards/>}/>
                    <Route path="illustration" element={<Cards/>}/>
                    <Route path="motion" element={<Cards/>}/>
                </Routes>
            </div>
        </section>
    );
}

export default MainContent;