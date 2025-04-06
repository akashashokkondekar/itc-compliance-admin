<template>

  <div>

    <table class="mt-4 w-full min-w-max table-fixed text-left">
      <ParentTableHeader/>
      <UserTableBody :paginatedUsers="paginatedUsers" :currentPage="currentPage"/>
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
import { DisableBreakPointBtns, HideNextPrevBtnWhenEnds, MaxPageNumberToShowCount, RecordsPerPage } from "../../utils/AppConstant";
import type { UserList } from "../../types/Interface";
import ParentTableHeader from "./table/ParentTableHeader.vue";
import UserTableBody from "./table/UserTableBody.vue";

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
