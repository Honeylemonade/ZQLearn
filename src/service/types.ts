
export class Article {
    public id: string = crypto.randomUUID()
    public title: string
    public content: string
    public createTime: Date = new Date()
    public updateTime: Date = new Date()

    constructor(title: string, content: string) {
        this.title = title
        this.content = content
    }
}

export enum WordState {
    KNOWED, UNKNOWED
}

export class Word {
    public id: string = crypto.randomUUID()
    public word: string
    public descrptions: string[]
    public sentences: string[]
    public state: WordState
    public createTime: Date = new Date()
    public updateTime: Date = new Date()

    constructor(word: string, descrption: string[], sentences: string[]) {
        this.word = word
        this.descrptions = descrption
        this.sentences = sentences
        this.state = WordState.UNKNOWED
    }
}
