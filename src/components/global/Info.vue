<template>
  <div class="flex items-center justify-center bg-white">
    <p class="text-xl mt-30 p-4 text-center font-medium" :class="getInfoTextColor">{{ obj.msg }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Info } from '../../types/Interface';
import { MsgTypeEnum } from '../../utils/AppConstant';

const props = defineProps<{ obj: Info }>();

const getInfoTextColor = computed(() => {

  var colorToReturn = "text-[#d2b199]";
  switch (props.obj.type) {

    default:
      break;
    
    case MsgTypeEnum.Error:
      colorToReturn = "text-red-700";
      break;
    
    case MsgTypeEnum.Success:
      colorToReturn = "text-green-700";
      break;

    case MsgTypeEnum.Warning:
      colorToReturn = "text-amber-700";
      break;

    case MsgTypeEnum.Info:
      colorToReturn = "text-grey-700";
      break;
  }
  return colorToReturn;

});
</script>

<style lang="css" scoped></style>
