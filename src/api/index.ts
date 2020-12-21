import req from './request'


export default {
  getGoodsList(data: object) {
    return req.get('/mall/enterpriseCategory/getList', data);
  },
};
