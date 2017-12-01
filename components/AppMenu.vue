<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <div class="is-size-5">Portfolios</div>
        </router-link>
        <span class="navbar-burger burger" @click="isMenuActive = !isMenuActive">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-end">
          <a class="navbar-item is-active">
            Home
          </a>
          <a class="navbar-item">
            Stock
          </a>
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
