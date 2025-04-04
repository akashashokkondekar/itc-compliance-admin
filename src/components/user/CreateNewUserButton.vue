<template>
  <button @click="openCreateUserModal"
    class="hover:scale-105 duration-300 text-white px-6 py-3 cursor-pointer rounded-full shadow-lg text-sm transition-all">
    {{ CreateNewUserText }}
  </button>
</template>
<script setup lang="ts">
import type { EmitValue } from '../../types/Interface';
import { CreateNewUserText, UserOperationEnum } from '../../utils/AppConstant';

const emit = defineEmits<{
  (event: 'performUserClickAction', emittedObj: EmitValue): void;
}>();

const openCreateUserModal = () => {
  const objToReturn: EmitValue = {
    operationType: UserOperationEnum.Open_Create_User_Modal,
    object: null
  }
  emit('performUserClickAction', objToReturn);
};

</script>