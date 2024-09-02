import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import axios from 'axios'
import { api } from '../../api'

export const useProductsStore = defineStore('ProductStore', () => {
  const products = ref([])
  const favorites = ref([])
  const favoritesLength = computed(() => favorites.value.length)
  const cartProducts = ref([])
  const cartProductsLength = computed(() => cartProducts.value.length)
  const cartProductsPrice = computed(
    () => Math.round(cartProducts.value.reduce((acc, item) => acc + item.price, 0) * 100) / 100
  )

  const fetchProducts = async (filters) => {
    try {
      const params = {
        sortBy: filters.sortBy
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

  const fetchFavorites = async () => {
    try {
      const { data } = await axios.get(`${api}/products`)
      favorites.value = data.filter((product) => product.isFavorite === true)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchCart = async () => {
    try {
      const { data } = await axios.get(`${api}/products`)
      cartProducts.value = data.filter((product) => product.isAdded === true)
    } catch (error) {
      console.error(error)
    }
  }

  const onFavoriteToggle = async (productId, isFav) => {
    const toggledProduct = products.value.find((product) => product.id === productId)

    if (isFav === true) {
      favorites.value = favorites.value.filter((fav) => fav.id !== productId)
    } else if (isFav === false) {
      favorites.value.push(toggledProduct)
    } else {
      console.error(isFav)
    }

    toggledProduct.isFavorite = !toggledProduct.isFavorite

    try {
      await axios.patch(`${api}/products/${productId}`, {
        isFavorite: toggledProduct.isFavorite
      })
    } catch (error) {
      console.error(error)
    }
  }

  const onAddedToggle = async (productId, isAdd) => {
    const toggledProduct = products.value.find((product) => product.id === productId)

    if (isAdd === true) {
      cartProducts.value = cartProducts.value.filter((product) => product.id !== productId)
    } else if (isAdd === false) {
      cartProducts.value.push(toggledProduct)
    } else {
      console.error(isAdd)
    }

    toggledProduct.isAdded = !toggledProduct.isAdded

    try {
      await axios.patch(`${api}/products/${productId}`, {
        isAdded: toggledProduct.isAdded
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    products,
    fetchProducts,
    fetchFavorites,
    fetchCart,
    onFavoriteToggle,
    onAddedToggle,
    favorites,
    favoritesLength,
    cartProducts,
    cartProductsLength,
    cartProductsPrice
  }
})
