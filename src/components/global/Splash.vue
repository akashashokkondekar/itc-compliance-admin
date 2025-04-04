<template>
  <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center background-color-19315b z-50">
      <div class="text-center">
        <img src="/itc_logo.svg" alt="Company Logo" class="w-50 h-auto mb-1" />
        <p class="text-xl font-light text-white">{{ AdminIntroHeaderText }}</p>
        <p class="text-sm font-light text-[#d2b199]">{{ SplashWaitMsg }}</p>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { AdminIntroHeaderText, DefaultSplashScreenHoldTime, SplashWaitMsg } from '../../utils/AppConstant';

const isLoading = ref(true);

onMounted(() => {
  window.onload = () => {
    setTimeout(() => {
      isLoading.value = false;
    }, DefaultSplashScreenHoldTime);
  };
});
</script>

<style scoped>
</style>
