<script setup lang="ts">
import { ref } from 'vue';
import CardSelector from './CardSelector.vue'
import { Card } from '../service/types';
import CardView from './CardView.vue'

const resultList = ref<Card[]>()
</script>


<template>
    <div style="width: 100%;">
        <CardSelector @list-change="(list) => resultList = list"></CardSelector>
    </div>
    <div>

        <div style="padding-bottom: 20px;" v-for="item in resultList">
            <CardView :myCard="item"></CardView>
        </div>


        <!-- <v-virtual-scroll :items="resultList">
            <template v-slot:default="{ item }">
                <div style="padding: 10px 10px;">
                    <CardView :myCard="item"></CardView>
                </div>
            </template>
        </v-virtual-scroll> -->
    </div>
</template>

<style scoped></style>
