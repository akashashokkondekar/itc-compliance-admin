<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useAuthStore } from '../stores/auth'
import { AppUtils } from '../utils/AppUtils';
import CreateUser from './../components/user/CreateUser.vue'
import { EmitValue } from './../types/Interface'
import { UserRoleEnum, CreateNewUserText, SecondOptionText, UserPageInfoText, NumberOfRecordFoundMsg, UserOperationEnum } from '../utils/AppConstant';
import Navbar from '../components/Navbar.vue';

const authStore = useAuthStore()

const isCreateUserModalOpen = ref(false);
const searchQuery = ref("");
const selectedRoleForFilter = ref(-1);
const filteredUserRoleKeyList = Object.keys(UserRoleEnum).filter(key => isNaN(Number(key)));

const canManageUsers = computed(() => authStore.user?.role === UserRoleEnum.Admin);
const filteredUsers = computed(() => {
  const users = result.value?.users || [];
  return users.filter((user: any) => {

    const matchSearch = user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchRole = selectedRoleForFilter.value !== -1 ? user.role === selectedRoleForFilter.value : true;

    return matchSearch && matchRole;
  });
});
const getTotalUserFoundText = computed(() => {
  return NumberOfRecordFoundMsg.replace("{number_of_users}", (filteredUsers.value.length) > 1 ? `${filteredUsers.value.length} records` : `${filteredUsers.value.length} record`);
});

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
const { result, loading, error } = useQuery(USERS_QUERY)

const openCreateUserModal = () => {
  isCreateUserModalOpen.value = true;
};

const handleUserClickAction = (emittedObj: EmitValue): void => {

  console.log("&^%$")
  switch (emittedObj.operationType) {

    default:
      break;

    case UserOperationEnum.Open_Create_User_Modal:
    case UserOperationEnum.Close_Create_User_Modal:
      isCreateUserModalOpen.value = (UserOperationEnum.Open_Create_User_Modal === emittedObj.operationType);
      break;

  }

}

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
          <input type="text" v-model="searchQuery" placeholder="Search by name or email"
            class="w-full sm:w-64 px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />

          <select v-model="selectedRoleForFilter"
            class="w-full sm:w-48 px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option :value=-1>All Roles</option>
            <option v-for="(currRole, index) in filteredUserRoleKeyList" :key="index"
              :value="AppUtils.getEnumValueFromKeyName(currRole)">
              {{ AppUtils.getNewRoleNameByKey(currRole) }}
            </option>
          </select>

        </div>
      </div>

      <CreateUser :filteredUserRoleKeyList="filteredUserRoleKeyList" @performUserClickAction="handleUserClickAction"
        v-if="isCreateUserModalOpen" />

      <div v-if="loading">Loading...</div>
      <div v-if="error" class="text-red-500">{{ error.message }}</div>

      <div class="overflow-x-auto">
        <table class="mt-4 w-full min-w-max table-fixed text-left">
          <thead>
            <tr>
              <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p
                  class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  SR. No.
                </p>
              </th>
              <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p
                  class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Role
                </p>
              </th>
              <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p
                  class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  User Info
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
                    <p
                      class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                      {{ user.email }}
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="canManageUsers" class="fixed bottom-6 right-6 z-50">
        <button @click="openCreateUserModal"
          class="hover:scale-105 duration-300 text-white px-6 py-3 rounded-full shadow-lg text-sm transition-all">
          {{ CreateNewUserText }}
        </button>
      </div>
    </div>
  </div>
</template>
