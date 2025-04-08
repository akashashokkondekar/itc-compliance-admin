import "flowbite";
import { createApp, provide, h } from "vue";
import { createPinia } from "pinia";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import Toast from "vue3-toastify";
import VueAwesomePaginate from "vue-awesome-paginate";
import App from "./App.vue";
import router from "./router/router";
import "vue-awesome-paginate/dist/style.css";
import "vue3-toastify/dist/index.css";
import "./style.css";
import { ServerUtils } from "./utils/ServerUtils";

const apolloClient = new ApolloClient({
  uri: ServerUtils.GetServerURL(),
  cache: new InMemoryCache(),
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(Toast);
app.use(VueAwesomePaginate);
app.use(router);
app.use(createPinia());
app.provide("$toast", Toast);
app.mount("#app");
