<script setup>
import Header from "../src/components/Header.vue"
import List from "../src/components/List.vue"
import Drawer from "../src/components/Drawer.vue"
</script>

<template>
  <!-- <Drawer /> -->
  <div class="wrapperApp">
    <div class="container">

      <Header />

      <div class="panel">
        <h2>All products</h2>
        <div class="filters">
          <select>
            <option value="name">Name</option>
            <option value="cheap">Price (cheap)</option>
            <option value="expensive">Price (expensive)</option>
          </select>
          <input type="text" placeholder="search...">
        </div>
      </div>

      <List />

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
