<template>
  <nav class="background-color-19315b border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/dashboard" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://www.itccompliance.com/img/itc_logo.7fa7c0aa.svg" class="h-8" alt="ITC Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Admin Portal</span>
      </RouterLink>

      <!-- Profile Button -->
      <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button"
          class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full"
            src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="user photo" />
        </button>

        <!-- Dropdown Menu -->
        <div id="user-dropdown"
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
          <div class="px-4 py-3">
            <span class="block text-sm text-white">Bonnie Green</span>
            <span class="block text-sm text-gray-500 truncate dark:text-gray-400">name@ITC.com</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                out</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg background-color-19315b 
                  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <RouterLink to="/dashboard"
              :class="['block py-2 px-3 rounded-sm md:bg-transparent md:p-0', isActive('/dashboard')]">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/users"
              :class="['block py-2 px-3 rounded-sm md:bg-transparent md:p-0', isActive('/users')]">
              Users
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about-us"
              :class="['block py-2 px-3 rounded-sm md:bg-transparent md:p-0', isActive('/about-us')]">
              About Us
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Dropdown } from 'flowbite';

const route = useRoute();

const isActive = (path: string) => {
  return route.path === path ? 'text-d2b199' : 'text-white hover:text-d2b199';
};

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
</script>
