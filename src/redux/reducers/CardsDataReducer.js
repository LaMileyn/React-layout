import { createSlice } from '@reduxjs/toolkit'
import jsonData from './../../data/data.json'

const initialState = {
    cards: [],
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        getCards : (state) => {
            state.cards = [...jsonData]
        },

    },
})

export const {  getCards  } = cardsSlice.actions

export default cardsSlice.reducer