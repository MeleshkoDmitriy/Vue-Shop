<script setup>
import { inject } from 'vue'
import CartProduct from '../components/CartProduct.vue'
import { useProductsStore } from '@/store/store'

const productsStore = useProductsStore()
const { onDrawerToggle } = inject('togglers')
</script>

<template>
  <div class="container">
    <div class="title">
      <img @click="onDrawerToggle" class="arrow" src="/public/arrow-right.svg" alt="icon back" />
      <h2>Shopping Cart</h2>
    </div>

    <div class="products">
      <CartProduct
        v-for="cProd in productsStore.cartProducts"
        v-bind:key="cProd.id"
        :title="cProd.title"
        :img="cProd.imgUrl"
        :price="cProd.price"
      />
    </div>

    <div class="result">
      <span class="total">Total price: 123 $</span>
      <button class="buy">Buy</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
}
.arrow {
  transform: rotate(180deg);
  height: 20px;
  justify-self: start;
  cursor: pointer;
}
.products {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.result {
  margin-top: auto;
  width: 100%;
  background-color: var(--bg-color);
  padding: 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.buy {
  width: 100%;
  padding: 20px;
  background-color: rgb(6, 190, 6);
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
}
</style>
