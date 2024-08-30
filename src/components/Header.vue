

<template >
  <header class="header">
    <div class="logo">
      <img src="../assets/logo.svg" alt="logo">
    </div>
    <nav class="nav">
      <div class="navItem">
        <img src="/public/cart.svg" alt="cart">
        <span class="price">123 $</span>
      </div>
      <div class="navItem">
        <img src="/public/heart.svg" alt="heart">
        <span class="heart">Favorite</span>
      </div>
      <div class="navItem">
        <img src="/public/profile.svg" alt="profile">
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
</style>