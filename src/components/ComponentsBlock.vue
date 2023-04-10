<template>
  <div class="w-[240px]">
    <draggable
      class="grid gap-[12px]"
      group="transition-group"
      v-model="initialComponentsList"
      item-key="id"
      :disabled="toggleCalculatorMode()"
    >
      <template #item="{ element }">
        <div>
          <ComponentsBlockDisplay v-if="element.id === 1" />
          <ComponentsBlockOperators v-if="element.id === 2" />
          <ComponentsBlockNumbers v-if="element.id === 3" />
          <ComponentsBlockEquals v-if="element.id === 4" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import ComponentsBlockDisplay from "./ComponentsBlockDisplay.vue";
import ComponentsBlockOperators from "./ComponentsBlockOperators.vue";
import ComponentsBlockNumbers from "./ComponentsBlockNumbers.vue";
import ComponentsBlockEquals from "./ComponentsBlockEquals.vue";
import draggable from "vuedraggable";
import { ref, computed } from "vue";
import { useStore } from "vuex";

// Переменные
const store = useStore();
const openTab = computed(() => store.state.openTab);
const initialComponentsList = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);

// Переключить режим калькулятора
function toggleCalculatorMode() {
  if (openTab.value === "Runtime") {
    return true;
  } else if (openTab.value === "Constructor") {
    return false;
  }
}
</script>
