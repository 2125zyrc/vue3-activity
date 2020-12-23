import req from '../request'
import { goodsListModal } from './model'

export default {
  async getGoodsList(data: object):Promise<goodsListModal>{
    return await req.get('/mall/enterpriseCategory/getList', data);
  },
};
