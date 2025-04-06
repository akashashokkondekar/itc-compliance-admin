<template>
  <tbody class="opacity-60 pointer-events-none">

    <tr v-for="number in DefaultEmptyLoadingSkeletonRowCount" :key="number">

      <td class="p-4 border-b border-blue-gray-50">
        <div class="h-4 w-6 bg-gray-300 rounded animate-pulse"></div>
      </td>

      <td class="p-4 border-b border-blue-gray-50">
        <div class="h-6 w-40 bg-gray-300 rounded-md animate-pulse"></div>
      </td>

      <td class="p-4 border-b border-blue-gray-50">
        <div class="space-y-2">
          <div class="h-4 w-45 bg-gray-300 rounded animate-pulse"></div>
          <div class="h-3 w-60 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </td>

    </tr>

  </tbody>
</template>

<script setup lang="ts">
import { DefaultEmptyLoadingSkeletonRowCount } from "../../../utils/AppConstant";
</script>

<style lang="css" scoped></style>