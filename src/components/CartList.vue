<script setup>
import CartProduct from './CartProduct.vue'
import CartDashboard from './CartDashboard.vue'
defineProps({
  products: Array
})
</script>

<template>
  <section class="wrapper">
    <div class="list" v-auto-animate>
      <CartProduct
        v-for="product in products"
        v-bind:key="product.id"
        :id="product.id"
        :title="product.title"
        :category="product.category"
        :imgUrl="product.imgUrl"
        :sex="product.sex"
        :price="product.price"
        :isFavorite="product.isFavorite"
        :isAdded="product.isAdded"
      />
    </div>
    <div class="dashboard">
      <CartDashboard />
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  padding: 0 40px 20px 40px;
}
.list {
  flex-basis: 70%;
}
.dashboard {
  flex-basis: 30%;
  padding: 20px;
  box-shadow: 0 0px 5px var(--bg-color);
  border-radius: 20px;
  background-color: var(--color-vue-green);
}
</style>
