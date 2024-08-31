<script setup>
import { useProductsStore } from '@/store/store'
import ProductList from '../components/ProductList.vue'
import InformationBlock from '@/components/InformationBlock.vue';

const productsStore = useProductsStore()
</script>

<template>
  <h2 class="title">Favorites</h2>
  <ProductList v-if="productsStore.favoritesLength > 0" :products="productsStore.favorites" />
  <InformationBlock
    v-else
    img="/public/heart.svg"
    title="No favorite products!"
    text="Add any clothing you like to the favorites and make your order"
  />
</template>

<style scoped>
.title {
  color: var(--color-vue-green);
  text-transform: uppercase;
  font-size: 22px;
  padding: 20px 40px;
}
</style>