import {createAsyncThunk} from "@reduxjs/toolkit";
import {CardsApi} from "../../../api/axios_instance";

// получение порции данных о конкретной категории карточек
export const fetchCardsData = createAsyncThunk(
    "cards/fetchPortion",
    async (category = "all", api) => {
        try {
            // cards - state карточек
            const {cards} = api.getState()
            const response = await CardsApi.getCards(category, cards.currentPage + 1)
            return {response, category}
        } catch (e) {
            console.log(e)
        }

    }
)
// удаление конкретной карточки
export const deleteCard = createAsyncThunk(
    "cards/fetchPortion",
    async (id, { dispatch }) => {
       try{
           await CardsApi.deleteCard(id)
           dispatch(deleteCard(id))
       }catch(e){
           console.log(e)
       }

    }
)
