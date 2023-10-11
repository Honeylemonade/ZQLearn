<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { addWord, getWords, deleteWordByWord } from '../../service/dbService'
import { Word } from '../../service/types';


const words = ref()
const showList = ref(true)
const tempWord = ref<Word>(new Word("", [], []))

onMounted(() => {
    words.value = getWords()
})

function addNewWord() {
    addWord(new Word(tempWord.value.word, tempWord.value.descrptions, tempWord.value.sentences))
    tempWord.value.word = ""
    tempWord.value.descrptions = []
    tempWord.value.sentences = []
    refresh()
}

function deleteWord(word: string) {
    deleteWordByWord(word)
    refresh()
}


function refresh() {
    words.value = getWords()
    showList.value = false
    showList.value = true
}

</script>

<template>
    <div style="padding: 0px 10px;">
        <span>所有单词 / </span>
        <span>排序 / </span>

        <v-dialog style="width: 50%;">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" size="small" icon="mdi-plus" variant="plain"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="添加单词" style="padding: 0 20px;">
                    <v-text-field v-model="tempWord.word" label="请输入单词" variant="underlined"></v-text-field>
                    <v-text-field v-model="tempWord.descrptions[0]" label="请输入描述" variant="underlined"></v-text-field>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="确认" @click='addNewWord(), isActive.value = false'></v-btn>
                        <v-btn text="取消" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </div>
    <div style="padding: 10px 0px ;">
        <v-divider></v-divider>
    </div>

    <v-table>
        <tbody style="width: 100%;">
            <template v-if="showList">
                <tr v-for="(item, index) in words" :key="index">
                    <td style="font-size: small;color: grey;"> {{ index + 1 }}</td>
                    <td style="font-weight: bold;">{{ item.word }}</td>
                    <td style="font-size: small;color: rgb(60, 60, 60);">
                        <div class="description" v-for="description in item.descrptions">
                            {{ description }}
                        </div>
                    </td>
                    <td>
                        <v-btn color="error" size="small" icon="mdi-delete" variant="plain"
                            @click="deleteWord(item.word)"></v-btn>
                    </td>
                </tr>
            </template>
        </tbody>
    </v-table>
</template>

<style scoped>
/* .description {
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    word-break: normal;
    word-wrap: break-word;
    white-space: nowrap;
} */
</style>
