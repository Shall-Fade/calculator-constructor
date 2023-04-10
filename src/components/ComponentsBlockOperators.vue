<template>
  <div
    class="grid grid-cols-4 gap-[8px] bg-white shadow-lg p-[4px] rounded-[4px]"
    :class="[openTab === 'Constructor' ? 'pointer-events-none' : '']"
  >
    <base-button @click="getOperator(operator)" v-for="operator in operators">
      {{ operator }}
    </base-button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref, computed } from "vue";

// Переменные
const store = useStore();
const result = computed(() => store.state.result);
const openTab = computed(() => store.state.openTab);
const operators = ["/", "X", "-", "+"];
const operation = ref();

// Получить оператор
function getOperator(operator: string) {
  switch (operator) {
    case "+":
      operation.value = (a: string, b: string): number => {
        return parseFloat(a) + parseFloat(b);
      };
      break;
    case "-":
      operation.value = (a: string, b: string): number => {
        return parseFloat(a) - parseFloat(b);
      };
      break;
    case "X":
      operation.value = (a: string, b: string): number => {
        return parseFloat(a) * parseFloat(b);
      };
      break;
    case "/":
      operation.value = (a: string, b: string): number => {
        return parseFloat(a) / parseFloat(b);
      };
      break;
  }

  store.commit("ADD_PREVIOUS_VALUE", result.value);
  store.commit("ADD_OPERATION", operation.value);
  store.commit("TOGGLE_OPERATOR_CLICKED", true);
}
</script>
