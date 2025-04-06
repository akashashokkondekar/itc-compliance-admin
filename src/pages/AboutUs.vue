<template>

  <div class="min-h-screen ">
    <Navbar :preLoginScreen="false" />

    <section class="flex flex-col items-center p-6">
      <IntroUI :obj="objToPass" />
      <div class="mt-12 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <div v-for="memberObj in team" :key="memberObj.id"
          class="bg-white pt-5 pb-7 pl-5 pr-5 rounded-lg shadow-2xl flex flex-col items-center">
          <MemberView :member="memberObj" />
        </div>

      </div>
    </section>

  </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import IntroUI from "../components/about-us/Intro.vue";
import Navbar from "../components/global/Navbar.vue";
import { AboutUsInitialIntroText, DefaultIntroComponentObj, DummyTeamInfoArr, ThirdOptionText } from "../utils/AppConstant";
import MemberView from "../components/about-us/MemberView.vue";
import type { Intro, Member } from "../types/Interface";

const team = ref<Member[]>(DummyTeamInfoArr);
const objToPass = ref<Intro>(DefaultIntroComponentObj);

onMounted(() => {
  objToPass.value.header = ThirdOptionText;
  objToPass.value.desc = AboutUsInitialIntroText;
});
</script>

<style lang="css" scoped></style>