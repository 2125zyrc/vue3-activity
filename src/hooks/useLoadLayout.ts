import {  defineAsyncComponent } from "vue";

const useLoadLayout =()=>{
  return {
    GoodsList: defineAsyncComponent(()=>import('@/plugins/GoodsList.vue'))
  }
}

export default useLoadLayout