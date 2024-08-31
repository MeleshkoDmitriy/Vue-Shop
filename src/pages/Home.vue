<script setup>
import { useProductsStore } from '@/store/store'
import ProductList from '../components/ProductList.vue'
import { provide } from 'vue'

const productsStore = useProductsStore()
</script>

<template>
  <ProductList  :products="productsStore.products" />
</template>

<style scoped></style>
