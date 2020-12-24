import {  defineAsyncComponent } from "vue";
import path from 'path';

const modulesFiles:any = require.context("@/components/layout", true, /\.vue$/);
// console.log(path)
interface itemRow {
  name: string,
  pathStr: string
}

const modules =  modulesFiles.keys().reduce((modules:Array<itemRow>, modulePath:string):Array<itemRow> => {
  const name = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  // const pathStr = path.join('/','/')
  modulePath = modulePath.split('./')[1]
  const item:itemRow = {
    name,
    pathStr: `@/components/layout/${modulePath}`
  }
  return modules.concat(item)
}, []);

console.log(modules)

const useLoadLayout =()=>{
  let layout:any = { };
  modules.map((item: itemRow)=>{
    const x = '@/components/layout/GoodsList.vue'
    layout[item.name] = defineAsyncComponent(()=>import(x))
  })
  return layout
}

export default useLoadLayout