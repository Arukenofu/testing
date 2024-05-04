// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['/style/main.scss'],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    download: true,
    families: {
      'Nunito Sans': '200..900',
    }
  },
  app: {
    baseURL: '/testing/',
    buildAssetsDir: 'assets'
  }
})
