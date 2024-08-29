<script setup>
defineProps({
  id: Number,
  title: String,
  category: String,
  price: Number,
  imgUrl: String,
  sex: String,
  isFavorite: Boolean,
  isAdded: Boolean
})
</script>

<template>
  <div class="card">
    <div class="image">
      <img :src="imgUrl" alt="product" />
    </div>
    <h3 class="title">{{ title }}</h3>
    <span class="category">{{ category }}</span>
    <span class="price">Price: <b>{{price}} $</b></span>
    <div class="buttons">
      <img :src="isFavorite ? '/public/like-2.svg' : '/public/like-1.svg'" alt="isFavorite" />
      <img :src="isAdded ? '/public/checked.svg' : '/public/plus.svg'" alt="isCart" />
    </div>
  </div>
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
  box-shadow: 0 5px 5px var(--bg-color);
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
