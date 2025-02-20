// store.js
import { defineStore } from 'pinia';

export const useTabStore = defineStore('tabStore', {
  state: () => ({
    activeTab: 'tab1',
    scrollPositions: { tab1: 0, tab2: 0, tab3: 0, tab4: 0 },
    formData: {
      tab1: { },
      tab2: { },
      tab3: { },
      tab4: { firstname: '', lastname: '', email: '', phone: '', contractName:''}
    }
  }),
  actions: {
    setActiveTab(tab) {
      this.scrollPositions[this.activeTab] = window.scrollY; // Sauvegarde du scroll
      this.activeTab = tab;
      setTimeout(() => {
        window.scrollTo(0, this.scrollPositions[tab] || 0); // Restauration du scroll
      }, 100);
    },
    updateForm(tab, key, value) {
      this.formData[tab][key] = value;
    }
  }
});
