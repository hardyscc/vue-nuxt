module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // ignore the asset size limit warning
      config.performance = { hints: false }
    }
  },
  /*
  ** default to SPA mode
  */
  mode: 'spa',
  /*
  ** Plugins configuration
  */
  plugins: ['~plugins/buefy'],
  /*
  ** Modules configuration
  */
  modules: ['@nuxtjs/pwa']
}
