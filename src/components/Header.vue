<script setup>
import { useProductsStore } from '@/store/store'
import { useRoute } from 'vue-router'
import { inject, onMounted, provide, reactive, watch } from 'vue';
import Badge from './Badge.vue'

const productsStore = useProductsStore()
const route = useRoute()

const isProductPage = (path) => {
  return path.startsWith('/product/');
}

const emit = defineEmits(['onDrawerToggle'])
const isDrawerOpen = inject('drawer')

const filters = reactive({
    sortBy: 'title',
    category: '',
    sex: '',
    searchQuery: ''
})

const fetchProducts = () => {
  productsStore.fetchProducts(filters)
}

const fetchFavorites = () => {
  productsStore.fetchFavorites()
}

const fetchCart = () => {
  productsStore.fetchCart()
}

const onSelectChange = (event) => {
  filters.sortBy = event.target.value
}

const onCategorySelectChange = (event) => {
  filters.category = event.target.value
}

const onSexSelectChange = (event) => {
  filters.sex = event.target.value
}

const onInputSearchChange = (event) => {
  filters.searchQuery = event.target.value
}

const onResetFiltersClick = () => {
  // filters.sortBy = 'title'
  // filters.category = ''
  // filters.sex = ''
  // filters.searchQuery = ''
}

provide('fn', {
  onInputSearchChange,
  onResetFiltersClick,
  onCategorySelectChange,
  onSexSelectChange,
  onSelectChange
})

onMounted(fetchProducts)
onMounted(fetchFavorites)
onMounted(fetchCart)
watch(filters, fetchProducts)
</script>

<template>
  <header class="header">
    <router-link to="/">
      <div class="logo">
        <img src="../assets/logo.svg" alt="logo" /></div
    ></router-link>

    <nav class="nav">
      <router-link to="/">
        <div class="navItem">
          <img src="/public/profile.svg" alt="profile" />
          <span class="profile">Catalog</span>
        </div>
      </router-link>

      <router-link to="/cart">
        <div class="navItem">
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
      </router-link>

      <router-link to="/favorites">
        <div class="navItem">
          <Badge
            v-if:="productsStore.favoritesLength > 0"
            :counter="productsStore.favoritesLength"
          />
          <img src="/public/heart.svg" alt="heart" />
          <span class="heart" active-class="active">Favorite</span>
        </div></router-link
      >
    </nav>
  </header>

  <div class="panel">
    <h2 v-if="route.path === '/'" class="title">Products</h2>
    <h2 v-else-if="route.path === '/cart'" class="title">Cart</h2>
    <h2 v-else-if="route.path === '/favorites'" class="title">Favorites</h2>
    <h2 v-else-if="isProductPage(route.path)" class="title">Product</h2>

    <div v-if="route.path === '/'" class="filters">
      <select class="inputs" @change="onSelectChange">
        <option value="title">from A to Z</option>
        <option value="-title">from Z to A</option>
        <option value="price">Price (from cheap)</option>
        <option value="-price">Price (from expensive)</option>
      </select>
      <select class="inputs" @change="onCategorySelectChange">
        <option value="">All categories</option>
        <option value="cap">Caps</option>
        <option value="jeans">Jeans</option>
        <option value="sneakers">Sneakers</option>
        <option value="tees">Tees</option>
        <option value="hoodie">Hoodeis</option>
        <option value="jacket">Jackets</option>
      </select>
      <select class="inputs" @change="onSexSelectChange">
        <option value="">Everyone</option>
        <option value="w">Women</option>
        <option value="m">Men</option>
      </select>
      <input class="inputs" @input="onInputSearchChange" type="text" placeholder="Search..." />
      <button disabled @click="onResetFiltersClick" class="reset" type="button"></button>
    </div>
  </div>
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

.panel {
  padding: 20px 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.title {
  color: var(--color-vue-green);
  text-transform: uppercase;
  font-size: 22px;
}
.filters {
  display: flex;
  gap: 10px;
}
.inputs,
.reset {
  width: 150px;
  height: 25px;
  border: 1px solid var(--color-vue-green);
  border-radius: 3px;
  outline: none;
}
.reset {
  background-color: var(--color-vue-green);
  color: #fff;
  cursor: pointer;
}
.inputs:active,
.inputs:hover,
.inputs:focus {
  border: 2px solid var(--color-vue-green);
}
input.inputs {
  padding-left: 5px;
}
</style>
