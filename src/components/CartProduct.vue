<script setup>
defineProps({
  img: String,
  title: String,
  price: Number,
})
</script>

<template>
  <div class="wrapper">
    <img :src="img" alt="product image">
    <div class="body">
      <span>{{ title }}</span>
      <b>{{ price }} $</b>
    </div>
    <img class="remove" src="/public/close.svg" alt="remove">
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100px;
  border: 1px solid var(--bg-color);
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-inline: 10px;
  transition: 0.25s;
}
.wrapper:hover > .remove {
  opacity: 1;
  visibility: visible;
}
.remove {
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: -15px;
  right: -15px;
}
</style>
