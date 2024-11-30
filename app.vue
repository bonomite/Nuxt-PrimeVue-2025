<script setup>
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark")
}
</script>
<template>
  <div>
    <h1>Hello world!</h1>

    <Button severity="success" label="Toggle Dark Mode" @click="toggleDarkMode()" />
    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />

    <div class="flex flex-col gap-2 xs:flex-row sm:gap-4">
      <div class="box">01</div>
      <div class="box">02</div>
      <div class="box">03</div>
    </div>
  </div>
</template>

<style lang="scss">
h1 {
  @apply text-3xl font-bold underline;
}
.box {
  @apply p-2 bg-red-700 [.dark_&]:bg-red-300 rounded-lg w-20 text-center text-p-primary-100;
}
</style>
