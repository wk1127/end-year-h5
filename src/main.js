import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import '@/permission'
import '@/vantComponent'
import '@/utils/global'
import PrototypeVue from '@/prototype/index'
import VueTouch from 'vue-touch'


// swiper css
import animated from 'animate.css'
Vue.use(animated)
import '@/assets/css/main.scss'
Vue.config.productionTip = false

Vue.use(PrototypeVue)
Vue.use(VueTouch, {name: 'v-touch'})
// 自定义指令
Vue.directive('showtime',{
  inserted: function(el, dom) {
    el.style.display = 'none'
    setTimeout(() => {
      el.style.display = 'block!important'
    }, dom.value*1000);
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
