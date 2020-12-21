import  store from '../index'
import api from '@/api/index'
import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, dynamic: true, store, name: 'test'})
export default class Test extends VuexModule {
  str = '12121'
  
  @Mutation
  mutTest(n: string) {
    this.str = this.str + new Date().getTime()
  }

  @Action
  async actionTest(wheelStore: string) {
    const posts = await api.getGoodsList({})
    return { posts }
  }
}

export const testStore = getModule(Test);