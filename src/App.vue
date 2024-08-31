<script setup>
import Header from '../src/components/Header.vue'

import { ref, provide } from 'vue'


const isDrawerOpen = ref(false)

const onDrawerToggle = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

provide('togglers', {
  onDrawerToggle
})
provide('drawer', isDrawerOpen)
</script>

<template>
  <Drawer v-if="isDrawerOpen" />
  <div class="wrapperApp">
    <div class="container">
      <Header @on-drawer-toggle="onDrawerToggle" />

      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped>
.wrapperApp {
  padding: 20px 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
}
.container {
  max-width: 70%;
  width: 100%;
  margin: 0 auto;
  padding-right: var(--scrollbar-width);
  background-color: #fff;
  border-radius: 20px;
}
.main {
}
</style>
