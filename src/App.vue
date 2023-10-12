<script setup lang="ts">
import Navigation from "./components/Navigation.vue"
import { } from './service/dbUtils'
</script>

<template>
  <div style="max-width: 600px;margin: 0 auto;">
    <v-row no-gutters justify="center">
      <router-view></router-view>
    </v-row>
    <Navigation></Navigation>
  </div>
</template>

<style scoped>
.v-container {
  padding: 0;
  margin: 0;
}
</style>
