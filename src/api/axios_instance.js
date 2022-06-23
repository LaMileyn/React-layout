import axios from "axios";

export const request = axios.create({
    baseURL: "http://localhost:5000",
    params: {}
})

// получение данных о карточках
export class CardsApi {
    static async getCards(category){
        return await request.get(`/cards?category=${category}`)
    }
}

