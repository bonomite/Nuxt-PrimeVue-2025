// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  css: ['~/src/assets/main.css'],
  tailwindcss: {
    // Options
    editorSupport: true,
  },
  primevue: {
    options: {
      ripple: true,
      theme: 'none',
    },
  },
})