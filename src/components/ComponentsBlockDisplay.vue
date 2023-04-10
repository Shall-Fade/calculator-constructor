<template>
  <div class="bg-white shadow-lg p-[4px] rounded-[4px]">
    <input
      readonly
      v-model="result"
      placeholder="0"
      class="w-full flex justify-end text-right font-extrabold outline-none cursor-default text-[36px] leading-[44px] placeholder:text-dark-gray text-dark-gray px-[8px] py-[4px] bg-light-gray rounded-[6px]"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

// Переменные
const store = useStore();
const result = computed(() => store.state.result);
</script>
