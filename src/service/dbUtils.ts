import { Card } from './types'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// TODO 提取环境变量
const DB_PATH = "./ZQlearn.json"

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