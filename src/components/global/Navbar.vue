<template>
  <nav class="bg-[#19315b] border-gray-200">

    <div class="flex flex-wrap items-center justify-between mx-auto p-4">

      <RouterLink to="/dashboard" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/itc_logo.svg" class="h-8" alt="ITC Logo" />
        <span class="self-center text-2xl font-light whitespace-nowrap text-[#fff]">{{ AdminIntroHeaderText }}</span>
      </RouterLink>

      <div v-if="!preLoginScreen" class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

        <button type="button"
          class="flex text-sm cursor-pointer bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button">
          <span class="sr-only"></span>
          <img class="w-8 h-8 rounded-full"
            src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="user photo" />
        </button>

        <div id="user-dropdown"
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow">

          <div class="px-4 py-3">
            <span class="block text-sm text-black">{{ authStore?.user?.name }}</span>
            <span class="block text-sm text-gray-500 truncate">{{ authStore?.user?.email }}</span>
          </div>

          <ul class="py-2" aria-labelledby="user-menu-button">
            <li class="block px-4 py-2 cursor-pointer text-sm text-black-700 hover:bg-gray-100"
              @click="handleUserClick(UserOperationEnum.Open_Dashboard)">{{ FirstOptionText }}
            </li>
            <li class="block px-4 py-2 cursor-pointer text-sm text-black-700 hover:bg-gray-100"
              @click="handleUserClick(UserOperationEnum.Open_Settings)">{{ FourthOptionText }}
            </li>
            <li class="block px-4 py-2 cursor-pointer text-sm text-black-700 hover:bg-gray-100"
              @click="handleUserClick(UserOperationEnum.Handle_Signout)"> {{ FifthOptionText }}
            </li>
          </ul>

        </div>

      </div>

      <div v-if="!preLoginScreen" class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-user">

        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#19315b] 
                  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>

            <RouterLink to="/dashboard"
              :class="['block py-2 px-3 cursor-pointer rounded-sm md:bg-transparent md:p-0', isActive('/dashboard')]">
              {{ FirstOptionText }}
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/users"
              :class="['block py-2 px-3 cursor-pointer rounded-sm md:bg-transparent md:p-0', isActive('/users')]">
              {{ SecondOptionText }}
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/about-us"
              :class="['block py-2 px-3 cursor-pointer rounded-sm md:bg-transparent md:p-0', isActive('/about-us')]">
              {{ ThirdOptionText }}
            </RouterLink>
          </li>
        </ul>

      </div>

    </div>

  </nav>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { Dropdown } from "flowbite";
import { useAuthStore } from "../../stores/auth";
import { useUserStore } from "../../stores/user";
import { AdminIntroHeaderText, FeatureUnderDevelopmentInfoText, FifthOptionText, FirstOptionText, FourthOptionText, SecondOptionText, ThirdOptionText, MsgTypeEnum, UserOperationEnum } from "../../utils/AppConstant";
import { AppUtils } from "../../utils/AppUtils";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const userStore = useUserStore();

defineProps<{ preLoginScreen: boolean }>();

onMounted(() => {

  const dropdownButton = document.getElementById('user-menu-button');
  const dropdownMenu = document.getElementById('user-dropdown');

  if (dropdownButton && dropdownMenu) {
    new Dropdown(dropdownMenu, dropdownButton, {
      placement: 'bottom-end',
      offsetSkidding: 0,
      offsetDistance: 5,
    });
  }

});

const isActive = (path: string): string => {
  return route.path === path ? 'text-[#d2b199]' : 'text-white hover:text-[#d2b199]';
};

const handleUserClick = (selectedUserActionEnum: number): void => {

  switch (selectedUserActionEnum) {

    default:
      break;

    case UserOperationEnum.Open_Dashboard:
      router.push('/dashboard');
      break;

    case UserOperationEnum.Open_Settings:
      AppUtils.showToastMsg(FeatureUnderDevelopmentInfoText, MsgTypeEnum.Info);
      break;

    case UserOperationEnum.Handle_Signout:
      authStore.logout();
      userStore.clearUserList();
      router.push('/')
      break;

  }

}
</script>

<style lang="css" scoped></style>
