<template>
  <div
    class="grid grid-cols-3 gap-[8px] bg-white shadow-lg p-[4px] rounded-[4px]"
    :class="[
      openTab === 'Constructor' ? 'pointer-events-none' : '',
    ]"
  >
    <base-button
      @click="getNumber(number)"
      :class="[number === '0' ? 'col-span-2' : '']"
      v-for="number in numbers"
    >
      {{ number }}
    </base-button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref, computed } from "vue";

// Переменные
const store = useStore();
const operatorIsClicked = computed(() => store.state.operatorIsClicked);
const result = computed(() => store.state.result);
const openTab = computed(() => store.state.openTab);
const currentResult = ref(result.value);
const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ","];

// Получить число
function getNumber(number: string) {
  if (number == "," && result.value.indexOf(".") === -1) {
    number = ".";
  } else if (number == "," && result.value.indexOf(".") !== -1) {
    number = "";
  }

  if (operatorIsClicked.value) {
    store.commit("ADD_RESULT", "");
    store.commit("TOGGLE_OPERATOR_CLICKED", false);
  }

  currentResult.value = `${result.value}${number}`;
  store.commit("ADD_RESULT", currentResult.value);
}
</script>
