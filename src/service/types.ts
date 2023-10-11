export class Card {
    public id: string
    public firstClass: string
    public secondClass: string
    public thirdClass: string
    public cardTitle: string
    public isFamiliar: boolean
    public isStar: boolean
    public description: string

    constructor(id: string, firstClass: string, secondClass: string, thirdClass: string, cardTitle: string, isFamiliar: boolean, isStar: boolean, description: string) {
        this.id = id
        this.firstClass = firstClass
        this.secondClass = secondClass
        this.thirdClass = thirdClass
        this.cardTitle = cardTitle
        this.isFamiliar = isFamiliar
        this.isStar = isStar
        this.description = description
    }
}
