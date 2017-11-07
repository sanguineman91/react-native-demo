
import axios from 'axios';
import config from '../config';


// 创建一个自定义的axios
var instance = axios.create();

// api url 
instance.defaults.baseURL = config.serverURL;
instance.defaults.headers.post['Content-Type'] = 'application/json';

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

/**
 * 设置token
 */
async function setTokenForAxiosInstance() {
  try{
    const token = await global.storage.load({key: 'token'});
    instance.defaults.headers.common['Authorization'] = token;
    return await Promise.resolve(instance);
  }catch(e){
    // 获取token失败，可能是没有存在，忽略
    return await Promise.resolve(instance);
  }
}

/**
 * get request
 * @param {*g} url 
 */
async function get (url) {
  const request = await setTokenForAxiosInstance();
  return await request.get(url);
}

/**
 * post request
 * @param {*} url 
 * @param {*} data 
 */
async function post (url, data) {
  const request = await setTokenForAxiosInstance();
  return await request.post(url, data);
}

/**
 * delete request
 * @param {*g} url 
 */
async function del (url) {
  const request = await setTokenForAxiosInstance();
  return await request.delete(url);
}

/**
 * put request
 * @param {*} url 
 * @param {*} data 
 */
async function put (url, data) {
  const request = await setTokenForAxiosInstance();
  return await request.put(url, data);
}


export const ajax = {
  get: get,
  post: post,
  delete: del,
  put: put
};