// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_variables.scss" as *;',
        },
      },
    },
  },
  modules: ["@nuxt/image", "vue-yandex-maps/nuxt", "vue3-carousel-nuxt"],
  yandexMaps: {
    apikey: "d6414e4b-20b1-486f-af2b-1681cecc4ada",
  },
});
