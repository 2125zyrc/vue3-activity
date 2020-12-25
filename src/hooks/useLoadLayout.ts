import {  defineAsyncComponent } from "vue";

import * as path from 'path'
console.log(path);

const useLoadLayout =()=>{
  return {
    GoodsList: defineAsyncComponent(()=>import('@/components/layout/GoodsList.vue'))
  }
}

export default useLoadLayout