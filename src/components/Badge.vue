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
  width: 24px;
  height: 24px;
  background-color: var(--color-vue-green);
  position: absolute;
  top: -17px;
  left: -15px;
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