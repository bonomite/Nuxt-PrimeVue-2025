// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
  css: ['~/src/assets/main.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      ripple: true,
      theme: 'none',
      // theme: {
      //   preset: Aura,
      //   options: {
      //     darkModeSelector: '.my-app-dark',
      //   },
      // },
      pt: {
        button: {
          label: { class: 'text-xs' }
        }
      }
    },
  }
})