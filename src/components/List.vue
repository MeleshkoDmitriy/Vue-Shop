<script setup>
import Product from "./Product.vue"

defineProps({
  products: Array
})

</script>

<template>
  <section class="list">
    <Product 
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
  </section>
</template>

<style scoped>
.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 0 40px 20px 40px;
}
</style>