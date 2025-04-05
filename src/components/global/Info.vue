<template>
  <div class="flex items-center justify-center bg-white">
    <p class="text-xl mt-30 p-4 text-center font-medium text-[#d2b199]">{{ msgToShow }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msgToShow: any }>()
</script>

<style lang="css" scoped></style>
