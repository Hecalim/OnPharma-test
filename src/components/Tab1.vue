<!-- Tab1.vue -->
<script setup>
import { useTabStore } from '../store/store';

const store = useTabStore();
</script>

<template class="grow shrink basis-0">
    <h2 class="main-title">Search</h2>
    <label for="search" class="input flex flex-row items-center justify-start gap-x-4 p-0">
      <i class="fa-solid fa-search"></i>
      <input type="search" name="search" id="search" class="grow bg-transparent">
    </label>
    <div class="flex flex-row items-start justify-between w-[80%] mx-auto">
      <button type="button" class="btn w-[48px]">
        <i class="fa fa-bell"></i>
      </button>
      <button type="button" class="btn">
        <i class="fa fa-star"></i>
      </button>
      <button type="button" class="btn">
        <i class="fa fa-home"></i>
      </button>
      <button type="button" class="btn">
        <i class="fa fa-user"></i>
      </button>
      <button type="button" class="btn">
        <i class="fa fa-cloud"></i>
      </button>
    </div>
</template>


<script>
export default {
  name: 'Tab1'
};
</script>
