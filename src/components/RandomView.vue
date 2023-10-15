<script setup lang="ts">
import CardSelector from './CardSelector.vue'
import { Card } from '../service/types';
import { ref, onMounted } from 'vue';
import CardView from './CardView.vue'

const resultList = ref<Card[]>()
const card = ref<Card>()


function getRandomCard(desCard: string) {
    if (resultList.value == undefined) {
        console.log("通关了")
        card.value = new Card("通关卡片", "通关卡片", "通关卡片", "通关卡片", "通关卡片！", true, true, "💐💐💐恭喜你朱青！这部分内容已掌握的炉火纯青！")
    } else {
        console.log(resultList.value.length)
        console.log(desCard)
        resultList.value = resultList.value.filter(e => e.id != desCard)
        console.log(resultList.value.length)

        const len = resultList.value.length
        const randomIndex = Math.floor(Math.random() * len)
        card.value = resultList.value[randomIndex]
    }
}
onMounted(() => {
    getRandomCard("0")
})
</script>


<template>
    <div style="width: 100%;">
        <CardSelector @next-card="() => getRandomCard('0')" @list-change="(list) => resultList = list"></CardSelector>
    </div>

    <div>
        <CardView @next-card="(id) => getRandomCard(id)" :myCard="card"></CardView>
    </div>
</template>

<style scoped></style>
