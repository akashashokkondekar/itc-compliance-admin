<template>

  <thead>
    <tr>
      <TableHeader v-for="(num, index) in MaxTableHeaderColCount" :key="index" :currColIndex="num" />
    </tr>
  </thead>

</template>

<script setup lang="ts">
import TableHeader from "./TableHeader.vue";
import { MaxTableHeaderColCount } from "../../../utils/AppConstant";
</script>

<style lang="css" scoped></style>