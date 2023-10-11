<script setup lang="ts">
import { ref, watch } from 'vue';
import { Word } from '../../service/types';
import { addWord } from '../../service/dbService'
import translate, { TranslateResult } from '../../service/translate'


const translateResult = ref<TranslateResult>()
const props = defineProps({
    text: {
        type: String,
        default: "空"
    },
    x: Number,
    y: Number
})
const show = ref(false)
watch(() => props.text, newProps => {
    translate(newProps).then(e => {
        translateResult.value = e
        show.value = true
    })
})


function addNewWord() {
    let res = translateResult.value
    if (res) {
        addWord(new Word(res.content, res.explains, []))
    }
}


</script>

<template>
    <!-- // TODO 卡片显示位置优化 -->
    <v-card v-if="show" @mouseleave="show = false" :style="{
        'position': 'fixed',
        'left': props.x + 'px',
        'top': props.y + 'px'
    }">
        <v-card-text class="card-text">
            <span class="text-h4" style="font-weight: bolder;">
                {{ translateResult?.content }}
            </span>
            <v-btn @click="addNewWord()" variant="text" icon="mdi-star" color="yellow"></v-btn>
            <div style="padding: 10px 0px ;">
                <v-divider thickness="1.5"></v-divider>
            </div>

            <span style="font-weight: bold;">基本含义:</span>
            <div style="color: rgb(41, 41, 41);" v-for="item in translateResult?.explains">
                <li>{{ item }}</li>
            </div>
            <br>
            <span style="color: gray;">网络解释:</span>
            <span v-for="item in translateResult?.translation"><br> {{ item }}</span>
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
