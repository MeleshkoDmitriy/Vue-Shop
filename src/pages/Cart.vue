<script setup>
import { useProductsStore } from '@/store/store'
import CartList from '../components/CartList.vue'
import InformationBlock from '../components/InformationBlock.vue'

const productsStore = useProductsStore()
</script>

<template>
  <CartList
    v-if="productsStore.cartProductsLength > 0"
    :products="productsStore.products.filter(pr => pr.isAdded === true)"
  />

  <InformationBlock
    v-else
    img="https://i.ibb.co/NmMtNn9/cart.png"
    title="Cart is empty!"
    text="Add any clothing you like to the cart and make your order"
  />
</template>

<style scoped>
</style>
