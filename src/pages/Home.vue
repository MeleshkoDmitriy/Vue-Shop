<script setup>
import { useProductsStore } from '@/store/store'
import { onMounted, provide, reactive, watch } from 'vue'
import ProductList from '../components/ProductList.vue'

const productsStore = useProductsStore()

const filters = reactive({
  sortBy: 'title',
  category: '',
  sex: '',
  searchQuery: ''
})

const fetchProducts = () => {
  productsStore.fetchProducts(filters)
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
watch(filters, fetchProducts)
</script>

<template>
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
      <button @click="onResetFiltersClick" class="reset" type="button">Reset</button>
    </div>
  </div>

  <ProductList :products="productsStore.products" />
</template>

<style scoped>
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
