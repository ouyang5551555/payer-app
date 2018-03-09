import axios from 'axios'
import { param } from "./util";

//const API = 'http://www.gc360.com/'


// 设置全局axios默认值
axios.defaults.timeout = 5000 // 5000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/jsoncharset=UTF-8'
//axios.defaults.baseURL = API

const defaultData = {
  //请求中...
  transformRequest: [function (data, headers) {
    // console.log(data, headers)  //post请求主体
    return data;
  }],

  //响应完成
  transformResponse: [function (res) {
    let data = JSON.parse(res)
    return data
  }],

  //序列化
  paramsSerializer: function(params) {
    return param(params)
  },

  //上传进度
  onUploadProgress: function (progressEvent) {

  },

  // 下载进度
  onDownloadProgress: function (progressEvent) {

  },

  // 用作 xsrf 令牌的值的cookie的名称
  xsrfCookieName: 'token',

  // 携带 xsrf 令牌值的http头的名称
  // xsrfHeaderName: 'token',

  // `validateStatus`定义是否解析或拒绝给定的promise
  // HTTP响应状态码。如果`validateStatus`返回`true`（或被设置为`null` promise将被解析;否则，promise将被
  // 拒绝。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects`定义在node.js中要遵循的重定向的最大数量。
  // 如果设置为0，则不会遵循重定向。
  maxRedirects: 5, // 默认

  //发送cookie
  withCredentials: false,

  proxy: {
    host: 'sc.h5.dev',
    port: 3000,
    auth: {
      username: 'ouy123',
      password: '******'
    }
  },
}

export default {

  post(url, data) {
    return axios(Object.assign({
      url,
      data,
      method: 'post',
      headers: {
        'Content-Type': 'application/jsoncharset=UTF-8'
      }
    }, defaultData))
  },

  get (url, data) {
    return axios(Object.assign({
      url,
      params: data,
      method: 'get'
    }, defaultData))
  },

  upload(url, data) {
    return axios(Object.assign({
      url,
      data,
      method: 'post',
      headers: {
        'Content-Type': null
      }
    }, defaultData))
  }
}
