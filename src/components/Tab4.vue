<!-- Tab4.vue -->
<script setup>
import { useTabStore } from '../store/store';


const store = useTabStore();
</script>

<template>
    <h2 class="text-xl font-bold mb-4">Formulaire 4</h2>
    <label class="block mb-2">Adresse :</label>
    <input v-model="store.formData.tab4.address" class="border p-2 w-full mb-4" placeholder="Entrez votre adresse">

    <label class="block mb-2">Téléphone :</label>
    <input v-model="store.formData.tab4.phone" class="border p-2 w-full" placeholder="Entrez votre téléphone">
</template>
 
<script>
export default {
  name: 'Tab4'
};
</script>
