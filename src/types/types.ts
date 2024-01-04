export type ProductFakeApi = {
    category: string,
    description: string,
    id: number,
    image: string
    price: number,
    rating: {
        count: number,
        rate: number
    }
    title: string
}

export type SuggestSearchList = {
    marque: string,
    vues: number
}