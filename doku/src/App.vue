<script setup lang="ts">
  import Header from "./components/Header.vue"
  import { RouterView} from 'vue-router'
</script>

<template>
  <div>
    <Header></Header>
    <RouterView></RouterView>
  </div>

</template>

<style scoped>
  body {
    display: flex;
    align-items: center;
  }
</style>
