import {createSlice} from '@reduxjs/toolkit'
import {fetchCardsData} from "../actions/CardsActions/CardsData";

const initialState = {
    cards: [],
    currentPage: 0,
    loading: false,
    totalCardsCount: 0,
    currentCategory: "all",
    error: ""
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        changeCurrentPage: (state) => {
            state.currentPage = 0
        },
        deleteCard : (state,{ id }) =>{
            state.cards= state.cards.filter( card => card.id !== id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCardsData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchCardsData.fulfilled, (state, { payload : { category, response}}) => {
            if (category === state.currentCategory) {
                // если категории одинаковые,то добавляем данные в массив
                state.cards = state.cards.concat(response.data)
            } else {
                // если категории разные --> пересоздаем на новый массив
                state.cards = response.data
            }
            state.currentCategory = category
            state.totalCardsCount = response.headers['x-total-count']
            state.currentPage++
            state.loading = false
        })
        builder.addCase(fetchCardsData.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
    }
})

export const {getCards, changeCurrentPage} = cardsSlice.actions

export default cardsSlice.reducer