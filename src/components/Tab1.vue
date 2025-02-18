<!-- Tab1.vue -->
<script setup>
import { useTabStore } from '../store/store';

const store = useTabStore();
</script>

<template style="min-height: 800px">
    <h2 class="text-xl font-bold mb-4">Formulaire 1</h2>
    <label class="block mb-2">Nom :</label>
    <input v-model="store.formData.tab1.name" class="border p-2 w-full mb-4" placeholder="Entrez votre nom">

    <label class="block mb-2">Email :</label>
    <input v-model="store.formData.tab1.email" class="border p-2 w-full" placeholder="Entrez votre email">
</template>


<script>
export default {
  name: 'Tab1'
};
</script>
