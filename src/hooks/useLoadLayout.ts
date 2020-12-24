import {  defineAsyncComponent } from "vue";
const useLoadLayout =()=>{
  return {
    GoodsList: defineAsyncComponent(()=> import('@/components/layout/GoodsList.vue'))
  }
}

export default useLoadLayout