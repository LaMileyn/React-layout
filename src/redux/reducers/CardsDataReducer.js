import { createSlice } from '@reduxjs/toolkit'
import jsonData from './../../data/data.json'
import {fetchCardsData} from "../actions/CardsActions/CardsData";

const initialState = {
    cards: [],
    currentPage : 0,
    loading : false,
    totalCardsCount : 0,
    error : ""
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        changeCurrentPage : (state) =>{
            state.currentPage = 0
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchCardsData.pending, (state,action) =>{
            state.loading = true
        })
        builder.addCase(fetchCardsData.fulfilled, (state,action) =>{
            state.cards = state.cards.concat(action.payload.data)
            state.totalCardsCount = action.payload.headers['x-total-count']
            state.currentPage++
            state.loading = false
        })
        builder.addCase(fetchCardsData.rejected, (state,action) =>{
            state.error = action.payload
            state.loading = false
        })
    }
})

export const {  getCards, changeCurrentPage  } = cardsSlice.actions

export default cardsSlice.reducer