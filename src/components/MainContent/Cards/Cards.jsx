import React, {useEffect, useState} from 'react';
import s from './Cards.module.scss';
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {deleteCard, fetchCardsData} from "../../../redux/actions/CardsActions/CardsData";
import {changeCurrentPage} from "../../../redux/reducers/CardsDataReducer";

const Cards = ({cardsType}) => {


    const [activeCardId,setActiveCardId] = useState(null)
    const {cards, totalCardsCount, loading} = useSelector(state => state.cards)
    const dispatch = useDispatch()

    // console.log(cards)
    // получение основной порции карточек
    useEffect(() => {
        dispatch(changeCurrentPage())
        dispatch(fetchCardsData(cardsType))
    }, [dispatch, cardsType])

    // load more cards
    const getMoreCards = () => {
        dispatch(fetchCardsData(cardsType))
    }

    //click card handler
    const clickCardHandler = (id) =>{
        if ( id === activeCardId ) dispatch(deleteCard(id))
        else setActiveCardId(id)
    }

    if (loading) return <div>Loading.......</div>

    return (
        <div className={s.cards}>
            <div className={s.cards__items}>
                {
                    cards.map(card => (
                        <Card key={card.id} active={card.id === activeCardId} clickCardHandler ={clickCardHandler}  data={card}/>
                    ))
                }
            </div>
            {
                cards.length < totalCardsCount && (
                    <div className={s.cards__btn}>
                        <button onClick={getMoreCards}>LOAD MORE</button>
                    </div>
                )
            }
        </div>
    );
}

export default Cards;