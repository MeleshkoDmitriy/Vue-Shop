<script setup>
defineProps({
  counter: Number
})
</script>

<template>
  <div class="wrapper">
    <span class="counter">{{ counter }}</span>
  </div>
</template>

<style scoped>
.wrapper {
  width: 20px;
  height: 20px;
  background-color: var(--color-vue-green);
  position: absolute;
  top: -13px;
  left: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid #fff;
}
.counter {
  font-size: 15px;
  color: #fff;
}
</style>