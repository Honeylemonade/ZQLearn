<script setup lang="ts">
import { Card } from '../service/types'
import { updateCardDescription } from '../service/dbService'

const props = defineProps({
    card: {
        type: Card,
        default: "空"
    }
})
function color() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
}
</script>

<template>
    <!-- variant="tonal" :color="color()" -->
    <v-card style="width: 600px;">
        <v-breadcrumbs :items="[card.firstClass, card.secondClass, card.thirdClass]"></v-breadcrumbs>
        <v-card-text class="card-text">
            <div>
                <v-btn v-if="card.isStar" style=" margin: auto;" variant="text" icon="mdi-star" color="yellow"
                    @click="card.isStar = false, updateCardDescription(card)"></v-btn>
                <v-btn v-if="!card.isStar" style=" margin: auto;" variant="text" icon="mdi-star" color="grey"
                    @click="card.isStar = true, updateCardDescription(card)"></v-btn>
                <span class="text-h5" style="font-weight: bolder;margin: auto;">
                    {{ card.cardTitle }}
                </span>
            </div>


            <div style="padding: 10px 0px ;">
                <v-divider thickness="1.5"></v-divider>
            </div>

            <v-textarea variant="outlined" v-model="card.description" label="答案"
                @update:model-value="updateCardDescription(card)"></v-textarea>
            <v-row justify="center">
                <v-col cols="4">
                    <v-btn color="green" block rounded="xl" size="x-large">过</v-btn>
                </v-col>
                <v-col cols="4">
                    <v-btn color="red" block rounded="xl" size="x-large">不熟</v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<style scoped>
.card-text {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* .v-card {
    font-size: 20px;
} */
</style>
