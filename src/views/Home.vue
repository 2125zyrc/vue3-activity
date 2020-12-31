<template>
  <div class="home" style="height: 50px">
    <components-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentsList from "@/components/ComponentsList/index.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    ComponentsList,
  },
});
</script>
<style lang="scss">
.home {
  width: 375px;
  margin: 0 auto;
}
</style>
