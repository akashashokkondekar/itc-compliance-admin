<template>

  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

    <div class="bg-white p-10 rounded-lg shadow-lg w-130">

      <div class="mb-4">
        <h2 class="text-2xl font-semibold text-[#19315b]">{{ CreateNewUserModalHeaderText }}</h2>
        <p class="text-cyan-800 text-shadow-1xs text-sm">{{ CreateNewUserModalDescText }}</p>
      </div>

      <label class="block text-sm text-gray-700">{{ NameInputLabelText }}</label>
      <input v-model="newUser.name" type="text" :placeholder="NameInputPlaceHolderText"
        class="w-full p-2 border rounded-lg">
      <p class="text-sm text-gray-400 mb-2">{{ NameInputHintText }}</p>

      <label class="block pt-3 text-sm text-gray-700">{{ EmailInputLabelText }}</label>
      <input v-model="newUser.email" type="email" :placeholder="EmailIdPlaceHolderText"
        class="w-full p-2 border rounded-lg">
      <p class="text-sm text-gray-400 mb-2">{{ EmailInputHintText }}</p>

      <label class="block pt-3 text-sm text-gray-700">{{ PasswordInputLabelText }}</label>
      <input v-model="newUser.password" type="text" :placeholder="PasswordInputPlaceHolderText"
        class="w-full p-2 border rounded-lg">
      <p class="text-sm text-gray-400 mb-2">{{ PasswordInputHintText }}</p>

      <label class="block pt-3 text-sm text-gray-700">{{ RoleInputLabelText }}</label>
      <select v-model="newUser.role" class="w-full p-2 border rounded-lg">
        <option v-for="(currRole, index) in filteredUserRoleKeyList" :key="index"
          :value="AppUtils.getEnumValueFromKeyName(currRole)">
          {{ AppUtils.getNewRoleNameByKey(currRole) }}
        </option>
      </select>
      <p class="text-sm text-gray-400 mb-4">{{ RoleInputHintText }}</p>

      <div class="flex pt-4 justify-center">

        <button @click="closeCreateNewUserModal" class="px-4 py-2 cancel-btn-styling cursor-pointer mr-3 rounded-lg">
          {{ CloseCreateNewUserModalBtnText }}
        </button>

        <button @click="createUser"
          :class="{ 'px-4 py-2 rounded-lg cursor-pointer': !disableCreateBtn(), 'px-4 py-2 rounded-lg opacity-50 cursor-not-allowed': disableCreateBtn() }"
          :disabled="disableCreateBtn()">
          {{ CreateUserBtnText }}
        </button>

      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useNetworkStatusStore } from "../../stores/network";
import { DefaultUserCreationObj, MinPasswordCharLength, MinNameCharLength, PostNewUserCreationMsg, MsgTypeEnum, UserOperationEnum, NoInternetConnectionAvailableMsg, NameInputLabelText, NameInputPlaceHolderText, EmailInputLabelText, EmailIdPlaceHolderText, PasswordInputLabelText, PasswordInputPlaceHolderText, RoleInputLabelText, CloseCreateNewUserModalBtnText, CreateUserBtnText, CreateNewUserModalHeaderText, CreateNewUserModalDescText, NameInputHintText, EmailInputHintText, PasswordInputHintText, RoleInputHintText } from "../../utils/AppConstant";
import type { UserObj, EmitValue } from "../../types/Interface";
import { AppUtils } from "../../utils/AppUtils";

const newUser = ref<UserObj>(DefaultUserCreationObj);
const networkStatus = useNetworkStatusStore();

defineProps<{ filteredUserRoleKeyList: any }>();
const emit = defineEmits<{
  (event: "performUserClickAction", emittedObj: EmitValue): void;
}>();

const nameError = computed(() => {
  return (newUser.value.name.trim().length < MinNameCharLength);
});

const emailError = computed(() => {
  return (!newUser.value.email || !AppUtils.isValidateEmailAddress(newUser.value.email));
});

const passwordError = computed(() => {
  return (newUser.value.password.trim().length < MinPasswordCharLength);
});

const disableCreateBtn = (): boolean => {
  return (emailError.value || passwordError.value || nameError.value || !networkStatus.isOnline);
}

const createUser = () => {

  try {

    if (!networkStatus.isOnline) {
      AppUtils.showToastMsg(NoInternetConnectionAvailableMsg, MsgTypeEnum.Error);
      return;
    }

    AppUtils.showToastMsg(PostNewUserCreationMsg.replace("{name}", newUser.value.name), MsgTypeEnum.Success);
    closeCreateNewUserModal();

  } catch (err) {

  }

};

const closeCreateNewUserModal = () => {

  const objToReturn: EmitValue = {
    operationType: UserOperationEnum.Close_Create_User_Modal,
    object: null
  }
  emit("performUserClickAction", objToReturn);

};

</script>

<style lang="css" scoped>
.bg-black {
  background-color: rgba(0, 0, 0, 0.5);
}

.cancel-btn-styling {
  background-color: white !important;
  color: #19315b !important;
  border: 0.5px solid #19315b !important;
}
</style>