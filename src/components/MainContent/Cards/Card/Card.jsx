import React from 'react';
import s from './Card.module.scss';
import {Link} from "react-router-dom";
import cn from 'classnames'


const Card = ({ data, active, clickCardHandler }) => {

    return (
        <div className={cn(s.card, { [s.active] : active })}>
            <div className={s.card__image}>
                <img
                    onClick={ () => clickCardHandler(data.id)}
                    src={data.image}
                    alt=""/>
            </div>
            <div className={s.card__text}>
                <Link className={s.card__link} to={`/main/${data.category.toLowerCase()}`}>{data.category}</Link>
                <h2>{data.name}</h2>
            </div>
        </div>
    );
}

export default Card;