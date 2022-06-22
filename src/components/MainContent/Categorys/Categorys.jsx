import React from 'react';
import s from './Categorys.module.scss'
import {Link, NavLink} from "react-router-dom";
import cn from 'classnames'

const Categorys = (props) => {
    return (
        <div className={s.categorys}>
            <div className={s.categorys__links}>
                <div><NavLink className={ ({isActive}) => isActive ? cn(s.categorys__link,s.link__active) : s.categorys__link} to ={'showAll'}>Show All</NavLink></div>
                <div><NavLink className={({isActive}) => isActive ? cn(s.categorys__link,s.link__active) : s.categorys__link} to ={'design'}>Design</NavLink></div>
                <div><NavLink className={({isActive}) => isActive ? cn(s.categorys__link,s.link__active) : s.categorys__link} to ={'branding'}>Branding</NavLink></div>
                <div><NavLink className={({isActive}) => isActive ? cn(s.categorys__link,s.link__active) : s.categorys__link} to ={'illustration'}>Illustration</NavLink></div>
                <div><NavLink className={({isActive}) => isActive ? cn(s.categorys__link,s.link__active) : s.categorys__link} to ={'motion'}>Motion</NavLink></div>
            </div>
        </div>
    );
}

export default Categorys;