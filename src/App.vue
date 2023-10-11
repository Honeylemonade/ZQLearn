<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue"
import { } from './service/dbUtils'
</script>

<template>
    <v-row no-gutters justify="center">
      <v-col cols="2" style="background-color: #232527;height:100vh;">
        <Sidebar></Sidebar>
      </v-col>
      <v-col cols="10">
        <router-view></router-view>
      </v-col>
    </v-row>
</template>

<style scoped>
.v-container {
  padding: 0;
  margin: 0;
}
</style>
