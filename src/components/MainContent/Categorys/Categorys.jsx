import React from 'react';
import s from './Categorys.module.scss'
import {Link, NavLink} from "react-router-dom";

const Categorys = (props) => {
    return (
        <div className={s.categorys}>
            <div className={s.categorys__links}>
                <div><NavLink className={s.categorys__link} to ={'showAll'}>Show All</NavLink></div>
                <div><NavLink className={s.categorys__link} to ={'design'}>Design</NavLink></div>
                <div><NavLink className={s.categorys__link} to ={'branding'}>Branding</NavLink></div>
                <div><NavLink className={s.categorys__link} to ={'illustration'}>Illustration</NavLink></div>
                <div><NavLink className={s.categorys__link} to ={'motion'}>Motion</NavLink></div>
            </div>
        </div>
    );
}

export default Categorys;