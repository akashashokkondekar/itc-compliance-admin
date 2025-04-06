<template>
  <img :src="member.image" class="w-24 h-24 rounded-full object-cover aspect-square shadow-md" alt="Team Member" />
  <h2 class="mt-3 text-xl font-semibold">{{ member.name }}</h2>
  <p class="text-black-600 mt-1 text-sm">{{ member.role }}</p>
  <p class="text-gray-400 mt-2 text-sm">{{ member.info }}</p>
</template>

<script setup lang="ts">
import type { Member } from '../../types/Interface';

defineProps<{ member: Member }>()
</script>

<style lang="css" scoped></style>