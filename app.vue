<script setup>
function toggleDarkMode() {
  document.documentElement.classList.toggle("app-dark")
}
</script>
<template>
  <div>
    <h1 class="">Hello world!</h1>
    <h2 class="text-p-primary-color-500">RED?</h2>
    <Button severity="success" label="Toggle Dark Mode" @click="toggleDarkMode()" />
    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  @apply text-3xl font-bold underline text-p-primary-color-100;
}
</style>
