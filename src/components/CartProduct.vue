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
  <div class="card">
    <div class="image">
      <img :src="imgUrl" alt="product" />
    </div>
    <h3 class="title">{{ title }}</h3>
    <span class="category">{{ category }}</span>
    <span class="price"
      >Price: <b>{{ price }} $</b></span
    >
    <div class="fav">
      <img
        @click="onFavoriteClick"
        :src="
          isFavorite ? 'https://i.ibb.co/sWm7MWT/like-2.png' : 'https://i.ibb.co/fdQtLvN/like-1.png'
        "
        alt="isFavorite"
      />
    </div>
    <img class="remove" @click="onAddClick" src="/public/close.svg" alt="remove">
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  padding: 20px;
  box-shadow: 0 0px 5px var(--bg-color);
  border-radius: 20px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 5px 5px var(--color-vue-green);
}
.image {
  overflow: hidden;
  height: 70px;
  width: 70px;
  border-radius: 50%;
}
.image img {
  width: 100%;
  object-fit: cover;
}
.title {
  flex-basis: 40%;
}
.category {
  color: var(--color-vue-green);
  flex-basis: 10%;
}
.fav,
.remove {
  cursor: pointer;
}
.remove {
  position: absolute;
  top: -15px;
  right: -15px;
}
</style>
