<template>

  <div class="fixed inset-0 flex items-center justify-center">
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
        <option v-for="(currRole, index) in filteredUserRoleKeyList" :key="index"
          :value="AppUtils.getEnumValueFromKeyName(currRole)">
          {{ AppUtils.getNewRoleNameByKey(currRole) }}
        </option>
      </select>

      <div class="flex justify-between">
        <button @click="closeCreateUserModal" class="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
        <button @click="createUser"
          :class="{ 'px-4 py-2 rounded-lg': !disableCreateBtn(), 'px-4 py-2 rounded-lg opacity-50 cursor-not-allowed': disableCreateBtn() }"
          :disabled="disableCreateBtn()">Save</button>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from "vue";
import { AppUtils } from './../../utils/AppUtils';
import { DefaultUserCreationObj, MinPasswordCharLength, MinNameCharLength, PostNewUserCreationMsg, ToastTypeEnum, UserOperationEnum, NoInternetConnectionAvailableMsg } from './../../utils/AppConstant';
import type { DefaultUserObj, EmitValue } from "../../types/Interface";
import { useNetworkStatusStore } from "./../../stores/network";

defineProps<{ filteredUserRoleKeyList: any }>()
const emit = defineEmits<{
  (event: 'performUserClickAction', emittedObj: EmitValue): void;
}>();

const newUser = ref<DefaultUserObj>(DefaultUserCreationObj);
const networkStatus = useNetworkStatusStore();

const nameError = computed(() => {
  return newUser.value.name.trim().length < MinNameCharLength;
});

const emailError = computed(() => {
  return (!newUser.value.email || !AppUtils.isValidateEmailAddress(newUser.value.email));
});

const passwordError = computed(() => {
  return newUser.value.password.trim().length < MinPasswordCharLength;
});

const disableCreateBtn = (): boolean => {
  return (emailError.value || passwordError.value || nameError.value || !networkStatus.isOnline);
}

const createUser = () => {

  try {

    if (!networkStatus.isOnline) {
      AppUtils.showToastMsg(NoInternetConnectionAvailableMsg, ToastTypeEnum.Error);
      return;
    }

    AppUtils.showToastMsg(PostNewUserCreationMsg.replace("{name}", newUser.value.name), ToastTypeEnum.Success);
    closeCreateUserModal();

  } catch (err) {

  }
};

const closeCreateUserModal = () => {

  const objToReturn: EmitValue = {
    operationType: UserOperationEnum.Close_Create_User_Modal,
    object: null
  }
  emit('performUserClickAction', objToReturn);

};

</script>