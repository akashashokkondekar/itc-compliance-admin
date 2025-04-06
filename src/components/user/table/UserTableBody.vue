<template>

  <tbody>

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
          <p class="antialiased font-sans font-semibold text-sm text-blue-gray-900">
            {{ user.name }}
          </p>
          <p class="antialiased font-sans text-sm font-normal text-blue-gray-900 opacity-70">
            {{ user.email }}
          </p>
        </div>
      </td>

    </tr>

  </tbody>

</template>

<script setup lang="ts">
import { RecordsPerPage, UserRoleEnum } from "../../../utils/AppConstant";
import { AppUtils } from "../../../utils/AppUtils";
defineProps<{ paginatedUsers: any, currentPage: number }>();
</script>

<style lang="css" scoped></style>