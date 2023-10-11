import db from './dbUtils'
import { Card } from './types';


export function getCards(): Card[] {
    return db.data.cards
}


// export function addArticle(article: Article) {
//     db.data.articles.unshift(article)
//     db.write()
// }

// export function getArticles() {
//     return db.data.articles
// }

// export function getArticle(id: string): Article {
//     let res = db.data.articles.find(e => e.id === id)
//     if (res == undefined) {
//         return new Article("", "")
//     }
//     return res
// }

// export function updateArticle(article: Article) {
//     let art = db.data.articles.find(e => e.id === article.id)
//     if (art == undefined) {
//         console.error("不存在目标文章");
//     } else {
//         art.title = article.title
//         art.content = article.content
//         art.updateTime = new Date()
//     }
//     db.write()
// }

// export function deleteArticleById(id: string) {
//     db.data.articles.splice(db.data.articles.findIndex(e => e.id === id), 1)
//     db.write()
// }

// export function addWord(word: Word) {
//     db.data.words.unshift(word)
//     db.write()
// }

// export function getWords() {
//     return db.data.words
// }

// export function getUnknownWords() {
//     return db.data.words.filter(e => e.state == WordState.UNKNOWED)
// }

// export function getDescrptionsByWord(word: string): string[] {
//     let res = db.data.words.find(e => e.word === word)
//     if (res != undefined) {
//         return res.descrptions
//     } else {
//         return ["未找到"]
//     }
// }

// export function deleteWordByWord(word: string) {
//     db.data.words.splice(db.data.words.findIndex(e => e.word === word), 1)
//     db.write()
// }