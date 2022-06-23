import axios from "axios";

export const request = axios.create({
    baseURL: "http://localhost:5000",
    params: {}
})

// получение данных о карточках
export class CardsApi {
    static async getCards(category,page){
        const url = category === "all"
            ? `/cards?_page=${page}&_limit=6`
            : `/cards?category=${category}&_page=${page}&_limit=6`
        return await request.get(url)
    }
    static async deleteCard(id){
        return await request.delete(`/cards/${id}`)
    }
}

