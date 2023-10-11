import { createRouter, createWebHashHistory } from 'vue-router'

import Articles from './components/articles/Articles.vue'
import Words from './components/words/Words.vue'

const routes = [
    {
        path: '/Articles', component: Articles
    },
    {
        path: '/Words', component: Words
    },
    {
        path: '/', component: Articles
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})