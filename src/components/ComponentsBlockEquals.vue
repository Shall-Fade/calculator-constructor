<template>
  <div
    class="w-full bg-white shadow-lg p-[4px] rounded-[4px]"
    :class="[openTab === 'Constructor' ? 'pointer-events-none' : '']"
  >
    <button
      :disabled="openTab === 'Constructor'"
      @click="calculate"
      class="flex items-center justify-center w-full h-[64px] bg-blue-iris border border-[#E2E3E5] hover:bg-blue-iris/60 duration-150 rounded-[6px]"
    >
      <p class="text-white text-[14px] leading-[15px] text-center">=</p>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref, computed } from "vue";

// Переменные
const store = useStore();
const result = computed(() => store.state.result);
const previousValue = computed(() => store.state.previousValue);
const operation = computed(() => store.state.operation);
const openTab = computed(() => store.state.openTab);
const currentResult = ref();

// Получить результат
function calculate() {
  if (previousValue.value && result.value && operation.value) {
    currentResult.value = operation.value(previousValue.value, result.value);
    store.commit("ADD_RESULT", currentResult.value);
  }
}
</script>
