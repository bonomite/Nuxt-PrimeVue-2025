<script setup>
function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark")
}
</script>
<template>
  <div>
    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
  </div>
</template>
