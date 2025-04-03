import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
    user: null as any
  }),
  actions: {
    loadFromStorage() {
      this.token = localStorage.getItem("token");
      this.user = JSON.parse(localStorage.getItem("user") || "null");
    },
    setToken(token: string) {
      this.token = token;
      localStorage.setItem("token", token);
    },
    setUser(user: any) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});
