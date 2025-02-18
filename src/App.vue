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
  <div class="container mx-auto p-4">
    <nav class="flex space-x-4 mb-4">
      <button 
        v-for="tab in ['tab1', 'tab2']" 
        :key="tab" 
        @click="changeTab(tab)" 
        :class="['px-4 py-2 rounded', store.activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200']">
        {{ tab.toUpperCase() }}
      </button>
    </nav>

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
.container {
  max-width: 600px;
}
</style>
