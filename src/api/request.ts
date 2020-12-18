import axios from './axios';
import qs from 'qs'

const get =  async(url: string, params: object)=>{
  const res = await axios.get(url, { params});
  return res;
}

const post =  async(url: string, params: object)=>{
  const res = await axios.post(url, { params});
  return res;
}

const postForm = async(url: string, params: object)=>{
  const res = await axios.post(url, qs.stringify(params));
  return res;
}
const q = {
  get,
  post,
  postForm
}

export default q
export { 
  get,
  post,
  postForm
}