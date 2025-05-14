const $GetCurrentTime = () => {
  return new Date().getTime()
}

export default {
  install(Vue) {
    Vue.prototype.$GetCurrentTime = $GetCurrentTime
  }
}