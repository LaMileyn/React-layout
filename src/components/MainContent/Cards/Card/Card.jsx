import React from 'react';
import s from './Card.module.scss';
import {Link} from "react-router-dom";


const Card = ({ data }) => {
    return (
        <div className={s.card}>
            <div className={s.card__image}>
                <img
                    src={data.image}
                    alt=""/>
            </div>
            <div className={s.card__text}>
                <Link className={s.card__link} to={"design"}>{data.category}</Link>
                <h2>{data.name}</h2>
            </div>
        </div>
    );
}

export default Card;