<template>
  <div
    class="flex items-center justify-between bg-light-gray rounded-[6px] p-[1px]"
  >
    <button
      @click="changeTab('Runtime')"
      :class="[
        openTab === 'Runtime' ? 'bg-white border border-[#E2E3E5]' : 'bg-none',
      ]"
      class="border border-light-gray h-full flex items-center rounded-[5px] px-[12px] py-[7px]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :class="[
            openTab === 'Runtime' ? 'stroke-blue-iris' : 'stroke-[#4D5562]',
          ]"
          d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z"
          stroke="#4D5562"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          :class="[
            openTab === 'Runtime' ? 'stroke-blue-iris' : 'stroke-[#4D5562]',
          ]"
          d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z"
          stroke="#4D5562"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p class="ml-[8px] text-medium-gray text-[14px] leading-[15px]">
        Runtime
      </p>
    </button>
    <button
      @click="changeTab('Constructor')"
      :class="[
        openTab === 'Constructor'
          ? 'bg-white border border-[#E2E3E5]'
          : 'bg-none',
      ]"
      class="border border-light-gray h-full flex items-center bg-none rounded-[5px] px-[12px] py-[7px]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :class="[
            openTab === 'Constructor' ? 'stroke-blue-iris' : 'stroke-[#4D5562]',
          ]"
          d="M4.5 8.33334L1.16666 5.00001L4.5 1.66668M9.5 1.66668L12.8333 5.00001L9.5 8.33334"
          stroke="#4D5562"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p class="ml-[8px] text-medium-gray text-[14px] leading-[15px]">
        Constructor
      </p>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

// Переменные
const store = useStore();
const openTab = computed(() => store.state.openTab);

// Переключить режим
function changeTab(tab: string) {
  store.commit("CHANGE_OPEN_TAB", tab);
}
</script>
