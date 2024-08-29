<script setup>
import Header from '../src/components/Header.vue'
import List from '../src/components/List.vue'
import Drawer from '../src/components/Drawer.vue'
import { onMounted, ref, reactive, watch, provide } from 'vue'
import axios from 'axios'
import { api } from '../api'

const products = ref([])

const filters = reactive({
  sortBy: 'title',
  category: '',
  searchQuery: ''
})

const onSelectChange = (event) => {
  filters.sortBy = event.target.value
}

const onCategorySelectChange = (event) => {
  filters.category = event.target.value
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

provide('onFavoriteToggle', onFavoriteToggle)
provide('onAddedToggle', onAddedToggle)
onMounted(fetchProducts)
watch(filters, fetchProducts)
</script>

<template>
  <!-- <Drawer /> -->
  <div class="wrapperApp">
    <div class="container">
      <Header />

      <div class="panel">
        <h2>All products</h2>
        <div class="filters">
          <select @change="onSelectChange">
            <option value="title">from A to Z</option>
            <option value="-title">from Z to A</option>
            <option value="price">Price (from cheap)</option>
            <option value="-price">Price (from expensive)</option>
          </select>
          <select @change="onCategorySelectChange">
            <option value="">All categories</option>
            <option value="cap">Caps</option>
            <option value="jeans">Jeans</option>
            <option value="sneakers">Sneakers</option>
            <option value="tees">Tees</option>
            <option value="hoodie">Hoodeis</option>
            <option value="jacket">Jackets</option>
          </select>
          <input @input="onInputSearchChange" type="text" placeholder="search..." />
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
}
.filters {
  display: flex;
  gap: 10px;
}
</style>
