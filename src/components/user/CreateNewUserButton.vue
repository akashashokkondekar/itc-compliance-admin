<template>
  <button @click="openCreateNewUserModal"
    class="hover:scale-105 duration-300 text-white px-6 py-3 cursor-pointer rounded-full shadow-lg text-sm transition-all">
    {{ CreateNewUserText }}
  </button>
</template>

<script setup lang="ts">
import type { EmitValue } from "../../types/Interface";
import { CreateNewUserText, UserOperationEnum } from "../../utils/AppConstant";

const emit = defineEmits<{
  (event: 'performUserClickAction', emittedObj: EmitValue): void;
}>();

const openCreateNewUserModal = () => {
  const objToReturn: EmitValue = {
    operationType: UserOperationEnum.Open_Create_User_Modal,
    object: null
  }
  emit('performUserClickAction', objToReturn);
};

</script>

<style lang="css" scoped></style>