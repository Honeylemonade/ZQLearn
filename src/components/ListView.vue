<script setup lang="ts">
import { ref } from 'vue';
import CardSelector from './CardSelector.vue'
import { Card } from '../service/types';
import CardView from './CardView.vue'

const resultList = ref<Card[]>()
</script>


<template>
    <div style="width: 100%;height: 100px;">
        <CardSelector @list-change="(list) => resultList = list"></CardSelector>
    </div>
    <div>

        <v-virtual-scroll height="80vh" :items="resultList">
            <template v-slot:default="{ item }">
                <div style="padding: 10px 10px;">
                    <CardView :myCard="item"></CardView>
                </div>
            </template>
        </v-virtual-scroll>
    </div>
</template>

<style scoped></style>
