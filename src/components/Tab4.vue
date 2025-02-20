<!-- Tab4.vue -->
<script setup>
import { useTabStore } from '../store/store';


const store = useTabStore();
</script>

<template>
    <h2 class="main-title">Account</h2>
    <form>
      <fieldset class="flex flex-col items-stretch gap-y-2">
        <h3 class="sub-title my-4">Personal informations</h3>
        <div class="flex flex-row justify-between gap-x-4">
          <div class="flex flex-col items-stretch gap-y-1">
            <label class="label" for="">Firstname</label>
            <input type="text" v-model="store.formData.tab4.firstname" class="input w-full" placeholder="Firstname">
          </div>
          <div class="flex flex-col items-stretch gap-y-1">
            <label class="label">Lastname</label>
            <input type="text" v-model="store.formData.tab4.lastname" class="input w-full" placeholder="Lastname">
          </div>
        </div>
        <div class="flex flex-col items-stretch gap-y-1">
          <label class="label">Email</label>
          <input type="email" name="" id="" v-model="store.formData.tab4.email" class="input">
        </div>
        <div class="flex flex-col items-stretch gap-y-1">
          <label class="label">Phone number</label>
          <input type="tel" name="" id="" class="input" v-model="store.formData.tab4.phone">
        </div>
      </fieldset>
      <fieldset class="flex flex-col items-stretch gap-y-2">
        <h3 class="sub-title my-8">Contract details</h3>
        <div class="flex flex-col items-stretch gap-y-1">
          <label class="label">Contract name</label>
          <input type="text" name="" id="" class="input" v-model="store.formData.tab4.contractName">
        </div>
      </fieldset>
    </form>

</template>
 
<script>
export default {
  name: 'Tab4'
};
</script>
