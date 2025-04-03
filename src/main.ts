// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import './style.css'

import { createApp, provide, h } from "vue";
import { createPinia } from 'pinia';
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import 'flowbite';
import Toast from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import App from './App.vue'
import router from './router/router'

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(Toast);
app.provide("$toast", Toast);
app.use(router);
app.use(createPinia());
app.mount("#app");
