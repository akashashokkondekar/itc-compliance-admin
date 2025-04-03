import { defineStore } from "pinia";

export const networkStatusStore = defineStore("network", {
  state: () => ({
    isOnline: true as boolean | undefined | null 
  }),
  actions: {
    setNetworkStatus(isOnline: boolean) {
      this.isOnline = isOnline;
    }
  },
});
