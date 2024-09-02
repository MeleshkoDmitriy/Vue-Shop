<script setup lang="ts">
import InformationBlock from '@/components/InformationBlock.vue'
import Button from '../components/Button.vue'
import { useRouter } from 'vue-router'

const route = useRouter()

const goBack = () => {
  route.back()
}
</script>

<template>
  <section class="wrapper">
    <information-block title="404" text="This page is not found!">
      <Button text="Go back" @click="goBack" />
    </information-block>
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>