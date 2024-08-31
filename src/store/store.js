import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import axios from "axios";
import { api } from "../../api";

export const useProductsStore = defineStore("ProductStore", () => {
  const products = ref([])
  const favorites = ref([])
  const favoritesLength = computed(() => favorites.value.length)
  const cartProducts = ref([])
  const cartProductsLength = computed(() => cartProducts.value.length)
  const cartProductsPrice = computed(() => cartProducts.value.reduce((acc, item) => acc + item.price, 0))

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
      favorites.value = data.filter((product) => product.isFavorite === true)
      cartProducts.value = data.filter((product) => product.isAdded === true)
    } catch (error) {
      console.error(error)
    }
  }

  const onFavoriteToggle = async (productId, isFav) => {
    try {
      const toggledProduct = products.value.find((product) => product.id === productId);

      if (isFav) {
        favorites.value = favorites.value.filter((fav) => fav.id !== productId);
      } else {
        favorites.value.push(toggledProduct);
      }

      toggledProduct.isFavorite = !toggledProduct.isFavorite;

      await axios.patch(`${api}/products/${productId}`, {
        isFavorite: toggledProduct.isFavorite,
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  const onAddedToggle = async (productId, isAdd) => {
    try {
      const toggledProduct = products.value.find((product) => product.id === productId)

      if (isAdd) {
        cartProducts.value = cartProducts.value.filter((product) => product.id !== productId);
      } else {
        cartProducts.value.push(toggledProduct);
      }
  
      toggledProduct.isAdded = !toggledProduct.isAdded
  
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
    onFavoriteToggle,
    onAddedToggle,
    favorites,
    favoritesLength,
    cartProducts,
    cartProductsLength,
    cartProductsPrice,
  }
})