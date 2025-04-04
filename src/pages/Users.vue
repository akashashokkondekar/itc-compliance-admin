<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useAuthStore } from '../stores/auth'
import { AppUtils } from '../utils/AppUtils';
import { UserRoleEnum, DefaultUserCreationObj, PostNewUserCreationMsg, ToastTypeEnum, CreateNewUserText, SecondOptionText, UserPageInfoText, NumberOfRecordFoundMsg } from '../utils/AppConstant';
import Navbar from '../components/Navbar.vue';

const authStore = useAuthStore()

const newUser = ref(DefaultUserCreationObj);
const isCreateUserModalOpen = ref(false);
const searchQuery = ref("");
const selectedRoleForFilter = ref(-1);

const canManageUsers = computed(() => authStore.user?.role === UserRoleEnum.Admin);
const filteredUsers = computed(() => {
  const users = result.value?.users || [];
  return users.filter((user: any) => {

    const matchSearch = user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.value.toLowerCase());
    // console.log(typeof selectedRoleForFilter.value)
    const matchRole = selectedRoleForFilter.value !== -1 ? user.role === selectedRoleForFilter.value : true;

    return matchSearch && matchRole;
  });
});
const getTotalUserFoundText = computed(() => {
  return NumberOfRecordFoundMsg.replace("{number_of_users}", (filteredUsers.value.length) > 1 ? `${filteredUsers.value.length} records` : `${filteredUsers.value.length} record`);
});


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

const openCreateUserModal = () => {
  isCreateUserModalOpen.value = true;
};

const closeCreateUserModal = () => {
  isCreateUserModalOpen.value = false;
};

const createUser = () => {
  AppUtils.showToastMsg(PostNewUserCreationMsg.replace("{name}", newUser.value.name), ToastTypeEnum.Success);
  closeCreateUserModal();
};

</script>

<template>
  <div>
    <navbar></navbar>
    <div v-if="result" class="m-6 overflow-scroll px-0">

      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
      <div>
        <h2 class="text-2xl font-semibold text-19315b">{{ SecondOptionText }}</h2>
        <p class="text-m text-gray-600">{{ UserPageInfoText }}</p>
        <p class="text-sm text-gray-400">{{ getTotalUserFoundText }}</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by name or email"
          class="w-full sm:w-64 px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <select v-model="selectedRoleForFilter" class="w-full sm:w-48 px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option :value=-1>All Roles</option>
            <option v-for="(currRole, index) in filteredUserRoleKeyList" :key="index" :value="AppUtils.getEnumValueFromKeyName(currRole)">   
              {{ AppUtils.getNewRoleNameByKey(currRole) }}
            </option>
          </select>

      </div>
    </div>

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
          <tr v-for="(user, index) in filteredUsers" :key="user.id">
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

      <div v-if="canManageUsers" class="fixed bottom-6 right-6 z-50">
      <button
        @click="openCreateUserModal"
        class="hover:scale-105 duration-300 text-white px-6 py-3 rounded-full shadow-lg text-sm transition-all"
      >
        {{ CreateNewUserText }}
      </button>
    </div>
    </div>
  </div>
</template>
