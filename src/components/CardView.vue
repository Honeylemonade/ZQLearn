<script setup lang="ts">
import { Card } from '../service/types'
import { updateCardDescription } from '../service/dbService'

const props = defineProps({
    myCard: {
        type: Card,
        default: new Card("💐通关卡片", "💐通关卡片", "💐通关卡片", "💐通关卡片", "💐💐💐通关卡片！", true, true, "恭喜你朱青💐💐💐！这部分内容已掌握的炉火纯青！")
    }
})

const emit = defineEmits(['nextCard'])
function color() {
    const r = Math.floor(125 + Math.random() * 50);
    const g = Math.floor(125 + Math.random() * 50);
    const b = Math.floor(125 + Math.random() * 50);
    return 'backgroud-color:rgba(' + r + ',' + g + ',' + b + ',0.8)';
}
</script>

<template>
    <!-- variant="tonal" :color="color()" -->
    <v-card style="width: 600px;">
        <v-breadcrumbs :items="[props.myCard.firstClass, myCard.secondClass, myCard.thirdClass]">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>

        </v-breadcrumbs>
        <v-card-text class="card-text">
            <div :style="color()">
                <div>
                    <v-btn v-if="myCard.isStar" class="star" variant="text" icon="mdi-star" color="yellow"
                        @click="myCard.isStar = false, updateCardDescription(myCard)"></v-btn>
                    <v-btn v-if="!myCard.isStar" class="star" variant="text" icon="mdi-star" color="grey"
                        @click="myCard.isStar = true, updateCardDescription(myCard)"></v-btn>
                    <span class="text-h5" style="font-weight: bolder;margin: auto;">
                        {{ myCard.cardTitle }}
                    </span>
                </div>

            </div>
            <div style="color: green;" v-if="myCard.isFamiliar">
                熟悉
            </div>
            <div style="color: red;" v-if="!myCard.isFamiliar">
                不熟悉
            </div>
            <div style="padding: 10px 0px ;">
                <v-divider thickness="1.5"></v-divider>
            </div>

            <v-textarea :rows="10" class="description" variant="outlined" v-model="myCard.description" label="答案"
                @update:model-value="updateCardDescription(myCard)"></v-textarea>
            <v-row justify="center">
                <v-col cols="4">
                    <v-btn color="green" block rounded="xl" size="x-large"
                        @click="myCard.isFamiliar = true, updateCardDescription(myCard), emit('nextCard', myCard.id)">
                        <v-icon start icon="mdi-check"></v-icon>熟悉</v-btn>
                </v-col>
                <v-col cols="4">
                    <v-btn color="red" block rounded="xl" size="x-large"
                        @click="myCard.isFamiliar = false, updateCardDescription(myCard), emit('nextCard')">
                        <v-icon start icon="mdi-close"></v-icon>不熟悉</v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<style scoped>
.card-text {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.description {
    color:rgba(255,255,255,0.0);
    background: url(../assets/a3.png) center 0 no-repeat;
    background-size:300px;
}

.description:hover {
    color: black;
    background:none
}

.star {
    margin-bottom: 9px;
}

/* .v-card {
    font-size: 20px;
} */
</style>
