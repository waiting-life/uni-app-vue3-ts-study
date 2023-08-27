import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

interface LoginParams {
  code: string
  iv: string
  encryptedData: string
}
export const postLoginWeixinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// /login/wxMin/simple
/**
 * 小程序登陆_内测版
 * @param phoneNumber 模拟手机号
 */
export const postLoginWeixinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
