import Axios from 'axios'
import store from "../store"
import router from "../router"
import { Notice } from "view-design"

let instance = Axios.create();
instance.defaults.timeout = 1000 * 7;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/**
 * 请求拦截器
 */
instance.interceptors.request.use(
  config => {
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.error(error)
);

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  resp => resp.status === 200 ? Promise.resolve(resp) : Promise.reject(resp),
  error => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      if (!window.navigator.onLine) {
        store.commit('changeNetwork', false);
      } else {
        return Promise.reject(error);
      }
    }
  }
);

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
};

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 * @param other
 */
const errorHandle = (status, other) => {
  switch (status) {
    case 401:
      toLogin();
      break;
    case 403:
      Notice.error({title: '登录过期, 请重新登录!'});
      localStorage.removeItem('token');
      store.commit('logon', false);
      setTimeout(() => {
        toLogin();
      }, 800);
      break;
    case 404:
      Notice.error({title: '请求的资源不存在'});
      break;
    default:
      // eslint-disable-next-line no-console
      console.log(other);
  }};

export default instance;
