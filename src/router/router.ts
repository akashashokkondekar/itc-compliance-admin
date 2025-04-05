import { createRouter, createWebHistory } from "vue-router";
import UserListPage from "../pages/Users.vue";
import DashboardPage from "./../pages/Dashboard.vue";
import { useAuthStore } from "../stores/auth";
import Login from "./../pages/Login.vue";

const routes = [
  { 
    path: "/:pathMatch(.*)*", 
    component: () => import('../pages/NotFound.vue'), 
    name: "NotFoundPage", 
    meta: { requiresAuth: false } 
  },
  { 
    path: "/", 
    component: Login, 
    name: "LoginPage", 
    meta: { requiresAuth: false } 
  },
  { 
    path: "/users",
    component: UserListPage,
    name: "UsersPage", 
    meta: { requiresAuth: true } 
  },
  { 
    path: "/about-us", 
    component: () => import('../pages/AboutUs.vue'), 
    name: "AboutUsPage", 
    meta: { requiresAuth: true } 
  },
  { 
    path: "/dashboard", 
    component: DashboardPage, 
    name: "DashboardPage", 
    meta: { requiresAuth: true } 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route Guard
router.beforeEach((to, _from, next) => {
  
  const authStore = useAuthStore();
  if (!authStore.token) {
    authStore.loadFromStorage();
  }

  if (to.meta.requiresAuth && !authStore.token) {
    next("/");
  } else if (to.path === "/" && authStore.token) {
    next("/dashboard");
  } else {
    next();
  }

});

export default router;

