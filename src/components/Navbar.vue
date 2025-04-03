<template>
  <nav class="background-color-19315b border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/dashboard" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://www.itccompliance.com/img/itc_logo.7fa7c0aa.svg" class="h-8" alt="ITC Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Admin Portal</span>
      </RouterLink>

      <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
            <span class="block text-sm text-gray-500 truncate dark:text-gray-400">{{ authStore?.user?.email }}</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <RouterLink to="/dashboard" class="block px-4 py-2 text-sm text-black-700 hover:bg-gray-100"> {{ FirstOptionText }}
              </RouterLink>
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

      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg background-color-19315b 
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

import { onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Dropdown } from 'flowbite';
import { useAuthStore } from "./../stores/auth";
import { FeatureUnderDevelopmentInfoText, FifthOptionText, FirstOptionText, FourthOptionText, SecondOptionText, ThirdOptionText, ToastTypeEnum, UserOperationEnum } from '../utils/AppConstant';
import { AppUtils } from '../utils/AppUtils';
import { useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter()
const authStore = useAuthStore();

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
  return route.path === path ? 'text-d2b199' : 'text-white hover:text-d2b199';
};

const handleUserClick = (selectedUserActionEnum: number): void => {

  switch (selectedUserActionEnum) {

    default:
      break;

    case UserOperationEnum.Open_Settings:
      AppUtils.showToastMsg(FeatureUnderDevelopmentInfoText, ToastTypeEnum.Info);
      break;

    case UserOperationEnum.Handle_Signout:
      authStore.logout();
      router.push('/')
      break;

  }

}
</script>
