<template>
  <div class="home">
    <hello-world msg="hell333o world" />
    <!-- <goods-list /> -->
    <van-button type="primary" size="large">大号按钮</van-button>
    <component :is="'GoodsList'"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import useLoadLayout from '@/hooks/useLoadLayout'
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src


export default defineComponent({
  components: {
    HelloWorld,
    ...useLoadLayout()
    // GoodsList,
    // GoodsList: defineAsyncComponent(()=> import('@/components/layout/GoodsList.vue')),
  },
});
</script>
