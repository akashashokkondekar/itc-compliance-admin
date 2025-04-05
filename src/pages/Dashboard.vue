<template>

  <main>
    <Navbar :preLoginScreen="false"/>
    <section class="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <Intro :obj="objToPass"/>
    </section>
  </main>

</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Intro from "../components/about-us/Intro.vue";
import Navbar from "../components/global/Navbar.vue";
import { DashboardPageInfoText, DefaultIntroComponentObj, FirstOptionText } from "../utils/AppConstant";

const objToPass = ref(DefaultIntroComponentObj);

onMounted(() => {
  objToPass.value.header = FirstOptionText;
  objToPass.value.desc = DashboardPageInfoText;
});

</script>