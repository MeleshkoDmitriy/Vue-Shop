<script setup>
defineProps({
  text: String
})
</script>

<template>
  <button class="btn">
    <b>{{ text }}</b>
  </button>
</template>

<style scoped>
.btn {
  outline: none;
  border: 2px solid var(--color-vue-green);
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #fff;
  color: var(--color-vue-green);
  text-transform: uppercase;
}
.btn:hover {
  transform: translateY(-3px);
  background-color: var(--color-vue-green);
  color: #fff;
  border: 2px solid #fff;
}
</style>
