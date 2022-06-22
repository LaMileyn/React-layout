import React from 'react';
import s from './Cards.module.scss';
import Card from "./Card/Card";

const Cards = (props) => {
    return (
        <div className={s.cards}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default Cards;