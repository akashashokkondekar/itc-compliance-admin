<template>

  <table class="mt-4 w-full min-w-max table-fixed text-left">
    <thead>
      <tr>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p
            class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
            {{ FirstColumnHeaderText }}
          </p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p
            class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
            {{ SecondColumnHeaderText }}
          </p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p
            class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
            {{ ThirdColumnHeaderText }}
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in filteredUsers" :key="user.id">
        <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <div class="flex flex-col">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                {{ index + 1 }}.
              </p>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="w-max">
            <div
              :class="{ 'bg-red-500/20 text-red-600': parseInt(user.role) === UserRoleEnum.None, 'bg-yellow-500/20 text-yellow-600': parseInt(user.role) === UserRoleEnum.User, 'bg-green-500/20 text-green-600': parseInt(user.role) === UserRoleEnum.Admin }"
              class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none py-1 px-2 text-xs rounded-md"
              style="opacity: 1;">
              <span class="">{{ AppUtils.getRoleName(user.role) }}</span>
            </div>
          </div>
        </td>

        <td class="p-4 border-b border-blue-gray-50 break-all">
          <div class="flex items-center gap-3">
            <div class="flex flex-col">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                {{ user.name }}
              </p>
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                {{ user.email }}
              </p>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

</template>
<script setup lang="ts">

import type { UserList } from '../../types/Interface';
import { FirstColumnHeaderText, SecondColumnHeaderText, ThirdColumnHeaderText, UserRoleEnum } from '../../utils/AppConstant';
import { AppUtils } from '../../utils/AppUtils';
defineProps<{ filteredUsers: UserList }>()

</script>