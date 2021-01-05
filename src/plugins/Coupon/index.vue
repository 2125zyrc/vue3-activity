<template>
  <swiper
    class="coupon-box"
    :slides-per-view="'auto'"
  >
    <swiper-slide 
    class="swiper-slide"
    v-for="(item,index) in list"
    :key="index"
    >
      <div class="left">
        <span class="rmb">￥</span>
        <span class="num">10</span>
      </div>
      <div class="center">
        <div class="center-top">无门槛</div>
        <div class="center-bottom">2020/12/10-2020/12/20</div>
      </div>
      <div class="right">
        <p>立即</p>
        <p>领劵</p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  import { defineComponent, ref } from "vue";
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper.scss';
  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide,
    },
    setup(){
      const list = ref([1,1,1,1])
      return {
        list
      }
    }
  });
</script>

<style lang="scss">
$color: #FF1111;
$margin: 16px;

.coupon-box{
  box-sizing: border-box;
  margin: $margin 0 $margin $margin;
}

.swiper-slide {
  width: 260px;
  display: flex;
  background: #fff5ec;
  border-radius: 6px;
  display: flex;
  flex-shrink: 0;
  margin-right: $margin;
  .rmb{
      color: $color;
      font-size: 10px;
    }
    .num{
      font-size: 32px;
      color: $color;
      font-weight: 600;
    }
    .left{
      margin-left: 7px;
      line-height: 56px;
    }
    .center{
      margin-left: 7px;
      margin-right: 13px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .center-top{
      font-size: 9px;
      color: rgba(0,0,0,0.50);
      line-height: 13px;
      margin-bottom: 5px;
    }
    .center-bottom{
      font-size: 8px;
      color: rgba(0,0,0,0.50);
      line-height: 11px;
    }
    .right{
      flex: 1;
      height: 56px;
      width: 56px;
      font-size: 10px;
      background: #ff5300;
      border-radius: 0px 6px 6px 0;
      text-align: center;
      color: #ffffff;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p{
        margin: 0;
        &:first-child{
        margin-bottom: 2px;
      }
    }
  }
}
 
    
</style>
