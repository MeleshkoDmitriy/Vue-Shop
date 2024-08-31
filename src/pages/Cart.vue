<script setup>
import { useProductsStore } from '@/store/store'
import ProductList from '../components/ProductList.vue'
import InformationBlock from '../components/InformationBlock.vue'

const productsStore = useProductsStore()
</script>

<template>
  <h2 class="title">cart</h2>
  <ProductList v-if="productsStore.cartProductsLength > 0" :products="productsStore.cartProducts" />
  <InformationBlock
    v-else
    img="/public/cart.svg"
    title="Cart is empty!"
    text="Add any clothing you like to the cart and make your order"
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
