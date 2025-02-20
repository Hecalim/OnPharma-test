<!-- Tab1.vue -->
<script setup>
import { useTabStore } from '../store/store';

const store = useTabStore();
</script>

<template class="grow shrink basis-0">
    <h2 class="main-title">Search</h2>
    <label for="search" class="input flex flex-row p-0">
      <i ></i>
      <input type="search" name="" id="" class="grow">
    </label>
    <div class="flex flex-row items-start justify-between w-[80%] mx-auto">
      <button type="button" class="aspect-square"></button>
      <button type="button" class="aspect-square"></button>
      <button type="button" class="aspect-square"></button>
      <button type="button" class="aspect-square"></button>
    </div>
</template>


<script>
export default {
  name: 'Tab1'
};
</script>
