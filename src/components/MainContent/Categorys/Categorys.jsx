import React, {useEffect, useState} from 'react';
import s from './Categorys.module.scss'
import {Link, NavLink, useNavigate } from "react-router-dom";
import cn from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import MediaQuery from 'react-responsive'

const Categorys = (props) => {


    // const {} = useSelector( state => state.cards )
    // const navigate = useNavigate()

    // текущее состояние селекта
    // const [category, setCategory] = useState("all")
    // текущее состояние селекта

    // возможные категории
    const categorys = [
        {link: "all", displayName: "Show All"},
        {link: "Design", displayName: "Design"},
        {link: "Branding", displayName: "Branding"},
        {link: "Illustration", displayName: "Illustration"},
        {link: "Motion", displayName: "Motion"},
    ]
    // возможные категории

    // useEffect( () => {
    //     navigate(category)
    // },[category])

    const dispatch = useDispatch()
    const checkActiveLink = ({isActive}) => isActive ? cn(s.categorys__link, s.link__active) : s.categorys__link
    return (
        <div className={s.categorys}>
            <MediaQuery minWidth={1041}>
                <div className={s.categorys__links}>
                    {
                        categorys.map(({link, displayName}) => (
                            <div key={link}>
                                <NavLink
                                    className={checkActiveLink}
                                    to={link}>{displayName}</NavLink>
                            </div>
                        ))
                    }
                </div>
            </MediaQuery>
            {/*----------------------------------------------*/}
            <MediaQuery maxWidth={1040}>
                <div>
                    <select name="links" id="links-select" className={s.categorys__select}>
                        {
                            categorys.map(({link, displayName}) => (
                                <option value={link}>{displayName}</option>
                            ))
                        }
                    </select>
                </div>
            </MediaQuery>


        </div>
    );
}

export default Categorys;