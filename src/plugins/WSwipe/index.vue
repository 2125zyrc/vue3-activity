<template>
  <div v-if="options.list">
    <div class="img-box" v-if="isSingle">
      <img :src="fistImage">
    </div>
    <div v-else>
      <van-swipe class="my-swipe" :autoplay="3000" lazy-render indicator-color="white">
        <van-swipe-item v-for="(item,index) in options.list" :key="index">
          <img :src="item">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    options: {
      type: Object,
    }
  },
  setup (props) {
    //第一张图片
    const fistImage =computed(()=> (props.options.list[0] ))
    //是否是单张
    const isSingle = computed(() => props.options.list.length <= 1)

    return {
      isSingle,
      fistImage
    }
  }
})
</script>

<style lang="scss" scoped>
  $height: 175px;

 .my-swipe .van-swipe-item {
    height: $height;
  }
  .img-box{
    height: $height;
    width: 100%;
    overflow: hidden;
  }
   img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
</style>