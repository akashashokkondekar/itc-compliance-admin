<template>
  <div class="max-w-6xl">
    <h1 class="text-3xl font-bold text-19315b">{{ obj.header }}</h1>
    <p class="mt-4 text-19315b text-l opacity-85" v-html="obj.desc">
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Intro } from "../../types/Interface";

defineProps<{ obj: Intro }>()
</script>

<style lang="css" scoped></style>
