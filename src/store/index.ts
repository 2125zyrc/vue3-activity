// import { createStore,StoreOptions } from "vuex";

// const modulesFiles = require.context('./modules', true, /\.ts$/);

// interface vuexOptions {
//   [propName: string]: StoreOptions<any>;
// }

// const modules = modulesFiles.keys().reduce((modules: vuexOptions, modulePath: string) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
//   const value = modulesFiles(modulePath);
//   modules[moduleName] = value.default;
//   return modules;
// }, {});

// export default createStore({
//   modules,
// });

// @/store/index.ts
import Vuex from 'vuex'

const store = new Vuex.Store({
  /*
  Ideally if all your modules are dynamic
  then your store is registered initially
  as a completely empty object
  */
})


export default store