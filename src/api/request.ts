import axios,{ responseFormat } from './axios';
import qs from 'qs';

type PromiseResponse = Promise<responseFormat>

const get =  async<T>(url: string, params: object): PromiseResponse=>{
  return await axios.get(url, { params});
}

const post =  async(url: string, params: object):PromiseResponse=>{
  return await axios.post(url, { params});
}

const postForm = async(url: string, params: object):PromiseResponse=>{
  return await axios.post(url, qs.stringify(params));
}
const req = {
  get,
  post,
  postForm
}

export default req
export { 
  get,
  post,
  postForm,
  responseFormat
}