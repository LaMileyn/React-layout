import React from 'react';
import s from './Card.module.scss';
import {Link} from "react-router-dom";


const Card = (props) => {
    return (
        <div className={s.card}>
            <div className={s.card__image}>
                <img
                    src="https://w-dog.ru/wallpapers/2/13/539282408816904/skazochnoe-foto-biryuzovogo-ozera-s-gorami-i-lesom.jpg"
                    alt=""/>
            </div>
            <div className={s.card__text}>
                <Link className={s.card__link} to={"design"}>Design</Link>
                <h2>SOFA</h2>
            </div>
        </div>
    );
}

export default Card;