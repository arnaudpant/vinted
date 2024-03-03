export default function getRandomIndex(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.ceil(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getTaxeIncl(prix: number): number {
    const priceWithTaxe = Number(prix) + (Number(prix) * 0.06)
    return priceWithTaxe
}

