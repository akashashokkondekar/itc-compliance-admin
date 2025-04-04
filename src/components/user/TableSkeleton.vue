<script setup lang="ts">
import { FirstColumnHeaderText, SecondColumnHeaderText, ThirdColumnHeaderText } from '../../utils/AppConstant';

</script>

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
      <!-- <tbody>
        <tr v-for="(user, index) in paginatedUsers" :key="user.id">
          <td class="p-4 border-b border-blue-gray-50">
            <p class="antialiased font-sans text-sm text-blue-gray-900 font-normal">
              {{ index + 1 + (currentPage - 1) * RecordsPerPage }}.
            </p>
          </td>
          <td class="p-4 border-b border-blue-gray-50">
            <div class="w-max">
              <div :class="{
                'bg-red-500/20 text-red-600': user.role === UserRoleEnum.None,
                'bg-yellow-500/20 text-yellow-600': user.role === UserRoleEnum.User,
                'bg-green-500/20 text-green-600': user.role === UserRoleEnum.Admin
              }"
                class="grid items-center font-sans font-bold uppercase whitespace-nowrap select-none py-1 px-2 text-xs rounded-md">
                <span>{{ AppUtils.getRoleName(user.role) }}</span>
              </div>
            </div>
          </td>
          <td class="p-4 border-b border-blue-gray-50 break-all">
            <div class="flex flex-col">
              <p class="antialiased font-sans text-sm text-blue-gray-900 font-normal">
                {{ user.name }}
              </p>
              <p class="antialiased font-sans text-sm text-blue-gray-900 font-normal opacity-70">
                {{ user.email }}
              </p>
            </div>
          </td>
        </tr>
      </tbody> -->
    </table>
  </div>
</template>
