<template>
  <div>

    <table class="mt-4 w-full min-w-max table-fixed text-left">
    
      <thead>

        <tr>
    
          <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
            <p class="antialiased font-sans text-sm text-blue-gray-900 font-bold">
              {{ FirstColumnHeaderText }}
            </p>
          </th>
    
          <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
            <p class="antialiased font-sans text-sm text-blue-gray-900 font-bold">
              {{ SecondColumnHeaderText }}
            </p>
          </th>
    
          <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
            <p class="antialiased font-sans text-sm text-blue-gray-900 font-bold">
              {{ ThirdColumnHeaderText }}
            </p>
          </th>

        </tr>

      </thead>

      <tbody class="opacity-60 pointer-events-none">
    
        <tr v-for="number in 5" :key="number">

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

    </table>
    
  </div>
</template>

<script setup lang="ts">
import { FirstColumnHeaderText, SecondColumnHeaderText, ThirdColumnHeaderText } from "../../utils/AppConstant";
</script>

<style lang="css" scoped></style>
