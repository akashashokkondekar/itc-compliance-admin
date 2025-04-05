<template>
  <section class="background-color-19315b min-h-screen flex flex-col">
    <Navbar :preLoginScreen="!authStore.token" />
    <div class="flex flex-1 items-center justify-center">
      <div class="bg-gray-100 flex flex-col items-center rounded-2xl shadow-lg max-w-3xl p-10 text-center">
        <h1 class="text-[#ff4d4f] text-6xl">{{ NotFoundErrorHeaderText }}</h1>
        <p class="text-[#333] pt-2 pb-3 text-2xl">{{ ContentNotFoundText }}</p>
        <RouterLink to="/" class="link p-4 mt-4">{{ BackToHomeOptionText }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import Navbar from "../components/global/Navbar.vue";
import { BackToHomeOptionText, ContentNotFoundText, NotFoundErrorHeaderText } from "../utils/AppConstant";

const authStore = useAuthStore();
</script>

<style lang="css" scoped>
.link {
  color: white;
  text-decoration: none;
  background-color: #19315b;
  border-radius: 8px;
}

.link:hover {
  border: 1px solid #19315b;
  background-color: white;
  color: #19315b;
}
</style>