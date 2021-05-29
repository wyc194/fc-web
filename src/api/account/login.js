import service from '@/utils/request'
import { uri } from '@/constant/uri'

export function login(data) {
  // return service.get(`${uri.account}/login`, data)
  return {
    menus: [{}]
  }
}

export function getToken(data) {
  service.get(`${uri.account}/getToken`, data)
  return '1123'
}
