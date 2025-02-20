<script setup>
import { useTabStore } from './store/store';
import { useRouter } from 'vue-router';

const store = useTabStore();
const router = useRouter();

function changeTab(tab) {
  store.setActiveTab(tab);
  router.push(`/${tab}`);
}
</script>


<template>
  <main class="tabs relative flex flex-col items-stretch h-[100dvh] w-[inherit] bg-white gap-y-4">
    <MainNav :tabs="tabs" :activeTab="activeTab" @updateActiveTab="setActiveTab" />
    <section class="tab-content contents mt-4 p-4">
      <Tab1 v-if="activeTab === 0" />
      <Tab2 v-if="activeTab === 1" />
      <Tab3 v-if="activeTab === 2" />
      <Tab4 v-if="activeTab === 3" />
    </section>
  </main>
</template>

<script>
import Tab1 from './components/Tab1.vue';
import Tab2 from './components/Tab2.vue';
import Tab3 from './components/Tab3.vue';
import Tab4 from './components/Tab4.vue';
import MainNav from './components/MainNav.vue';


export default {
  components: {
    Tab1,
    Tab2,
    Tab3,
    Tab4,
    MainNav
  },
  data() {
    return {
      tabs: [
        { name: 'Search', iconClass: 'search-icon' },
        { name: 'Messages', iconClass: 'message-icon' },
        { name: 'Notifications', iconClass: 'notification-icon' },
        { name: 'Account', iconClass: 'account-icon' }
      ],
      activeTab: 0,  // Tab 1 is active

      /* Abandonned idea, underline active tab
      tabWidth: 0,
      tabLeft: 0 */
    };
  },
  mounted() {
    // Abandonned 
    // this.updateUnderlinePosition(); 
  },
  watch: {
    /* Abandonned
    activeTab() {
      this.updateUnderlinePosition(); // Met à jour la position quand activeTab change
    } */
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
      },
    /* Abandonned
    updateUnderlinePosition() {
      // Utiliser $nextTick pour s'assurer que le DOM est mis à jour
      this.$nextTick(() => {
        // Récupérer la référence de l'onglet actif
        const tabElement = this.$refs.tabs[this.activeTab];
        
        if (tabElement) {
          // Mettre à jour la largeur et la position du soulignage
          this.tabWidth = tabElement.offsetWidth;
          this.tabLeft = tabElement.offsetLeft;
        }
      });
    } */
  }
};
</script>

<style scoped>
/* Personnalisation de l'animation ou des styles si nécessaire */
</style>

<style>
main{
  aspect-ratio: 9/16;
  padding: 16px;
  padding-top: 48px;
  border-radius: 36px;
  width: clamp(120px, 100vw, 480px);
  margin: 0 auto;
  text-align: center;
}
</style>
