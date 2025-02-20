<template>
    <button
      type="button"
      @click="handleClick"
      :class="['nav-item', { 'nav-item__active': isActive }]"
    >
      <i class="fa  text-xl" :class="[iconClass, isActive ? 'text-gray-100': 'text-gray-800']"></i>
      <span>{{ name }}</span>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      isActive: Boolean,
      iconClass: String
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .nav-item {
    @apply bg-transparent grow shrink basis-0 cursor-pointer flex flex-col items-center justify-center;
    i{
        @apply flex items-center justify-center w-[48px] aspect-square rounded-full;
    }
    span{
        @apply text-gray-400 text-sm font-medium;
    }
    &__active{
        i{
            @apply bg-gray-900;
        }
        span{
            @apply text-gray-900;
        }
    }
  }
  </style>
  