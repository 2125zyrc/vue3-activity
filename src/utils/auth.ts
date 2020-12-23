import Cookies from 'js-cookie'

const TokenKey = 'wan_ji_activity_token'

export function getToken() {
  return '41C30C3F5EC88BC3689F03356CB2625C'
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
