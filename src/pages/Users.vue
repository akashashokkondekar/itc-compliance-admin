<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useAuthStore } from '../stores/auth'
import CreateNewUser from '../components/user/CreateNewUserModal.vue'
import CreateNewUserButton from '../components/user/CreateNewUserButton.vue'
import type { EmitValue } from './../types/Interface';
import UserList from "../components/user/UserList.vue";
import { UserRoleEnum, NumberOfRecordFoundMsg, UserOperationEnum } from '../utils/AppConstant';
import Navbar from '../components/global/Navbar.vue';
import FilterBar from './../components/user/FilterBar.vue';
import TableSkeleton from "../components/user/TableSkeleton.vue";

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
    <Navbar :preLoginScreen="false" />
    <div v-if="error" class="text-red-500">{{ error.message }}</div>
    <FilterBar v-model:searchQuery="searchQuery" v-model:selectedRoleForFilter="selectedRoleForFilter" :getTotalUserFoundText="getTotalUserFoundText" :filteredUserRoleKeyList="filteredUserRoleKeyList" @performUserClickAction="handleUserClickAction" class="m-6 overflow-scroll px-0"/>
    <UserList :filteredUsers="filteredUsers" v-if="result" class="m-6 overflow-scroll px-0 overflow-x-auto" />
    <TableSkeleton v-if="loading" class="m-6 overflow-scroll px-0 overflow-x-auto"/>
    <CreateNewUser :filteredUserRoleKeyList="filteredUserRoleKeyList" @performUserClickAction="handleUserClickAction" v-if="isCreateUserModalOpen" />
    <CreateNewUserButton v-if="canManageUsers && !isCreateUserModalOpen" @performUserClickAction="handleUserClickAction" class="fixed bottom-6 right-6 z-50" />
  </div>
</template>
