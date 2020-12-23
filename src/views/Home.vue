<template>
  <div class="home">
    <hello-world msg="hell333o world" />
    <van-button type="primary" size="large">大号按钮</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    HelloWorld,
  },
  // async setup() {
  // }
});
</script>
