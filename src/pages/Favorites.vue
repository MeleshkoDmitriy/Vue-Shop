<script setup>
import { useProductsStore } from '@/store/store'
import ProductList from '../components/ProductList.vue'
import InformationBlock from '@/components/InformationBlock.vue'

const productsStore = useProductsStore()
</script>

<template>
  <ProductList
    v-if="productsStore.favoritesLength > 0"
    :products="productsStore.products.filter(pr => pr.isFavorite === true)"
  />
  <InformationBlock
    v-else
    img="https://i.ibb.co/5BwDRGq/heart.png"
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
