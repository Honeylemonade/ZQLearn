<script setup lang="ts">
import Navigation from "./components/Navigation.vue"
import { } from './service/dbUtils'
</script>

<template>
  <v-row no-gutters justify="center">
    <router-view></router-view>
  </v-row>
  <Navigation></Navigation>
</template>

<style scoped>
.v-container {
  padding: 0;
  margin: 0;
}
</style>
