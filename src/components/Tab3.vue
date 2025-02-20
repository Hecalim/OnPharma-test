<!-- Tab3.vue -->
<script setup>
import { useTabStore } from '../store/store';


const store = useTabStore();
</script>

<template>
  <h2 class="main-title">Notifications</h2>
  <div class="flex flex-row items-center justify-between mt-4">
    <span class="sub-title" for="switch">
      Enable notifications
    </span>
    <label class="switch">
      <input type="checkbox" name="switch" id="switch">
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Tab3'
};
</script>
