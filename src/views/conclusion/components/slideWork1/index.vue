<template>
  <div class="page swiper-inner">
    <section
      class="section-text ani ani-delay"
      swiper-animate-effect="text__animate__zoomIn"
      swiper-animate-duration="0.8s"
      swiper-animate-delay="1s"
    >
      <div class="text">
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="1s"
        >
          2020年，你陪我一起度过了<br />
          
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="1.5s"
        >
          <span class="color-default">{{ pageData.workAttendanceInfo.work_day_count }}</span><span class="color-default" style="font-size: 4vw">天</span><br>
          <span class="color-default">{{ getHours(pageData.workAttendanceInfo.work_time) }}</span><span class="color-default" style="font-size: 4vw">工时</span>
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="2s"
        > 
          相当于每天<span class="color-default fontsize-default">工作了{{ ( Number(getHours(pageData.workAttendanceInfo.work_time)) /Number(pageData.workAttendanceInfo.work_day_count)  ).toFixed(2) }}个小时</span>
          <template v-if="Number(pageData.workAttendanceInfo.workTranscendCount) >= 30">
            超越了<span class="color-default">{{ pageData.workAttendanceInfo.workTranscendCount }}%</span>的鱼爪人
          </template>
          <template v-else>
            <br />
            在每一个周而复始的工作日<br />
            你奔波的身影<br />
            是鱼爪集团最美的风景
          </template>
        </p>
      </div>
    </section>
    <!--  人 -->
    <section class="section-man">
      <img
        class="man ani ani-delay"
        swiper-animate-effect="animate__fadeInLeft"
        swiper-animate-duration="1.5s"
        swiper-animate-delay="1.5s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork1/man.png"
        alt=""
      />
    </section>
  </div>
</template>

<script>
import times from '@/utils/times.js'
export default {
  data() {
    return {};
  },
  computed: {
    pageData() {
      return this.$store.getters.pageData
    }
  },
  components: {},
  methods: {
    getDays() {
      let year = new Date(this.pageData.staffInfo.induction_time)
      let y = year.getFullYear()
      if(y != 2020) {
        return 366
      }
      else {
        let distance = 1609430399 - this.pageData.staffInfo.induction_time
        return parseInt(distance/60/60/24)
      }
    },
    getHours(time) {
      return times.totalHours(time)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/../public/css/myAnimate.scss";
@import "../common.scss";
@import "./index.scss";
</style>
