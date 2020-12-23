import  store from '../index'
import api from '@/api/test'
import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, dynamic: true, store, name: 'test'})
export default class Test extends VuexModule {
  str = '12121'
  posts = null
  @Mutation
  mutTest() {
    this.str = this.str + new Date().getTime()
  }

  @Action({ rawError: true })
  async actionTest() {
    const xx =   await api.getGoodsList({})
    console.log('xx',xx.data[0].id)
  }
}

export const testStore = getModule(Test);