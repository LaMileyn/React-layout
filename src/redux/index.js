import { configureStore } from '@reduxjs/toolkit'
import cardsDataReducer from "./reducers/CardsDataReducer";

export const store = configureStore({
    reducer: {
        cards : cardsDataReducer
    },
})