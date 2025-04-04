<template>
  <section class="background-color-19315b min-h-screen flex flex-col">
    <Navbar :preLoginScreen="true" />
    <div class="flex items-center justify-center ">
      <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <Form />
        <Banner />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Navbar from "../components/global/Navbar.vue";
import Form from "../components/login/Form.vue";
import Banner from "../components/login/Banner.vue";
</script>

<style lang="css" scoped></style>
