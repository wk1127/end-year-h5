<template>
  <div class="home-global">
    <div :class="['home-container', 'wh100', checkout ? 'home-container--showout' : 'home-container--showin']" @click="moveLogin">
      <!-- 背景 -->
      <module-position class="home-bg wh100" />
      <!-- 天空云 -->
      <module-position class="home-sky translateX50">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/2yun.png" class="w100">
      </module-position>
      <!-- 楼房背景 -->
      <module-position :class="['home-housebg', 'wh100', !checkout ? '': 'housebg-ani-big']" />
      <!-- 底部人群 -->
      <module-position :class="['home-peopleone', 'translateX50', checkout ? 'home-peopleone-out' : 'home-peopleone-in']">
        <!-- 中间的人 -->
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/4centerpeople.png" class="h100">
        <!-- 右边的人 -->
        <module-position :class="['home-peopletwo', checkout ? ['rightPeopleOut', 'home-peopletwo-out'] : ['rightPeopleIn', 'home-peopletwo-in']]">
          <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/5rightpeople.png" class="h100">
        </module-position>
        <!-- 左边的人 -->
        <module-position :class="['home-peoplethree', checkout ? ['leftPeopleOut', 'home-peoplethree-out'] : ['leftPeopleIn', 'home-peoplethree-in']]">
          <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/6leftpeople.png" class="h100">
        </module-position>
      </module-position>
      <!-- 底部右边阴影 -->
      <module-position :class="['home-peoplefour', checkout ? ['rightPeopleOut', 'home-peoplefour-out'] : ['rightPeopleIn', 'home-peoplefour-in']]">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/7rightpeople.png" class="wh100">
      </module-position>
      <!-- 底部左边阴影 -->
      <module-position :class="['home-peoplefive', checkout ? ['leftPeopleOut', 'home-peoplefive-out'] : ['leftPeopleIn', 'home-peoplefive-in']]">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/8leftpeople.png" class="wh100">
      </module-position>
      <!-- 移动小人 -->
      <module-position class="home-peoplemove">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/9movepeople.png" class="h100">
      </module-position>
      <!-- 遇见你真好 -->
      <module-position :class="['home-theme', 'translateX50', checkout? 'home-theme-out' : 'home-theme-in']">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/10zhuti.png" class="w100">
      </module-position>
      <!-- 小手按钮 -->
      <module-position v-if="!checkout" class="home-hand">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/11hand.png" class="w100">
        <!-- 小手按钮效果 -->
        <module-position class="home-click">
          <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/12click.png" class="w100">
        </module-position>
      </module-position>
    </div>
    <!-- 遮罩层 -->
    <div class="home-container-mask" />
  </div>
</template>

<script>
import ModulePosition from '@/components/ModulePosition'
import mixins from '@/mixins/index'
export default {
  mixins: [mixins],
  name: 'Home',
  components: { ModulePosition },
  data() {
    return {
      checkout: false
    }
  },
  created () {
    this.$router.replace({
      path: '/two'
    })
  },
  methods: {
    moveLogin() {
      this.btnMusicPlay()
      this.checkout = true
      let _this = this
      setTimeout(() => {
        _this.$router.push({ path: '/login' })
      }, 2500)
    },
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
