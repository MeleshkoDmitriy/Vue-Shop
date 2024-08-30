<script setup>
import { useProductsStore } from '@/store/store'
import { inject } from 'vue'
import Badge from './Badge.vue'

const emit = defineEmits(['onDrawerToggle'])
const isDrawerOpen = inject('drawer')

const productsStore = useProductsStore()
</script>

<template>
  <header class="header">
    <router-link to="/">
      <div class="logo">
        <img src="../assets/logo.svg" alt="logo" /></div
    ></router-link>

    <nav class="nav">
      <div @click="() => emit('onDrawerToggle')" class="navItem">
        <Badge
          v-if="productsStore.cartProductsPrice > 0"
          :counter="productsStore.cartProductsLength"
        />
        <img src="/public/cart.svg" alt="cart" />
        <span
          v-if="productsStore.cartProductsPrice > 0"
          :class="['price', { active: isDrawerOpen }]"
          ><strong>{{ productsStore.cartProductsPrice }} $</strong></span
        >
        <span v-else :class="['price', { active: isDrawerOpen }]"></span>
      </div>

      <router-link to="/favorites">
        <div class="navItem">
          <Badge :counter="productsStore.favoritesLength" />
          <img src="/public/heart.svg" alt="heart" />
          <span class="heart" active-class="active">Favorite</span>
        </div></router-link
      >

      <div class="navItem">
        <img src="/public/profile.svg" alt="profile" />
        <span class="profile">Profile</span>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 2px solid var(--bg-color);
}
.logo img {
  width: 50px;
}
.nav {
  display: flex;
  align-items: center;
  gap: 20px;
}
.navItem {
  position: relative;
}
.navItem:hover {
  cursor: pointer;
}
.navItem:hover > span {
  color: var(--color-vue-green);
}
.price,
.heart,
.profile {
  margin-left: 5px;
  position: relative;
  top: -4px;
}
.active {
  color: var(--color-vue-green);
}
</style>
