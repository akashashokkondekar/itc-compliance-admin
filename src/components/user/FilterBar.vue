<template>
  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
    <div>
      <h2 class="text-2xl font-semibold text-19315b">{{ SecondOptionText }}</h2>
      <p class="text-m text-gray-600">{{ UserPageInfoText }}</p>
      <p class="text-sm text-gray-400">{{ getTotalUserFoundText }}</p>
    </div>

    <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <input type="text" @input="onInputChange" placeholder="Search by name or email"
        class="w-full sm:w-64 px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />

      <select :value="selectedRoleForFilter" @change="onSelectChange"
        class="w-full sm:w-48 px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
        <option :value=-1>{{ AllRoleSelectOptionText }}</option>
        <option v-for="(currRole, index) in filteredUserRoleKeyList" :key="index"
          :value="AppUtils.getEnumValueFromKeyName(currRole)">
          {{ AppUtils.getNewRoleNameByKey(currRole) }}
        </option>
      </select>

    </div>
  </div>

</template>
<script setup lang="ts">
import { AllRoleSelectOptionText, SecondOptionText, UserPageInfoText } from '../../utils/AppConstant';
import { AppUtils } from '../../utils/AppUtils';

defineProps<{ filteredUserRoleKeyList: any, getTotalUserFoundText: string, selectedRoleForFilter: number, searchQuery: string }>()

const emit = defineEmits<{
  (event: 'update:selectedRoleForFilter', value: number): void;
  (event: 'update:searchQuery', value: string): void;
}>();

const onSelectChange = (event: Event) => {
  const target = event.target as HTMLSelectElement | null;
  if (!target) return;
  const value = parseInt(target.value);
  emit('update:selectedRoleForFilter', value)
}

const onInputChange = (event: Event) => {

  const target = event.target as HTMLInputElement | null;
  if (!target) return;
  emit('update:searchQuery', target.value);

};

</script>