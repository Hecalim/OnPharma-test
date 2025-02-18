// store.js
import { defineStore } from 'pinia';

export const useTabStore = defineStore('tabStore', {
  state: () => ({
    activeTab: 'tab1',
    scrollPositions: { tab1: 0, tab2: 0, tab3: 0, tab4: 0 },
    formData: {
      tab1: { name: '', email: '' },
      tab2: { address: '', phone: '' },
      tab3: { address: '', phone: ''},
      tab4: { address: '', phone: ''}
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
