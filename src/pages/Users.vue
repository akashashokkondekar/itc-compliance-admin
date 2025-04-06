<template>
  <div>
    <Navbar :preLoginScreen="false" />

    <FilterBar v-model:searchQuery="searchQuery" v-model:selectedRoleForFilter="selectedRoleForFilter"
      :getTotalUserFoundText="getTotalUserFoundText" :filteredUserRoleKeyList="filteredUserRoleKeyList"
      @performUserClickAction="handleUserClickAction" class="m-6 overflow-scroll px-0" />

    <Info v-if="error || filteredUsers.length === 0" :obj="getInfoCompObjToPass" />

    <UserList :filteredUsers="filteredUsers" v-if="result && filteredUsers.length !== 0"
      class="m-6 overflow-scroll px-0 overflow-x-auto" />

    <TableSkeleton v-if="loading" class="m-6 overflow-scroll px-0 overflow-x-auto" />

    <CreateNewUser :filteredUserRoleKeyList="filteredUserRoleKeyList" @performUserClickAction="handleUserClickAction"
      v-if="isCreateUserModalOpen" />

    <CreateNewUserButton v-if="canManageUsers && !isCreateUserModalOpen" @performUserClickAction="handleUserClickAction"
      class="fixed bottom-6 right-6 z-50" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";
import CreateNewUser from "../components/user/CreateNewUserModal.vue";
import CreateNewUserButton from "../components/user/CreateNewUserButton.vue";
import FilterBar from "./../components/user/FilterBar.vue";
import TableSkeleton from "../components/user/TableSkeleton.vue";
import Info from "../components/global/Info.vue";
import UserList from "../components/user/UserList.vue";
import Navbar from '../components/global/Navbar.vue';
import { UserRoleEnum, NumberOfRecordFoundMsg, UserOperationEnum, GenericServerErrorMessageTwo, NoUsersFoundMsg, ServerWaitMsgText, DefaultInfoComponentObj, MsgTypeEnum } from "../utils/AppConstant";
import type { EmitValue } from "./../types/Interface";
import { GET_USERS } from "../graphql/Queries";

const authStore = useAuthStore();
const userStore = useUserStore();

const isCreateUserModalOpen = ref<boolean>(false);
const searchQuery = ref<string>("");
const selectedRoleForFilter = ref<number>(-1);
const filteredUserRoleKeyList = Object.keys(UserRoleEnum).filter(key => isNaN(Number(key)));

var { result, loading, error } = useQuery(GET_USERS);

onMounted(() => {

  if (storedUserList.value && storedUserList.value.length > 0) {
    result.value = { users: storedUserList.value };
  }
  // console.log('Initial UserList: ', JSON.stringify(result.value));
});

const storedUserList = computed(() => userStore.getUserList);

const filteredUsers = computed(() => {
  const users = result.value?.users || [];
  return users.filter((user: any) => {
    const matchSearch = user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchRole = selectedRoleForFilter.value !== -1 ? user.role === selectedRoleForFilter.value : true;
    return matchSearch && matchRole;
  });
});

const getTotalUserFoundText = computed(() => {
  return NumberOfRecordFoundMsg.replace("{number_of_users}", filteredUsers.value.length > 1 ? `${filteredUsers.value.length} records` : `${filteredUsers.value.length} record`);
});

const canManageUsers = computed(() => authStore.user?.role === UserRoleEnum.Admin);

const getInfoCompObjToPass = computed(() => {

  const objToReturn = DefaultInfoComponentObj;

  if (loading.value) {
    objToReturn.msg = ServerWaitMsgText;
    objToReturn.type = MsgTypeEnum.Info;
  }

  if (error.value) {
    objToReturn.msg = GenericServerErrorMessageTwo;
    objToReturn.type = MsgTypeEnum.Error;
  }

  if (filteredUsers.value.length === 0) {
    objToReturn.msg = NoUsersFoundMsg;
    objToReturn.type = MsgTypeEnum.Info;
  }
  return objToReturn;

});

if (result) {
  // console.log('result', result);
  watch(result, (newResult) => {
    if (newResult?.users?.length) {
      userStore.setUserList(newResult.users);
    }
  }, { immediate: true });
}

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

<style lang="css" scoped></style>