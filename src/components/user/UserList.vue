<template>

  <div>

    <table class="mt-4 w-full min-w-max table-fixed text-left">

      <thead>

        <tr>

          <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
            <p class="antialiased font-sans text-sm text-blue-gray-900 font-bold">
              {{ FirstColumnHeaderText }}
            </p>
          </th>

          <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
            <p class="antialiased font-sans text-sm text-blue-gray-900 font-bold">
              {{ SecondColumnHeaderText }}
            </p>
          </th>

          <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
            <p class="antialiased font-sans text-sm text-blue-gray-900 font-bold">
              {{ ThirdColumnHeaderText }}
            </p>
          </th>
        </tr>
      </thead>

      <tbody>

        <tr v-for="(user, index) in paginatedUsers" :key="user.id">

          <td class="p-4 border-b border-blue-gray-50">
            <p class="antialiased font-sans text-sm text-blue-gray-900 font-normal">
              {{ index + 1 + (currentPage - 1) * RecordsPerPage }}.
            </p>
          </td>

          <td class="p-4 border-b border-blue-gray-50">
            <div class="w-max">
              <div :class="{
                'bg-red-500/20 text-red-600': user.role === UserRoleEnum.None,
                'bg-yellow-500/20 text-yellow-600': user.role === UserRoleEnum.User,
                'bg-green-500/20 text-green-600': user.role === UserRoleEnum.Admin
              }"
                class="grid items-center font-sans font-bold uppercase whitespace-nowrap select-none py-1 px-2 text-xs rounded-md">
                <span>{{ AppUtils.getRoleName(user.role) }}</span>
              </div>
            </div>
          </td>

          <td class="p-4 border-b border-blue-gray-50 break-all">
            <div class="flex flex-col">
              <p class="antialiased font-sans font-semibold text-sm text-blue-gray-900">
                {{ user.name }}
              </p>
              <p class="antialiased font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                {{ user.email }}
              </p>
            </div>
          </td>

        </tr>

      </tbody>

    </table>

    <div class="mt-4 pb-5 flex justify-center" v-if="filteredUsers.length !== 0">
      <vue-awesome-paginate :total-items="filteredUsers.length" :items-per-page="RecordsPerPage"
        :hidePrevNextWhenEnds="HideNextPrevBtnWhenEnds" :disable-breakpoint-buttons="DisableBreakPointBtns"
        :max-pages-shown="MaxPageNumberToShowCount" v-model="currentPage" @click="handlePaginationClick" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { DisableBreakPointBtns, FirstColumnHeaderText, HideNextPrevBtnWhenEnds, MaxPageNumberToShowCount, RecordsPerPage, SecondColumnHeaderText, ThirdColumnHeaderText, UserRoleEnum } from "../../utils/AppConstant";
import { AppUtils } from "../../utils/AppUtils";
import type { UserList } from "../../types/Interface";

const currentPage = ref<number>(1);

const props = defineProps<{ filteredUsers: UserList }>();

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * RecordsPerPage;
  const end = start + RecordsPerPage;
  return props.filteredUsers.slice(start, end);
});

watch(() => props.filteredUsers, () => {
  currentPage.value = 1;
}, { deep: true }
);

const handlePaginationClick = (page: number) => {
  currentPage.value = page;
};
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}

.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: #19315b;
  border: 1px solid #19315b;
  color: white;
}

.active-page:hover {
  background-color: #19315b;
}
</style>
