
import {createAsyncThunk} from "@reduxjs/toolkit";
import {CardsApi} from "../../../api/axios_instance";

// получение порции данных о конкретной категории карточек
export const fetchCardsData = createAsyncThunk(
    "cards/fetchPortion",
    async (category= "all",api) =>{
            // cards - state карточек
        const { cards } = api.getState()
        const response = await CardsApi.getCards(category,cards.currentPage + 1)
        return { response, category }
    }
)
