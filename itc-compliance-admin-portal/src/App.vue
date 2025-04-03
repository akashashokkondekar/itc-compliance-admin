<script setup lang="ts">
import { onMounted } from "vue";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();

onMounted(() => {
  authStore.loadFromStorage(); // Load authentication state on app load
});
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
