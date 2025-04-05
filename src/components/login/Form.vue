<template>
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
          class="absolute right-3 top-2.5 background-color-transparent focus:outline-none">
          {{ showPassword ? HidePasswordIcon : ShowPasswordIcon }}
        </button>

      </div>

      <button
        :class="{ 'rounded-xl py-2 hover:scale-105 duration-300': !disableSignInBtn(), 'rounded-xl py-2 opacity-50 cursor-not-allowed': disableSignInBtn() }"
        :disabled="disableSignInBtn()">
        {{ loading ? PostLoginButtonClickText : LoginFormHeaderText }}
      </button>

      <p v-if="error" class="text-red-500 text-xs">{{ error.message }}</p>
    </form>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "./../../stores/auth";
import { useNetworkStatusStore } from "./../../stores/network";
import { useMutation } from "@vue/apollo-composable";
import { LoginFormHeaderText, LoginFormHeaderDescText, MsgTypeEnum, GenericServerErrorMessageOne, EmailIdPlaceHolderText, PasswordPlaceHolderText, PostLoginButtonClickText, GenericServerErrorMessageTwo, NoInternetConnectionAvailableMsg, MinPasswordCharLength, HidePasswordIcon, ShowPasswordIcon } from "./../../utils/AppConstant";
import { AppUtils } from "../../utils/AppUtils";
import { LOGIN_MUTATION } from "../../graphql/Queries";

const router = useRouter();
const authStore = useAuthStore();
const networkStatus = useNetworkStatusStore();

const email = ref<string>("");
const password = ref<string>("");
const showPassword = ref<boolean>(false);

const emailError = computed(() => {
  return (!email.value || !AppUtils.isValidateEmailAddress(email.value));
});

const passwordError = computed(() => {
  return password.value.trim().length < MinPasswordCharLength;
});

const disableSignInBtn = (): boolean => {
  return (emailError.value || passwordError.value || loading.value || !networkStatus.isOnline);
}

const togglePassword = (): void => {
  showPassword.value = !showPassword.value;
};

const { mutate: login, loading, error } = useMutation(LOGIN_MUTATION);

const handleSignInBtnClick = async () => {

  try {

    if (!networkStatus.isOnline) {
      AppUtils.showToastMsg(NoInternetConnectionAvailableMsg, MsgTypeEnum.Error);
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
        AppUtils.showToastMsg(GenericServerErrorMessageTwo, MsgTypeEnum.Error);
      }

    } else {
      AppUtils.showToastMsg(GenericServerErrorMessageOne, MsgTypeEnum.Error);
    }

  } catch (err) {

  }
}
</script>

<style lang="css" scoped></style>