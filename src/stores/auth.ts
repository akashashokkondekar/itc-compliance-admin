import { defineStore } from "pinia";
import { CurrUserObjKey, CurrUserTokenKey } from "../utils/AppConstant";
import type { UserObj } from "../types/Interface";

export const useAuthStore = defineStore("auth", {

  state: () => ({
    token: null as string | null,
    user: null as any
  }),
  actions: {
    loadCurrUserObjFromStorage() {
      this.token = localStorage.getItem(CurrUserTokenKey);
      this.user = JSON.parse(localStorage.getItem(CurrUserObjKey) || "null");
    },
    setToken(token: string) {
      this.token = token;
      localStorage.setItem(CurrUserTokenKey, token);
    },
    setUser(user: UserObj) {
      this.user = user;
      localStorage.setItem(CurrUserObjKey, JSON.stringify(user));
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem(CurrUserTokenKey);
      localStorage.removeItem(CurrUserObjKey);
    },
  },
});
