import { createRouter, createWebHashHistory } from 'vue-router'

import ListView from './components/ListView.vue'
import RandomView from './components/RandomView.vue'

const routes = [
    {
        path: '/ListView', component: ListView
    },
    {
        path: '/RandomView', component: RandomView
    },
    {
        path: '/', component: RandomView
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})