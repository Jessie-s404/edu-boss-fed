/**
 * 用户相关请求模块
 */

import request from '@/utils/request'
import qs from 'qs'

interface User {
  phone: string
  password: string
}

export const login = (data: User) => {
  return request({
    method: 'POST',
    url: '/front/user/login',
    // 如果 data 是普通对象，则 Content-Type 是 application/json
    // 如果 data 是 qs.stringify(data) 转换之后的数据：key=value&key=value，则 Content-Type 会被设置为 application/x-www-form-urlencoded
    // headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data // axios 默认发送的是 application/json 格式的数据
  })
}