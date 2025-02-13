<script>
  export default {
    name: 'Header',
  };
</script>

<template>
  <!-- Header -->
  <div class="bg-white shadow-md p-20">
    <div
      class="mx-auto px-4 py-2 flex flex-col justify-between items-center m-auto"
    >
      <div class="text-5xl font-bold text-gray-800">
        <img src="./../assets/logo.svg" class="h-26" />
      </div>
      <img src="./../assets/rocket.svg" class="h-50" />
    </div>
  </div>
</template>

<style scoped>
  #navBar {
    background-color: #888;
    min-height: 10vh;
  }
</style>
