<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>


<template>
    <div>
        <!-- <div class="drager" style="height: 50px;"></div> -->
        <div class="sideBar">
            <v-list-item link title="文章库" @click='router.push("/Articles")'>
                <template v-slot:prepend>
                    <v-icon icon="mdi-note-text-outline"></v-icon>
                </template>
            </v-list-item>
            <v-list-item link title="单词本" @click='router.push("/Words")'>
                <template v-slot:prepend>
                    <v-icon icon="mdi-book-outline"></v-icon>
                </template>
            </v-list-item>
        </div>
    </div>
</template>

<style scoped>
.sideBar {
    background-color: #232527;
    color: aliceblue;
    margin: 0 auto;
    padding: 0px 0px;
    text-align: center;
}

.drager {
    -webkit-app-region: drag;
}
</style>
