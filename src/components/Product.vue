<script setup>
import { useProductsStore } from '@/store/store'

const props = defineProps({
  id: Number,
  title: String,
  category: String,
  price: Number,
  imgUrl: String,
  sex: String,
  isFavorite: Boolean,
  isAdded: Boolean
})

const productsStore = useProductsStore()

const onFavoriteClick = () => {
  productsStore.onFavoriteToggle(props.id, props.isFavorite)
}

const onAddClick = () => {
  productsStore.onAddedToggle(props.id, props.isAdded)
}
</script>

<template>
  <router-link :to="`/product/${id}`">
    <div class="card">
      <div class="image">
        <img :src="imgUrl" alt="product" />
      </div>
      <h3 class="title">{{ title }}</h3>
      <span class="category">{{ category }}</span>
      <span class="price"
        >Price: <b>{{ price }} $</b></span
      >
      <div class="buttons">
        <img
          @click.prevent="onFavoriteClick"
          :src="
            isFavorite
              ? 'https://i.ibb.co/sWm7MWT/like-2.png'
              : 'https://i.ibb.co/fdQtLvN/like-1.png'
          "
          alt="isFavorite"
        />
        <img
          @click.prevent="onAddClick"
          :src="
            isAdded 
            ? 'https://i.ibb.co/4TTVD7q/checked.png' 
            : 'https://i.ibb.co/9GyM9kd/plus.png'
          "
          alt="isCart"
        />
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.card {
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: 0.25s;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0px 5px var(--bg-color);
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 5px 5px var(--color-vue-green);
}
.image {
  max-width: 300px;
  max-height: 450px;
  overflow: hidden;
  border-radius: 5px;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.category {
  color: var(--color-vue-green);
}
.buttons {
  display: flex;
  gap: 20px;
}
</style>
