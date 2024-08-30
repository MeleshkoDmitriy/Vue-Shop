<script setup>
import { useProductsStore } from '@/store/store'
import ProductList from '../components/ProductList.vue'

const productsStore = useProductsStore()
</script>

<template>
  <h2 class="title">Favorites</h2>
  <ProductList :products="productsStore.favorites" />
</template>

<style scoped>
.title {
  color: var(--color-vue-green);
  text-transform: uppercase;
  font-size: 22px;
  padding: 20px 40px;
}
</style>