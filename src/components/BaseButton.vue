<template>
  <button
    :disabled="openTab === 'Constructor'"
    class="flex items-center justify-center w-full h-[48px] bg-white border border-[#E2E3E5] cursor-pointer hover:border-[2px] hover:border-blue-iris duration-50 rounded-[6px]"
  >
    <p class="text-black text-[14px] leading-[15px] text-center">
      <slot></slot>
    </p>
  </button>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

// Переменные
const store = useStore();
const openTab = computed(() => store.state.openTab);
</script>
