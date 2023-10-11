import axios from "axios";
import sha256 from 'crypto-js/sha256';

const APP_KEY = "549657b00cabff2e"
const APP_SECRET = "qV5Te20olwOJcF5EfMKdZ2LhgivzUhzc"

export class TranslateResult {
    public content: string
    public isWordOrPhrase: boolean
    // 单词/短语 翻译使用该字段
    public explains: string[]
    // 句子翻译使用该字段
    public translation: string[]
    constructor(content: string, isWordOrPhrase: boolean, explains: string[], translation: string[]) {
        this.content = content
        this.isWordOrPhrase = isWordOrPhrase
        this.explains = explains
        this.translation = translation
    }
}

export default function translate(englishContent: string): Promise<TranslateResult> {
    const curtime = String(Math.trunc(new Date().getTime() / 1000))
    const salt = curtime

    let formData = new FormData();
    formData.append("q", englishContent);
    formData.append("from", "English");
    formData.append("to", "Chinese");
    formData.append("appKey", APP_KEY);
    formData.append("salt", salt);
    formData.append("sign", calculateSign(APP_KEY, englishContent, salt, curtime, APP_SECRET));
    formData.append("signType", "v3");
    formData.append("curtime", curtime);

    return axios.post("/youdao/api", formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(resp => {
        const data = resp.data
        // console.log(data)
        // error code 为0 表示正常
        if (data.errorCode === "0") {
            if (data.isWord) {
                return new TranslateResult(data.query, data.isWord, data.basic.explains, data.translation)
            } else {
                return new TranslateResult(data.query, data.isWord, [], data.translation)
            }
        } else {
            console.log(resp)
            throw "接口联通，但翻译失效"
        }
    }).catch(error => {
        console.error(error)
        throw "翻译功能失效"
    })
}

function calculateSign(appKey: string, englishContent: string, salt: string, curtime: string, appSecret: string): string {
    // sha256(应用ID+input+salt+curtime+应用密钥)
    let input
    const length = englishContent.length
    if (length > 20) {
        input = englishContent.substring(0, 10) + length + englishContent.substring(length - 10, length)
    } else {
        input = englishContent
    }

    return sha256(appKey + input + salt + curtime + appSecret).toString()
}