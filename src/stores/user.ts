import { defineStore } from "pinia";
import { UserListKey } from "../utils/AppConstant";
import type { UserList } from "../types/Interface";

export const useUserStore = defineStore("user", {

  state: () => ({
    userList: [] as UserList
  }),
  actions: {
    loadUserListFromStorage(): void {
      const rawUserList: string | null = localStorage.getItem(UserListKey);
      let userList = [];
      if (rawUserList && rawUserList?.length > 0) {
        userList = JSON.parse(rawUserList);
      }
      this.userList = userList;
    },
    setUserList(userList: UserList): void {
      // console.log('userList: ' + JSON.stringify(userList));
      this.userList = userList;
      localStorage.setItem(UserListKey, JSON.stringify(this.userList));
    },
    clearUserList(): void {
      this.userList = [];
      localStorage.removeItem(UserListKey);
    },
  },
  getters: {
    getUserList(state): UserList {
      return state.userList;
    }
  }
});