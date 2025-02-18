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
  <main class="tabs relative" style="height: 100dvh; background-color: red; width: inherit;">
    
    <!-- Tab Navigation -->
    <nav class="flex relative" style="position: fixed; bottom: 0; width: inherit;">
      <button
        type="button"
        v-for="(tab, index) in tabs"
        :key="tab.name"
        @click="setActiveTab(index)"
        ref="tabs"  
        :class="{
          'text-blue-600': activeTab === index,
          'text-gray-500': activeTab !== index
        }"
        class="grow shrink basis-0 cursor-pointer pb-2 transition-colors"
      >
        {{ tab.name }}
      </button>

      <!-- Dynamic underline -->
      <div
        class="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all"
        :style="{
          width: tabWidth + 'px',
          left: tabLeft + 'px'
        }"
      ></div>
    </nav>

    <!-- Tab Content -->
    <section class="tab-content mt-4 p-4" style="min-height:800px;">
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

export default {
  components: {
    Tab1,
    Tab2,
    Tab3,
    Tab4
  },
  data() {
    return {
      tabs: [
        { name: 'Tab 1' },
        { name: 'Tab 2' },
        { name: 'Tab 3' },
        { name: 'Tab 4' }
      ],
      activeTab: 0,  // Tab 1 active par défaut
      tabWidth: 0,
      tabLeft: 0
    };
  },
  mounted() {
    this.updateUnderlinePosition(); // Met à jour la position à la montée du composant
  },
  watch: {
    activeTab() {
      this.updateUnderlinePosition(); // Met à jour la position quand activeTab change
    }
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    },
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
    }
  }
};
</script>

<style scoped>
/* Personnalisation de l'animation ou des styles si nécessaire */
</style>

<style>
.container {
  max-width: 600px;
}
.tab-content div {
  transition: all 0.3s ease-in-out;
}
</style>
