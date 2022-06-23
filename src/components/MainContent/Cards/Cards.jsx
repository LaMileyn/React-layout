import React from 'react';
import s from './Cards.module.scss';
import Card from "./Card/Card";
import {useSelector} from "react-redux";

const Cards = ({cardsType}) => {
    const {cards} = useSelector(state => state.cards)
    return (
        <div className={s.cards}>
            {
                cardsType === "all"
                    ? (
                        cards.map(card => (
                            <Card key={card.id} data={card}/>
                        ))
                    )
                    : (
                        cards?.filter(el => el.category === cardsType)
                            .map(card => (
                                <Card key={card.id} data={card}/>
                            ))
                    )

            }
        </div>
    );
}

export default Cards;