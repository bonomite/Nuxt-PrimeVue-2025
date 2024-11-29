<script setup>
function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark")
}
</script>
<template>
  <div>
    <h1 class="">Hello world!</h1>
    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  @apply text-3xl font-bold underline text-blue-500;
}
</style>
