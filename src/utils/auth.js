const TokenKey = 'YuZhua2020H5Authorization'
const VerifyTimeKey = 'YuZhua2020H5TokenVerifyTime'

export function getToken() {
	return window.localStorage.getItem(TokenKey)
}

export function setToken(token) {
	return window.localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return window.localStorage.removeItem(TokenKey)
}

export function getVerifyTime() {
	return window.localStorage.getItem(VerifyTimeKey)
}

export function setVerifyTime(time) {
	return window.localStorage.setItem(VerifyTimeKey, time)
}

export function removeVerifyTime() {
  return window.localStorage.removeItem(VerifyTimeKey)
}