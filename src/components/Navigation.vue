<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const value = ref(0)
</script>


<template>
    <v-layout class="overflow-visible" style="height: 56px;">
        <v-bottom-navigation v-model="value" color="teal" grow>
            <v-btn @click='router.push("/RandomView")'>
                <v-icon>mdi-history</v-icon>
                随机抽取
            </v-btn>
            <v-btn @click='router.push("/ListView")'>
                <v-icon>mdi-heart</v-icon>
                卡片列表
            </v-btn>
        </v-bottom-navigation>
    </v-layout>
</template>

<style scoped></style>
