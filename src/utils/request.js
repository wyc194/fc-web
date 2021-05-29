import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'

const showStatus = status => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}

const service = axios.create({
  // 联调
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/apis',
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  timeout: 5000,
  paramsSerializer: params => encodeURI(JSON.stringify(params)),
  transformRequest: [data => { return JSON.stringify(data) }]
})

// 请求拦截器
service.interceptors.request.use(config => {
  config.headers.accessToken = store.getters.token
  return config
}, (error) => {
  ElMessage.error(`服务器异常，请联系管理员！\nError: [${error}].`)
})

// 响应拦截器
service.interceptors.response.use(response => {
  const status = response.status
  let msg = ''
  if (status < 200 || status >= 300) {
    msg = showStatus(status)
    ElMessage.error(`请求超时或服务器异常，请检查网络或联系管理员！\nError: [${msg}].`)
  }
  return response
}, error => {
  ElMessage.error({
    dangerouslyUseHTMLString: true,
    message: `请求超时或服务器异常，请检查网络或联系管理员！<br/><br/>${error}.`
  })
})

export default service
