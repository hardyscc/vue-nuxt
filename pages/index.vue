<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div>
          <logo/>
          <h1 class="title">
            vue-nuxt
          </h1>
          <h2 class="subtitle">
            Power by Vue.js, Nuxt.js and Bulma.
          </h2>
          <div class="buttons is-centered">
            <a class="button is-outlined is-twitter" href="https://nuxtjs.org/" target="_blank">Documentation</a>
            <a class="button is-outlined is-primary" href="https://github.com/nuxt/nuxt.js" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.hero .title {
  padding: 1rem 0;
}
</style>
