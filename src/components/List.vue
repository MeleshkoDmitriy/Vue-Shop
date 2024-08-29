<script setup>
import { onMounted, ref } from "vue";
import Product from "./Product.vue"
import { api } from "../../api";
import axios from "axios";

const products = ref([]);

onMounted(async() => {
  try {
    const { data } = await axios.get(`${api}/products`)
    products.value = data;
    console.log(products.value);
  } catch (error) {
    console.error(error);
  }
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}
</style>