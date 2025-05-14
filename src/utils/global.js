import Vue from 'vue'
const PUBLICIMGURL = process.env.NODE_ENV === 'production'?'https://mats.sudoyu.com/oa/end_of_2020_h5/img2/':'/img2/'
Vue.prototype.PUBLICIMGURL = PUBLICIMGURL

export default {
  PUBLICIMGURL
}