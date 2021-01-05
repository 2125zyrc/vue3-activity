import PluginsType from './type'
import Coupon from './module/coupon'
import WSwipe from './module/w-swipe'
import GoodsList from './module/goods-list'

//config 索引
type configIndex = 'Coupon' | 'WSwipe' | 'GoodsList';
type configList = { [k in configIndex]: PluginsType };

//导出配置
const config: configList = {
  Coupon,
  WSwipe,
  GoodsList
}
export default config
export {
  config,
  configIndex
}