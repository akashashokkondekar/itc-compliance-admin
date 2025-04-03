<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useAuthStore } from './../stores/auth'
import { useRouter } from 'vue-router'
import { AppUtils } from './../utils/AppUtils';
import { UserRoleEnum } from './../utils/AppConstant';

const router = useRouter()
const authStore = useAuthStore()

// GraphQL Query for Users
const USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      role
    }
  }
`

// Fetch Data
const { result, loading, error } = useQuery(USERS_QUERY)

// Logout Function
const logout = () => {
  authStore.logout()
  router.push('/')
}

</script>

<template>
  <div>
    <div v-if="result" class="m-6 overflow-scroll px-0">

      <h2 class="text-2xl font-bold mb-4">User List</h2>

      <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded mb-4">Logout</button>

      <div v-if="loading">Loading...</div>
      <div v-if="error" class="text-red-500">{{ error.message }}</div>

      <table class="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                SR. No.
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                User Info <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Role <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in result.users" :key="user.id">
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {{ index + 1 }}
                  </p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {{ user.name }}
                  </p>
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                    {{ user.email }}
                  </p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">

              <div class="w-max">
                <div
                  :class="{'bg-red-500/20 text-red-600': parseInt(user.role) === UserRoleEnum.None, 'bg-yellow-500/20 text-yellow-600': parseInt(user.role) === UserRoleEnum.User, 'bg-green-500/20 text-green-600': parseInt(user.role) === UserRoleEnum.Admin}" class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none py-1 px-2 text-xs rounded-md"
                  style="opacity: 1;">
                  <span class="">{{ AppUtils.getRoleName(user.role) }}</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
