<script setup>
import InformationBlock from '@/components/InformationBlock.vue'
import Button from '../components/Button.vue'
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '../../api'
import { useProductsStore } from '@/store/store'

const productsStore = useProductsStore()
const router = useRouter()
const route = useRoute()
const product = reactive({})
const { id } = route.params

const goBack = () => {
  router.back()
}
console.log(route.path)
const fetchProductById = async (productId) => {
  try {
    const { data } = await axios.get(`${api}/products/${productId}`)
    Object.assign(product, data)
    return data
  } catch (error) {
    console.error(error)
  }
}

const onFavoriteClick = () => {
  productsStore.onFavoriteToggle(product.id, product.isFavorite)
}

const onAddClick = () => {
  productsStore.onAddedToggle(product.id, product.isAdded)
}

onMounted(async () => {
  await fetchProductById(id)
})
</script>

<template>
  <section class="wrapper">
    <section class="product" v-if="product.id">
      <div class="image">
        <img :src="product.imgUrl" alt="Product image" />
      </div>
      <div class="body">
        <h2 class="title">{{ product.title }}</h2>
        <p class="category">{{ product.category }}</p>
        <p class="price">
          Price: <b>{{ product.price }}</b> $
        </p>
        <p class="sex">Sex: <span>{{ product.sex }}</span></p>
        <div class="buttons">
          <img
            @click.prevent="onFavoriteClick"
            :src="
              product.isFavorite
                ? 'https://i.ibb.co/sWm7MWT/like-2.png'
                : 'https://i.ibb.co/fdQtLvN/like-1.png'
            "
            alt="isFavorite"
          />
          <img
            @click.prevent="onAddClick"
            :src="
              product.isAdded ? 'https://i.ibb.co/4TTVD7q/checked.png' : 'https://i.ibb.co/9GyM9kd/plus.png'
            "
            alt="isCart"
          />
        </div>
      </div>
    </section>
    <information-block
      v-else
      title="This product doesn't exist!"
      text="Try to find the product in catalog"
    >
      <Button text="Go back" @click="goBack" />
    </information-block>
  </section>
</template>

<style scoped>
.product {
  padding: 0 40px 40px 40px;
  display: flex;
  gap: 40px;
}
.image {
  width: 300px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.body {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.title {
  color: var(--color-vue-green);
}
.sex span{
  text-transform: uppercase;
}
.buttons {
  display: flex;
  gap: 40px;
}
.buttons img {
  cursor: pointer;
}
</style>
