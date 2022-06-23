import React from 'react';
import s from './Categorys.module.scss'
import {Link, NavLink} from "react-router-dom";
import cn from 'classnames'
import {useDispatch} from "react-redux";

const Categorys = (props) => {
    const dispatch = useDispatch()
    const checkActiveLink = ({isActive}) => isActive ? cn(s.categorys__link, s.link__active) : s.categorys__link
    return (
        <div className={s.categorys}>
            <div className={s.categorys__links}>
                <div>
                    <NavLink
                        className={checkActiveLink}
                        to={'showAll'}>Show All</NavLink></div>
                <div>
                    <NavLink
                        className={checkActiveLink}
                        to={'design'}>Design</NavLink></div>
                <div>
                    <NavLink
                        className={checkActiveLink}
                        to={'branding'}>Branding</NavLink></div>
                <div>
                    <NavLink
                        className={checkActiveLink}
                        to={'illustration'}>Illustration</NavLink></div>
                <div>
                    <NavLink
                        className={checkActiveLink}
                        to={'motion'}>Motion</NavLink></div>
            </div>
        </div>
    );
}

export default Categorys;