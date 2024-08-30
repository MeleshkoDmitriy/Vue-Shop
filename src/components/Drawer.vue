<script setup>
import CartList from '../components/CartList.vue'

</script>

<template>
  <div class="wrapperCart">
    <section class="cart">
      <CartList />
    </section>  
  </div>
</template>

<style scoped>
.wrapperCart {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #0000006a;
}
.cart {
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  padding: 0 20px;
  box-shadow: -5px 0  5px #867c7c;
}
</style>