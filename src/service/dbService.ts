import db from './dbUtils'
import { Card } from './types';


export function getCards(): Card[] {
    return db.data.cards
}


export function getAllFirstClass(): string[] {
    return Array.from(new Set(db.data.cards.map(e => { return e.firstClass })))
}

export function getAllSecondClass(firstClass: string): string[] {
    return Array.from(new Set(db.data.cards.filter(e => { return e.firstClass == firstClass || firstClass == "全部" }).map(e => { return e.secondClass })))
}

export function getAllThridClass(firstClass: string, secondClass: string): string[] {
    return Array.from(new Set(db.data.cards
        .filter(e => { return e.firstClass == firstClass || firstClass == "全部" })
        .filter(e => { return e.secondClass == secondClass || secondClass == "全部" })
        .map(e => { return e.thirdClass })))
}

export function getCardByFilter(firstClass: string, secondClass: string, thirdClass: string, cardType: string): Card[] {
    return db.data.cards.filter(e => { return e.firstClass == firstClass || firstClass == "全部" })
        .filter(e => { return e.secondClass == secondClass || secondClass == "全部" })
        .filter(e => { return e.thirdClass == thirdClass || thirdClass == "全部" })
        .filter(e => { return cardType == "all" ? true : e.isFamiliar == false })
}
