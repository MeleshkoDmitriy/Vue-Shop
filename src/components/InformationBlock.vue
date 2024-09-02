<script setup>
defineProps({
  img: String,
  title: String,
  text: String,
  slot: {
    default: () => null,
  },
})
</script>

<template>
  <section class="wrapper">
    <div class="body">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <slot>{{ slot }}</slot>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  width: 100%;
  min-height: 50vh;
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
  width: 20px;
}
h2,
p {
  text-align: center;
}
h2 {
  color: var(--color-vue-green);
}
</style>
