<template>
  <div>
    <component v-for="item in list" :key="item.key" :options="item.options"  :is="item.key" />
  </div>
</template>

<script>
import { ref, reactive,toRefs,defineComponent } from 'vue'
import useLoadPlugins from '@/hooks/useLoadPlugins'
import { getProps } from '../../utils/plugins-tools'

export default defineComponent({
  components: {
    ...useLoadPlugins()
  },
  setup () {
    const list = ref([
      {key:'WSwipe'},
      {key:'Coupon'},
      {key:'GoodsList'},
    ])

    list.value.map((item)=>{
      const key = item.key;
      item.options = getProps(key)
    })

    return {
      list,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>