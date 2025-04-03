<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { AppUtils } from '../utils/AppUtils';
import { UserRoleEnum, DefaultUserCreationObj } from '../utils/AppConstant';
import Navbar from '../components/Navbar.vue';

const router = useRouter()
const authStore = useAuthStore()

const newUser = ref(DefaultUserCreationObj);
const isCreateUserModalOpen = ref(false);

const canManageUsers = computed(() => authStore.user?.role === UserRoleEnum.Admin);

const filteredUserRoleKeyList = Object.keys(UserRoleEnum).filter(key => isNaN(Number(key)));

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

// Open Create User Modal
const openCreateUserModal = () => {
  isCreateUserModalOpen.value = true;
};

// Close Modal
const closeCreateUserModal = () => {
  isCreateUserModalOpen.value = false;
};

const createUser = () => {
  // toast.success(`User ${newUser.value.name} created successfully!`);
  closeCreateUserModal();
};

</script>

<template>
  <div>
    <navbar></navbar>
    <div v-if="result" class="m-6 overflow-scroll px-0">

      <h2 class="text-2xl font-bold mb-4">User List</h2>

      <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded mb-4">Logout</button>

      <button v-if="canManageUsers" @click="openCreateUserModal"
        class="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Create User
      </button>

      <!-- Create User Modal -->
      <div v-if="isCreateUserModalOpen" class="fixed inset-0 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 class="text-xl font-bold mb-4">Create User</h2>

          <label class="block text-gray-700">Name</label>
          <input v-model="newUser.name" type="text" class="w-full p-2 border rounded-lg mb-2">

          <label class="block text-gray-700">Email</label>
          <input v-model="newUser.email" type="email" class="w-full p-2 border rounded-lg mb-2">

          <label class="block text-gray-700">Password</label>
          <input v-model="newUser.password" type="text" class="w-full p-2 border rounded-lg mb-2">

          <label class="block text-gray-700">Role</label>
          <select v-model="newUser.role" class="w-full p-2 border rounded-lg mb-4">
            <option v-for="(currRole, index) in filteredUserRoleKeyList" :key="index" :value="AppUtils.getEnumValueFromKeyName(currRole)">
              {{ console.log(currRole) }}    
              {{ AppUtils.getNewRoleNameByKey(currRole) }}
            </option>
          </select>

          <div class="flex justify-between">
            <button @click="closeCreateUserModal" class="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
            <button @click="createUser" class="px-4 py-2 bg-green-500 text-white rounded-lg">Save</button>
          </div>
        </div>
      </div>

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
                  :class="{ 'bg-red-500/20 text-red-600': parseInt(user.role) === UserRoleEnum.None, 'bg-yellow-500/20 text-yellow-600': parseInt(user.role) === UserRoleEnum.User, 'bg-green-500/20 text-green-600': parseInt(user.role) === UserRoleEnum.Admin }"
                  class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none py-1 px-2 text-xs rounded-md"
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
