<script setup>
const colorMode = useColorMode()
</script>
<template>
  <div>
    <h1>Hello world!</h1>

    <div>
      <p class="p-4 pb-2">
        <select
          v-model="colorMode.preference"
          class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </p>
      <div class="p-4">
        <div
          class="max-w-sm rounded overflow-hidden shadow-lg mb-4 bg-white dark:bg-gray-900"
        >
          <img
            class="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4 pb-2">
            <div class="font-bold text-xl mb-2 dark:text-p-primary-200">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
              nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="badge mr-2">#photography</span>
            <span class="badge mr-2">#travel</span>
            <span class="badge">#winter</span>
          </div>
          <div class="px-6 py-4 dark-mode">
            <span class="badge mr-2">#staysdark</span>
            <span class="badge force-light">#stayslight</span>
          </div>
        </div>
      </div>
    </div>

    <Button severity="success" label="Success" />
    <Button label="Default" />

    <div class="flex flex-col gap-2 xs:flex-row sm:gap-9">
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
  @apply p-2 bg-red-700 dark:bg-red-300 rounded-lg w-20 text-center text-p-primary-100 dark:text-black;
}
</style>
