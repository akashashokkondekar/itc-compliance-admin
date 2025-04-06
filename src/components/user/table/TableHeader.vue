<template>

  <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
    <p class="antialiased font-sans text-sm text-blue-gray-900 font-bold">
      {{ getColumnHeaderText }}
    </p>
  </th>

</template>

<script setup lang="ts">
import { computed } from "vue";
import { FirstColumnHeaderText, SecondColumnHeaderText, ThirdColumnHeaderText } from "../../../utils/AppConstant";

const props = defineProps<{ currColIndex: number }>();

const getColumnHeaderText = computed(() => {

  var colorToReturn = "";
  switch (props.currColIndex) {

    default:
      break;

    case 1:
      colorToReturn = FirstColumnHeaderText;
      break;

    case 2:
      colorToReturn = SecondColumnHeaderText;
      break;

    case 3:
      colorToReturn = ThirdColumnHeaderText;
      break;
  }
  return colorToReturn;

});
</script>

<style lang="css" scoped></style>
