<template>
  <div class="hello" style="margin-top:20px">
    我是子组件计数器：
    <button @click="addClick">{{ state.count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { testStore } from '@/store/modules/test'

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0
    });
    const addClick = () => {
      state.count++;
    };

    console.log('store', testStore.str)
    testStore.mutTest('ds')
    console.log('store',testStore)
    console.log('store222',testStore.str)
    return {
      state,
      addClick
    };
  }
});
</script>

<style scoped lang="scss"></style>