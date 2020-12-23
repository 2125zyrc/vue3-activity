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
  async setup() {
    const state = reactive({
      count: 0
    });
    const addClick = () => {
      state.count++;
    };

    console.log('store222',testStore)
    const res = await testStore.actionTest()
    return {
      state,
      addClick
    };
  }
});
</script>

<style scoped lang="scss"></style>