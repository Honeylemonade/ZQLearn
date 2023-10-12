<script setup lang="ts">
import { ref } from 'vue';
import { Card } from '../service/types';
import { getAllFirstClass, getAllSecondClass, getAllThridClass, getCardByFilter } from '../service/dbService'

const firstClass = ref("全部")
const secondClass = ref("全部")
const thirdClass = ref("全部")
const isFamiliar = ref("all")

const resultList = ref<Card[]>()

const emit = defineEmits(['listChange'])

function getFirstClassSelectorList(): string[] {
    const res = getAllFirstClass()
    res.unshift("全部")
    refreshResultList()
    return res
}
function getSecondClassSelectorList(): string[] {
    const res = getAllSecondClass(firstClass.value)
    res.unshift("全部")
    refreshResultList()
    return res
}
function getThridClassSelectorList(): string[] {
    const res = getAllThridClass(firstClass.value, secondClass.value)
    res.unshift("全部")
    refreshResultList()
    return res
}


function refreshResultList() {
    resultList.value = getCardByFilter(firstClass.value, secondClass.value, thirdClass.value, isFamiliar.value)

    emit('listChange', resultList.value)
}

</script>


<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-select v-model="firstClass" label="一级选项" :items="getFirstClassSelectorList()"
                    @update:model-value="secondClass = '全部', thirdClass = '全部'"></v-select>
            </v-col>
            <v-col cols="3">
                <v-select v-model="secondClass" label="二级选项" :items="getSecondClassSelectorList()"
                    @update:model-value="thirdClass = '全部'"></v-select>
            </v-col>
            <v-col cols="3">
                <v-select v-model="thirdClass" label="三级选项" :items="getThridClassSelectorList()"></v-select>
            </v-col>

            <v-col cols="3">
                <v-radio-group v-model:model-value="isFamiliar">
                    <v-radio label="全部" value="all"></v-radio>
                    <v-radio label="不熟悉" value="unFamiliar"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
