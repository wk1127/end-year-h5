import request from '@/utils/request'

export function demoPost(data) {
  return request({
    url: '/demo',
    method: 'POST',
    data
  })
}

export function demoGet() {
  return request({
    url: '/demo',
    method: 'GET'
  })
}
//登陆
export function Login(data) {
  return request({
    url: '/user/year-end-login',
    method: 'POST',
    data
  })
}
export function pageData(data) {
  return request({
    url: '/user/year-end-staff-data',
    method: 'POST',
    data
  })
}
// 祝福列表
export function blessList(data) {
  return request({
    url: '/user/blessing-list',
    method: 'POST',
    data
  })
}
// 创建祝福
export function blessCreate(data) {
  return request({
    url: '/user/blessing-create',
    method: 'POST',
    data
  })
}