<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen h-full font-inter font-medium text-[48px]"
  >
    <div class="grid grid-cols-2 gap-y-[30px] gap-x-[56px] auto-rows-min">
      <SwitchTabs class="col-start-2" />
      <ComponentsBlock class="col-start-1" />
      <ConstructorBlock class="col-start-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SwitchTabs from "./components/SwitchTabs.vue";
import ComponentsBlock from "./components/ComponentsBlock.vue";
import ConstructorBlock from "./components/ConstructorBlock.vue";
</script>
