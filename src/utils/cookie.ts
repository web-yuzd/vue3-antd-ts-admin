/**
 * cookie操作
 * @Author: 2021-09-29 19:54:39
 * @Date: 2021-01-13 21:09:57
 * @Last Modified by: jerryyu
 * @Last Modified time: 2021-09-29 19:57:44
 */
import Cookie from 'js-cookie'

const DOMAIN = 'test.com'

export function getCookie(key: string): string | undefined {
  return Cookie.get(key)
}

export function setCookie(key: string, token: string): string | undefined {
  return Cookie.set(key, token, { domain: DOMAIN })
}

export function removeCookie(key: string): void {
  Cookie.remove(key, { domain: DOMAIN })
}
