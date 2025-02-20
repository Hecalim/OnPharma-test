<template>
    <nav class="main-nav flex relative">
      <NavItem
        v-for="(tab, index) in tabs"
        :key="tab.name"
        :name="tab.name"
        :isActive="activeTab === index"
        :iconClass="tab.iconClass"
        @click="setActiveTab(index)"
      />
    </nav>
  </template>
  
  <script>
  import NavItem from './NavItem.vue';
  
  export default {
    components: {
      NavItem
    },
    props: {
      tabs: Array,
      activeTab: Number
    },
    methods: {
      setActiveTab(index) {
        this.$emit('updateActiveTab', index);
      }
    }
  };
  </script>
  
  <style scoped>
  .main-nav {
    @apply fixed flex justify-between items-center bg-[#F5F5F5] pt-4 pb-2 px-8;
    bottom: 16px;
    width: clamp(calc(120px - 32px), calc(100vw - 32px), calc(480px - 32px));
    border-radius: 28px;
    box-shadow: 
      inset 4px 4px 16px rgba(0 0 0 / .08),
      inset -8px -8px 16px 0 rgba(255 255 255 / 1),
      0 1px 0 0 rgba(0 0 0 / .16),
      24px 8px 12px 0 rgba(0 0 0 / 0.12);
  }
  </style>
  