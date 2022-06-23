import React, {useEffect} from 'react';
import s from './Cards.module.scss';
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {fetchCardsData} from "../../../redux/actions/CardsActions/CardsData";
import {changeCurrentPage} from "../../../redux/reducers/CardsDataReducer";

const Cards = ({cardsType}) => {

    const {cards, totalCardsCount, loading} = useSelector(state => state.cards)
    const dispatch = useDispatch()
    // получение основной порции карточек
    useEffect(() => {
        dispatch(changeCurrentPage())
        dispatch(fetchCardsData(cardsType))
    }, [dispatch, cardsType])
    // load more cards
    const getMoreCards = () => {
        dispatch(fetchCardsData(cardsType))
    }

    if (loading) return <div>....Loading.......</div>

    return (
        <div className={s.cards}>
            <div className={s.cards__items}>
                {
                    cards.map(card => (
                        <Card key={card.id} data={card}/>
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