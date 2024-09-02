<script setup>
import { useProductsStore } from '@/store/store'
import Button from '../components/Button.vue'

const productsStore = useProductsStore()
</script>

<template>
  <section class="wrapperDashboard">
    <h2 class="title">Dashboard</h2>
    <p class="price">
      Total price: <strong>{{ productsStore.cartProductsPrice }} $</strong>
    </p>
    <Button text="Make order"/>
  </section>
</template>

<style scoped>
.wrapperDashboard {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--color-vue-green);
}
.title {
  text-transform: uppercase;
}
.title,
.price {
  color: #fff;
}
</style>
