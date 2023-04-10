<template>
  <div
    class="relative w-[240px] border-2 border-dashed border-[#c4c4c4] rounded-[6px]"
  >
    <div
      v-if="finalComponentsList.length === 0"
      class="absolute w-full h-full flex flex-col items-center justify-center"
    >
      <svg
        class="mb-[12px] w-[20px] h-[20px]"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.7778 1V5.44444"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M21 3.22222L16.5556 3.22222"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M12.3889 3.22222H5C2.79086 3.22222 1 5.01309 1 7.22223V16.2778M18.7778 9.61111V17C18.7778 19.2091 16.9869 21 14.7778 21H5C2.79086 21 1 19.2091 1 17V16.2778M1 16.2778L4.83824 12.4395C6.40034 10.8774 8.93298 10.8774 10.4951 12.4395C11.8961 13.8406 13.5664 15.5108 14.8889 16.8333"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M18.7778 14.6111L18.2729 14.1062C16.7108 12.5441 14.1781 12.5441 12.616 14.1062L12.3889 14.3333"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="12.1111" cy="7.66667" r="0.555556" fill="black" />
      </svg>
      <h5
        class="mb-[4px] font-medium text-[14px] leading-[17px] text-blue-iris text-center"
      >
        Перетащите сюда
      </h5>
      <p
        class="w-[105px] text-[12px] leading-[15px] text-[#6B7280] text-center"
      >
        любой элемент из левой панели
      </p>
    </div>
    <draggable
      class="w-full h-full grid gap-[12px]"
      v-model="finalComponentsList"
      group="transition-group"
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
import draggable from "vuedraggable";
import ComponentsBlockDisplay from "./ComponentsBlockDisplay.vue";
import ComponentsBlockEquals from "./ComponentsBlockEquals.vue";
import ComponentsBlockNumbers from "./ComponentsBlockNumbers.vue";
import ComponentsBlockOperators from "./ComponentsBlockOperators.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";

// Переменные
const store = useStore();
const finalComponentsList = ref([]);
const openTab = computed(() => store.state.openTab);

// Переключить режим калькулятора
function toggleCalculatorMode()  {
  if (openTab.value === "Runtime") {
    return true;
  } else if (openTab.value === "Constructor") {
    return false;
  }
}
</script>
