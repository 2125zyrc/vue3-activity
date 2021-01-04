import PluginsType from './type'
import Coupon from './module/coupon'
import WSwipe from './module/w-swipe'

//config 索引
type configIndex = 'Coupon' | 'WSwipe';
type configList = { [k in configIndex]: PluginsType };

const config: configList = {
  Coupon,
  WSwipe
}
export default config
export {
  config,
  configIndex
}