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
        console.log(url)
        return await request.get(url)
    }
}

