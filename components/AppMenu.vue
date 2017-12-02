<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item is-size-5 has-text-weight-bold">
          Vue Nuxt
        </div>
        <router-link class="navbar-item" to="/" exact>
          Home
        </router-link>
        <router-link class="navbar-item" to="/test" exact>
          Test
        </router-link>
        <span class="navbar-burger burger" @click="isMenuActive = !isMenuActive">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-start">
          <div class="navbar-item">
            Help
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            Login
          </div>
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
