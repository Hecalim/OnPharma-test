<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  icon: { type: String, default: "🔥" }, // Icône personnalisable
});

const isActive = ref(false);
const labelRef = ref(null);

// Active le champ et cache l'icône
const activate = () => {
  isActive.value = true;
};

// Vérifie si le clic est en dehors du label
const handleClickOutside = (event) => {
  if (labelRef.value && !labelRef.value.contains(event.target)) {
    isActive.value = false;
  }
};

// Ajout / Suppression de l'event listener
onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
</script>

<template>
  <label
    ref="labelRef"
    :class="{'active-label': isActive}"
    @click="activate"
    class="search-input flex flex-row items-stretch gap-x-1 pl-4 rounded-lg border border-gray-200 :focus-within:border-blue-100;"
  >
    <i v-if="!isActive" :class="icon" class="text-lg text-gray-800 self-center"></i>
    <input type="text" class="grow shrink basis-0"/>
  </label>
</template>

<style scoped>
.search-input{
    height: 48px;
    box-shadow: 0 2px 4px rgba(0 0 0 / .08);
    padding-left: .8rem;
    &:has(i){
        padding-left: 1.2rem;
    }
    input{
        background-color: transparent;
        color: black;
        &:focus{
            outline: transparent;
        }
    }
    &.active-label{
        border-color: blue;
        outline: solid 3px rgba(180 180 255 / .3);
    }
}
label {
  gap: 8px;

  transition: all 0.3s ease;
  cursor: pointer;
}

label.active-label {
  border-color: blue;
  background-color: #f0f8ff;
}

.icon {
  font-size: 20px;
}
</style>
