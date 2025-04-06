<template>
  <div>

    <table class="mt-4 w-full min-w-max table-fixed text-left">

      <ParentTableHeader />
      <SkeletonTableBody />

    </table>

  </div>
</template>

<script setup lang="ts">
import SkeletonTableBody from "./table/SkeletonTableBody.vue";
import ParentTableHeader from "./table/ParentTableHeader.vue";
</script>

<style lang="css" scoped></style>
