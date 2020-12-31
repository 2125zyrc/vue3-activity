import {  defineAsyncComponent } from "vue";

const useLoadPlugins =()=>{
  return {
    GoodsList: defineAsyncComponent(()=>import('@/plugins/GoodsList.vue')),
    WSwiper: defineAsyncComponent(()=>import('@/plugins/WSwipe/index.vue')),
    Coupon: defineAsyncComponent(()=>import('@/plugins/Coupon/index.vue')),
  }
}

export default useLoadPlugins