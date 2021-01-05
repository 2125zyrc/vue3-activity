<template>
  <div class="goods-list-box">
    <goods-item v-for="(item,index) in list" :key="index"/>
  </div>
</template>

<script>
import { defineComponent,ref  } from "vue";
import GoodsItem from './components/GoodsItem'; // @ is an alias to /src

export default defineComponent({
  components: {
    GoodsItem,
  },
  setup(){
    const list = ref(['1','1','1'])
    return {
      list
    }
  }
});
</script>

<style lang="scss" scoped>
.goods-list-box{
  background: #f1faf9;
  border-radius: 24px 24px 0px 0px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
}
</style>