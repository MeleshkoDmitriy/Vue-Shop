<script setup>
import Header from '../src/components/Header.vue'
import List from '../src/components/List.vue'
import Drawer from '../src/components/Drawer.vue'
import { onMounted, ref, reactive, watch, provide } from 'vue'
import axios from 'axios'
import { api } from '../api'

const products = ref([])

const isDrawerOpen = ref(false)

const filters = reactive({
  sortBy: 'title',
  category: '',
  sex: '',
  searchQuery: ''
})

const onDrawerToggle = () => {
  isDrawerOpen.value = !isDrawerOpen.value
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

const fetchProducts = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }

    if (filters.category) {
      params.category = filters.category
    }

    if (filters.sex) {
      params.sex = filters.sex
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`${api}/products`, {
      params
    })
    products.value = data
  } catch (error) {
    console.error(error)
  }
}

const onFavoriteToggle = async (productId) => {
  try {
    const toggledProduct = products.value.find((product) => product.id === productId)

    toggledProduct.isFavorite = !toggledProduct.isFavorite

    await axios.patch(`${api}/products/${productId}`, {
      isFavorite: toggledProduct.isFavorite,
    })
  } catch (error) {
    console.error(error)
  }
}

const onAddedToggle = async (productId) => {
  try {
    const toggledProduct = products.value.find((product) => product.id === productId)

    toggledProduct.isAdded = !toggledProduct.isAdded

    await axios.patch(`${api}/products/${productId}`, {
      isAdded: toggledProduct.isAdded,
    })
  } catch (error) {
    console.error(error)
  }
}

const onResetFiltersClick = () => {
  // filters.sortBy = 'title'
  // filters.category = ''
  // filters.sex = ''
  // filters.searchQuery = ''
}

provide('onFavoriteToggle', onFavoriteToggle)
provide('onAddedToggle', onAddedToggle)
provide('onDrawerToggle', onDrawerToggle)
provide('togglers', {
  onFavoriteToggle,
  onAddedToggle,
  onDrawerToggle,
})
onMounted(fetchProducts)
watch(filters, fetchProducts)
</script>

<template>
  <Drawer v-if="isDrawerOpen" />
  <div class="wrapperApp">
    <div class="container">
      <Header @on-drawer-toggle="onDrawerToggle" />

      <div class="panel">
        <h2 class="title">All products</h2>
        <div class="filters">
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
            <option value="">All</option>
            <option value="w">Women</option>
            <option value="m">Men</option>
          </select>
          <input class="inputs" @input="onInputSearchChange" type="text" placeholder="Search..." />
          <button @click="onResetFiltersClick" class="reset" type="button">
            Reset
          </button>
        </div>
      </div>

      <List :products="products" />
    </div>
  </div>
</template>

<style scoped>
.wrapperApp {
  padding: 20px 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
}
.container {
  max-width: 70%;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
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
input.inputs  {
  padding-left: 5px;
}
</style>
