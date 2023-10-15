<script setup lang="ts">
import { ref } from 'vue';
import { Card } from '../service/types';
import { getAllFirstClass, getAllSecondClass, getAllThridClass, getCardByFilter } from '../service/dbService'
import { onMounted } from 'vue';


class SelectorItemListMapType {
    public firstClassSelectorList: string[]
    public secondClassSelectorList: string[]
    public thridClassSelectorList: string[]
    constructor(firstClassSelectorList: string[], secondClassSelectorList: string[], thridClassSelectorList: string[]) {
        this.firstClassSelectorList = firstClassSelectorList
        this.secondClassSelectorList = secondClassSelectorList
        this.thridClassSelectorList = thridClassSelectorList
    }
}

class SelectorMap {
    public firstClassSelector: string
    public secondClassSelector: string
    public thridClassSelector: string
    public isFamiliar: string
    constructor(firstClassSelector: string, secondClassSelector: string, thridClassSelector: string, isFamiliar: string) {
        this.firstClassSelector = firstClassSelector
        this.secondClassSelector = secondClassSelector
        this.thridClassSelector = thridClassSelector
        this.isFamiliar = isFamiliar
    }
}

const selectorItemListMap = ref<SelectorItemListMapType>(new SelectorItemListMapType([], [], []))
const selectorMap = ref<SelectorMap>(new SelectorMap("全部", "全部", "全部", "all"))
const resultList = ref<Card[]>()

const emit = defineEmits(['listChange', "nextCard"])

onMounted(() => {
    refresh()
})

function refresh() {
    // 获取一级选项列表
    const fist = getAllFirstClass()
    fist.unshift("全部")
    selectorItemListMap.value.firstClassSelectorList = fist
    console.log("1级选项:" + fist.length)

    const seconde = getAllSecondClass(selectorMap.value.firstClassSelector)
    seconde.unshift("全部")
    selectorItemListMap.value.secondClassSelectorList = seconde
    console.log("2级选项:" + seconde.length)

    const third = getAllThridClass(selectorMap.value.firstClassSelector, selectorMap.value.secondClassSelector)
    third.unshift("全部")
    selectorItemListMap.value.thridClassSelectorList = third
    console.log("3级选项:" + third.length)

    resultList.value = getCardByFilter(selectorMap.value.firstClassSelector, selectorMap.value.secondClassSelector, selectorMap.value.thridClassSelector, selectorMap.value.isFamiliar)

    emit('listChange', resultList.value)
    emit('nextCard')
}
</script>


<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-select style="font-weight: bolder;" variant="outlined" density="compact"
                    v-model="selectorMap.firstClassSelector" label="一级选项"
                    :items="selectorItemListMap.firstClassSelectorList"
                    @update:model-value="refresh(), selectorMap.secondClassSelector = '全部', selectorMap.thridClassSelector = '全部'"></v-select>
            </v-col>
            <v-col cols="3">
                <v-select style="font-weight: bolder;" variant="outlined" density="compact"
                    v-model="selectorMap.secondClassSelector" label="二级选项"
                    :items="selectorItemListMap.secondClassSelectorList"
                    @update:model-value="refresh(), selectorMap.thridClassSelector = '全部'"></v-select>
            </v-col>
            <v-col cols="3">
                <v-select style="font-weight: bolder;" variant="outlined" density="compact"
                    v-model="selectorMap.thridClassSelector" label="三级选项"
                    :items="selectorItemListMap.thridClassSelectorList" @update:model-value="refresh()"></v-select>
            </v-col>
            <v-col cols="3">
                <v-radio-group style="font-weight: bolder;" v-model:model-value="selectorMap.isFamiliar"
                    @update:model-value="refresh()">
                    <v-radio label="全部" value="all"></v-radio>
                    <v-radio label="不熟悉" value="unFamiliar"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
