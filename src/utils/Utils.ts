import { ArticleForSale } from "@/types/types"

export default function getRandomIndex(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.ceil(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getTaxeIncl(prix: number): number {
    const priceWithTaxe = Number(prix) + (Number(prix) * 0.06)
    return priceWithTaxe
}

export function shuffle(arr: ArticleForSale[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}