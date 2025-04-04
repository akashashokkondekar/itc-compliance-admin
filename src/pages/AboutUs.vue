<template>
  <main>
    <Navbar />
  </main>
  <section class="bg-gray-100 min-h-screen flex flex-col items-center p-6">

    <div class="max-w-6xl">
      <h1 class="text-3xl font-bold text-19315b">{{ ThirdOptionText }}</h1>
      <p class="mt-4 text-19315b text-l opacity-85" v-html="AboutUsInitialIntroText">
      </p>
    </div>

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
import { AboutUsInitialIntroText, DummyTeamInfoArr, ThirdOptionText } from '../utils/AppConstant';
import Navbar from '../components/global/Navbar.vue';
import { ref } from "vue";

const team = ref(DummyTeamInfoArr);
</script>