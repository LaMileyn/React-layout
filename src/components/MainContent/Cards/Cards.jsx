import React, {useEffect, useState} from 'react';
import s from './Cards.module.scss';
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {deleteCard, fetchCardsData} from "../../../redux/actions/CardsActions/CardsData";
import {changeCurrentPage} from "../../../redux/reducers/CardsDataReducer";

const Cards = ({cardsType}) => {


    const [activeCardId, setActiveCardId] = useState(null)
    const {cards, totalCardsCount, loading} = useSelector(state => state.cards)
    const dispatch = useDispatch()


    // получение основной порции карточек
    useEffect(() => {
        dispatch(changeCurrentPage())
        dispatch(fetchCardsData(cardsType))
    }, [dispatch, cardsType])

    // при нажатии DEL удалить карточку
    useEffect(() => {
        const keyDownHandler = (event) => {
            if (activeCardId) {
                if (event.code === "Delete") {
                    dispatch(deleteCard(activeCardId))
                    setActiveCardId(null)
                }
                if (event.code === "Escape") {
                    setActiveCardId(null)
                }
            }
        }
        document.addEventListener("keydown", keyDownHandler)
        return () => document.removeEventListener("keydown", keyDownHandler)
    }, [activeCardId])

    // load more cards
    const getMoreCards = () => {
        dispatch(fetchCardsData(cardsType))
    }

    //click card handler
    const clickCardHandler = (id) => {
        if (id === activeCardId) setActiveCardId(null)
        else {
            setActiveCardId(id)
        }
    }

    if ( loading && !cards.length ) return <div>Loading.......</div>

    return (
        <div className={s.cards}>
            <div className={s.cards__items}>
                {
                    loading && cards.length && (
                        <>
                            {cards.map(card => (
                                <Card key={card.id} active={card.id === activeCardId} clickCardHandler={clickCardHandler}
                                      data={card}/>
                            ))}
                            <div>Loading.......</div>
                        </>
                    )
                }
                {
                    !loading && cards.map(card => (
                        <Card key={card.id} active={card.id === activeCardId} clickCardHandler={clickCardHandler}
                              data={card}/>
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