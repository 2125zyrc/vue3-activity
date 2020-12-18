<template>
  <div class="home">
    <HelloWorld msg="hell333o world" />
    <van-button type="primary" size="large">大号按钮</van-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
