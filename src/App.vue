<script setup lang="ts">
import LostNetworkInfoStrip from './components/global/LostNetworkInfoStrip.vue';
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useAuthStore } from "./stores/auth";
import { useNetworkStatusStore } from "./stores/network";
import Splash from './components/global/Splash.vue';

const authStore = useAuthStore();
const networkStatus = useNetworkStatusStore();
const isOnline = ref(navigator.onLine);

// Update network status
const updateNetworkStatus = () => {
  isOnline.value = navigator.onLine
  networkStatus.setNetworkStatus(isOnline.value);
};

onBeforeUnmount(() => {
  window.removeEventListener('online', updateNetworkStatus);
  window.removeEventListener('offline', updateNetworkStatus);
});

onMounted(() => {
  authStore.loadFromStorage();
  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
});

</script>

<template>
  <div>
    <LostNetworkInfoStrip v-if="!isOnline"/>
    <RouterView />
    <Splash/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
