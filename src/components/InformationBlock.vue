<script setup>
defineProps({
  img: String,
  title: String,
  text: String
})
</script>

<template>
  <section class="wrapper">
    <div class="body">
      <img :src="img" alt="info image" />
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.body {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
img {
  width: 150px;
}
h2,
p {
  text-align: center;
}
h2 {
  color: var(--color-vue-green);
}
</style>
