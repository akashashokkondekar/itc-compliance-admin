import { createRouter, createWebHistory } from 'vue-router'
import UserListPage from "../pages/Users.vue";
import AboutUsPage from "./../pages/AboutUs.vue";
import DashboardPage from "./../pages/Dashboard.vue";
import { useAuthStore } from "../stores/auth";
import Login from './../pages/Login.vue';

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue'),
//     },
//   ],
// })

// export default router


const routes = [
  { path: "/", component: Login, meta: { requiresAuth: false } },
  { path: "/users", component: UserListPage, meta: { requiresAuth: true } },
  { path: "/about-us", component: AboutUsPage, meta: { requiresAuth: true } },
  { path: "/dashboard", component: DashboardPage, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route Guard
router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  
  // To Ensure that it's loaded before route change
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

