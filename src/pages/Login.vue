<template>

  <section class="background-color-19315b min-h-screen flex items-center justify-center">

    <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

      <div class="md:w-1/2 px-8 md:px-16">
        <h2 class="font-bold text-2xl text-[#002D74]">{{ LoginFormHeaderText }}</h2>
        <p class="text-xs mt-4 text-[#002D74]">{{ LoginFormHeaderDescText }}</p>

        <form @submit.prevent="handleSignInBtnClick" class="flex flex-col gap-4">
          <input class="p-2 mt-8 rounded-xl border" type="email" name="email" :placeholder="EmailIdPlaceHolderText"
            v-model="email">
          <div class="relative">
            <input class="p-2 rounded-xl border w-full" :type="showPassword ? 'text' : 'password'" name="password"
              :placeholder="PasswordPlaceHolderText" v-model="password">
            <button type="button" @click="togglePassword"
              class="absolute right-3 top-2.5 text-gray-600 focus:outline-none">
              {{ showPassword ? "🙈" : "👁️" }}
            </button>
          </div>
          <button
            :class="{ 'bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300': !disableSignInBtn(), 'bg-[#002D74] rounded-xl text-white py-2 opacity-50 cursor-not-allowed': disableSignInBtn() }"
            :disabled="disableSignInBtn()">
            {{ loading ? PostLoginButtonClickText : LoginFormHeaderText }}
          </button>
          <p v-if="error" class="text-red-500 text-xs">{{ error.message }}</p>
        </form>

      </div>

      <div class="md:block hidden w-1/2">
        <img class="rounded-2xl"
          src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          lazy="true">
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">

import { ref, computed } from "vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRouter } from "vue-router";
import { useAuthStore } from "./../stores/auth";
import { useNetworkStatusStore } from "./../stores/network";
import { LoginFormHeaderText, LoginFormHeaderDescText, ToastTypeEnum, GenericServerErrorMessageOne, EmailIdPlaceHolderText, PasswordPlaceHolderText, PostLoginButtonClickText, GenericServerErrorMessageTwo, NoInternetConnectionAvailableMsg } from "./../utils/AppConstant";
import { AppUtils } from "../utils/AppUtils";

const router = useRouter();
const authStore = useAuthStore();
const networkStatus = useNetworkStatusStore();

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const emailError = computed(() => {
  return (!email.value || !AppUtils.isValidateEmailAddress(email.value));
});

const passwordError = computed(() => {
  return password.value.trim().length === 0;
});

const disableSignInBtn = (): boolean => {
  return (emailError.value || passwordError.value || loading.value || !networkStatus.isOnline);
}

const togglePassword = (): void => {
  showPassword.value = !showPassword.value;
};

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;

const { mutate: login, loading, error } = useMutation(LOGIN_MUTATION);

const handleSignInBtnClick = async () => {

  try {

    if (!networkStatus.isOnline) {
      AppUtils.showToastMsg(NoInternetConnectionAvailableMsg, ToastTypeEnum.Error);
      return;
    }

    const result = await login({ email: email.value, password: password.value });
    if (result && result.data) {

      const { data } = result;
      if (data?.login?.token) {

        authStore.setToken(data.login.token);
        authStore.setUser(data.login.user);
        router.push("/dashboard");

      } else {
        AppUtils.showToastMsg(GenericServerErrorMessageTwo, ToastTypeEnum.Error);
      }

    } else {
      AppUtils.showToastMsg(GenericServerErrorMessageOne, ToastTypeEnum.Error);
    }

  } catch (err) {

  }
};
</script>
<style lang="css" scoped></style>
