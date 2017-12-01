<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item is-size-5">Portfolios</div>
        <span class="navbar-burger burger" @click="isMenuActive = !isMenuActive">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/" exact>
            Home
          </router-link>
          <router-link class="navbar-item" to="/stock" exact>
            Stock
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false
    }
  }
}
</script>
