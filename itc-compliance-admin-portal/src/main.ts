import './assets/main.css'

import { createApp, provide, h } from "vue";
import { createPinia } from 'pinia';
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";


import App from './App.vue'
import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')



const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/", // Replace with your GraphQL API URL
  cache: new InMemoryCache(),
});

// 2️⃣ Create Vue App and Provide Apollo Client
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(router); // Use Vue Router
app.use(createPinia()); // Use Pinia for state management
app.mount("#app"); // Mount the app
