<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getArticles, addArticle, deleteArticleById } from '../../service/dbService'
import moment from 'moment'
import bus from '../../service/bus'
import { Article } from '../../service/types';

const articles = ref(getArticles())
const currentArticleId = ref(articles.value[0].id)
const showList = ref(true)

const tempArticle = ref<Article>(new Article("", ""))

// 用于显示view
onMounted(() => {
    changeArticleCard(articles.value[0].id)
})

function changeArticleCard(id: string) {
    currentArticleId.value = id
    bus.emit('ArticleChanged', id);
}

function addNewArticle() {
    addArticle(new Article(tempArticle.value.title, tempArticle.value.content))
    tempArticle.value.title = ""
    tempArticle.value.content = ""
    changeArticleCard(articles.value[0].id)
    refreshList()
}

function deleteArticle(id: string) {
    deleteArticleById(id)
    refreshList()
}

function refreshList() {
    articles.value = getArticles()
    showList.value = false
    showList.value = true
}

</script>

<template>
    <div style="border-style: solid; border: 2px; border-color: darkgrey;">
        <div class="toolBar">
            <v-btn size="small" icon="mdi-sort" variant="plain"></v-btn>
            <v-dialog style="width: 70%;">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" size="small" icon="mdi-note-edit-outline" variant="plain"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card title="添加文章" style="padding: 0 20px;">
                        <v-text-field v-model="tempArticle.title" label="请输入标题" variant="underlined"></v-text-field>
                        <v-textarea v-model="tempArticle.content" label="请输入正文" variant="underlined"></v-textarea>
                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn text="确认" @click="isActive.value = false, addNewArticle()"></v-btn>
                            <v-btn text="取消" @click="isActive.value = false"></v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>


            <v-btn size="small" icon="mdi-magnify" variant="plain"></v-btn>
        </div>
        <v-virtual-scroll :items="['1']">
            <template v-if="showList">
                <div v-for="item in articles">
                    <v-card-item :class="item.id == currentArticleId ? 'selectCard' : ''"
                        @click="changeArticleCard(item.id)">
                        <div class="title">{{ item.title }}</div>
                        <v-card-subtitle>{{ moment(item.createTime).format('YYYY/MM/DD') }}</v-card-subtitle>
                        <v-btn @click="deleteArticle(item.id)" size="small" icon="mdi-trash-can-outline"
                            variant="plain"></v-btn>
                    </v-card-item>
                    <v-divider style=" padding: 0px 0px;"></v-divider>
                </div>
            </template>
        </v-virtual-scroll>
    </div>
</template>

<style scoped>
.v-card-item {
    border-radius: 5px;
    margin: 5px;
}

.selectCard {
    background-color: #eff1f2;
    background: linear-gradient(to right,
            #3e75c5 5px,
            #eff1f2 5px);
}

.v-virtual-scroll {
    height: 90vh;
}

.title {
    font-weight: 700;
    font-family: 'Times New Roman', Times, serif;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    word-break: normal;
    word-wrap: break-word;
}

.v-container {
    padding: 0;
    margin: 0;
}
</style>
../service/dbService