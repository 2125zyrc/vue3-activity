import Axios,{ AxiosRequestConfig,AxiosResponse, AxiosError } from 'axios';
import { getToken } from '@/utils/auth';

const service = Axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
})

interface responseFormat <T = any>{
  code: string,
  data: T,
  isError: boolean,
  message: string,
}


service.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const ticket = getToken();
  if(ticket){
    config.headers.ticket = ticket
  }
  return config
})

/**
 * @description 响应收到后的拦截器
 * @returns {}
 */
service.interceptors.response.use(
  /** 请求有响应 */
  async (response: AxiosResponse) => {
    const data: responseFormat = response.data;
    if (!data.isError && data.code === '0') {
      return Promise.resolve(response.data)
    } else {
      console.error('message', data.message)
      // return Promise.reject(new Error(data.message))
    }
  },
  /** 请求无响应 */
  (error: AxiosError) => {
    console.error('message', error.message)
    // let err: string = error.message || ''
    // return Promise.reject(err);
  }
)


export default service

export {
  responseFormat
}
