<template>
  <div class="fixed bottom-0 left-0 w-full text-sm bg-yellow-600 text-white text-center py-1 z-50">
    {{ NoInternetConnectionAvailableMsg }}
  </div>
</template>

<script setup lang="ts">
import { NoInternetConnectionAvailableMsg } from './../../utils/AppConstant';
</script>