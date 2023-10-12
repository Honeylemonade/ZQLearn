<script setup lang="ts">
import { Card } from '../service/types'

const props = defineProps({
    card: {
        type: Card,
        default: "空"
    }
})


</script>

<template>
    <!-- // TODO 卡片显示位置优化 -->
    <v-card style="width: 600px;">
        <v-breadcrumbs :items="[card.firstClass, card.secondClass, card.thirdClass]"></v-breadcrumbs>
        <v-card-text class="card-text">
            <div>
                <v-btn style=" margin: auto;" variant="text" icon="mdi-star" color="yellow"></v-btn>
                <span class="text-h5" style="font-weight: bolder;margin: auto;">
                    {{ card.cardTitle }}
                </span>
            </div>


            <div style="padding: 10px 0px ;">
                <v-divider thickness="1.5"></v-divider>
            </div>

            <v-textarea v-model="card.description" label="答案"></v-textarea>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="4">
                    <v-btn block rounded="xl" size="x-large">过</v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-btn block rounded="xl" size="x-large">不熟</v-btn>
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
