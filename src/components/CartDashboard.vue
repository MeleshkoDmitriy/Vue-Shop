<script setup>
import { useProductsStore } from '@/store/store'

const productsStore = useProductsStore()
</script>

<template>
  <section class="wrapperDashboard">
    <h2 class="title">Dashboard</h2>
    <p class="price">
      Total price: <strong>{{ productsStore.cartProductsPrice }} $</strong>
    </p>
    <button class="btn"><b>Make order</b></button>
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
.btn {
  outline: none;
  border: 2px solid var(--color-vue-green);
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #fff;
  color: var(--color-vue-green);
  text-transform: uppercase;
}
.btn:hover {
  transform: translateY(-3px);
  background-color: var(--color-vue-green);
  color: #fff;
  border: 2px solid #fff;
}
</style>
