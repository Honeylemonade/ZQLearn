import { Card } from './types'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// TODO 提取环境变量
let DB_PATH = "./src/service/ZQlearn.json"

// function OSnow() {
//     var agent = navigator.userAgent.toLowerCase();
//     var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
//     if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {

//         alert("这是windows32位系统");
//     }
//     if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
//         //your code
//         alert("这是windows64位系统");
//     }
//     if (isMac) {
//         DB_PATH = "~/ZQLearn/ZQlearn.json"
//     }
// }
// OSnow();


type Schema = {
    cards: Card[]
}

const initData: Schema = {
    cards: []
}

const adapter = new JSONFile<Schema>(DB_PATH)
const db = new Low<Schema>(adapter, initData)
await db.read()

export default db