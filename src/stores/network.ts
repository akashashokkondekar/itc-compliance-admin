import { defineStore } from "pinia";

export const useNetworkStatusStore = defineStore("network", {

  state: () => ({
    isOnline: true as boolean | undefined | null 
  }),
  actions: {
    setNetworkStatus(isOnline: boolean) {
      this.isOnline = isOnline;
    }
  }
  
});
