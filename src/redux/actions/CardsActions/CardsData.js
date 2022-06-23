import {createAsyncThunk} from "@reduxjs/toolkit";
import {CardsApi} from "../../../api/axios_instance";
import {cardDeletion} from "../../reducers/CardsDataReducer";


// получение порции данных о конкретной категории карточек
export const fetchCardsData = createAsyncThunk(
    "cards/fetchPortion",
    async (category = "all", api) => {
        try {
            // cards - state карточек
            const { cards } = api.getState()
            const response = await CardsApi.getCards(category, cards.currentPage + 1)
            return {response, category}
        } catch (e) {
            console.log(e)
        }

    }
)
// удаление конкретной карточки
export const deleteCard = createAsyncThunk(
    "cards/deletePortion",
    async (id, { dispatch,getState }) => {
       try {
           await CardsApi.deleteCard(id)
           dispatch(cardDeletion(id))
           const { cards } = getState()
           dispatch(fetchCardsData(cards.currentCategory, cards.currentPage))
       } catch(e){
           console.log(e)
       }

    }
)
