<template>
  <main>
    <Navbar :preLoginScreen="false" />
  </main>

  <section class="bg-gray-100 min-h-screen flex flex-col items-center p-6">

    <Intro :obj="objToPass" />

    <div class="mt-12 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <div v-for="member in team" :key="member.id"
        class="bg-white pt-5 pb-7 pl-5 pr-5 rounded-lg shadow-md flex flex-col items-center">
        <img :src="member.image" class="w-24 h-24 rounded-full object-cover aspect-square shadow-md"
          alt="Team Member" />
        <h2 class="mt-3 text-xl font-semibold">{{ member.name }}</h2>
        <p class="text-black-600 mt-1 text-sm">{{ member.role }}</p>
        <p class="text-gray-400 mt-2 text-sm">{{ member.info }}</p>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Intro from "../components/about-us/Intro.vue";
import Navbar from "../components/global/Navbar.vue";
import { AboutUsInitialIntroText, DefaultIntroComponentObj, DummyTeamInfoArr, ThirdOptionText } from "../utils/AppConstant";

const team = ref(DummyTeamInfoArr);
const objToPass = ref(DefaultIntroComponentObj);

onMounted(() => {
  objToPass.value.header = ThirdOptionText;
  objToPass.value.desc = AboutUsInitialIntroText;
});
</script>

<style lang="css" scoped></style>