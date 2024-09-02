import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'
import Cart from './pages/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: () => import('./pages/NotFound.vue')
  },
  {
    path: '/product/:id',
    name: 'product-item',
    component: () => import('./pages/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-router-link',
  linkExactActiveClass: 'active-router-link'
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
