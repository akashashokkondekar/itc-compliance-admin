<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useAuthStore } from '../stores/auth'
import { AppUtils } from '../utils/AppUtils';
import CreateNewUser from '../components/user/CreateNewUserModal.vue'
import CreateNewUserButton from '../components/user/CreateNewUserButton.vue'
import type { EmitValue } from './../types/Interface';
import UserList from "../components/user/UserList.vue";
import { UserRoleEnum, SecondOptionText, UserPageInfoText, NumberOfRecordFoundMsg, UserOperationEnum, AllRoleSelectOptionText } from '../utils/AppConstant';
import Navbar from '../components/global/Navbar.vue';

const authStore = useAuthStore()

const isCreateUserModalOpen = ref<boolean>(false);
const searchQuery = ref<string>("");
const selectedRoleForFilter = ref<number>(-1);
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

const handleUserClickAction = (emittedObj: EmitValue): void => {

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
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="text-red-500">{{ error.message }}</div>

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
            <option :value=-1>{{ AllRoleSelectOptionText }}</option>
            <option v-for="(currRole, index) in filteredUserRoleKeyList" :key="index"
              :value="AppUtils.getEnumValueFromKeyName(currRole)">
              {{ AppUtils.getNewRoleNameByKey(currRole) }}
            </option>
          </select>

        </div>
      </div>

      <CreateNewUser :filteredUserRoleKeyList="filteredUserRoleKeyList" @performUserClickAction="handleUserClickAction"
        v-if="isCreateUserModalOpen" />

      <UserList :filteredUsers="filteredUsers" class="overflow-x-auto" />
      <CreateNewUserButton v-if="canManageUsers && !isCreateUserModalOpen"
        @performUserClickAction="handleUserClickAction" class="fixed bottom-6 right-6 z-50" />
    </div>
  </div>
</template>
