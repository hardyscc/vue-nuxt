<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <logo/>
        <h1 class="title is-size-1">
          Vue Nuxt
        </h1>
        <h2 class="subtitle is-size-5">
          Power by Vue.js, Nuxt.js and Bulma.
        </h2>
        <div class="buttons is-centered">
          <a class="button is-outlined is-twitter" href="https://nuxtjs.org/" target="_blank">Documentation</a>
          <a class="button is-outlined is-primary" href="https://github.com/nuxt/nuxt.js" target="_blank">GitHub</a>
        </div>
        <div class="columns is-centered">
          <div class="column is-half">
            <table class="table is-bordered is-striped is-narrow is-fullwidth">
              <thead class="has-text-weight-bold">
                <td>Year</td>
                <td class="has-text-right">Make</td>
                <td class="has-text-right">Model</td>
              </thead>
              <tbody>
                <tr v-for="car in allCars" :key="car.id">
                  <td>{{ car.year }}</td>
                  <td class="has-text-right">{{ car.make }}</td>
                  <td class="has-text-right">{{ car.model }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import allCars from '~/apollo/queries/allCars'

export default {
  components: {
    Logo
  },
  apollo: {
    allCars: {
      prefetch: true,
      query: allCars
    }
  }
}
</script>

<style scoped>
.hero .title {
  padding: 1.5rem 0;
}
</style>
