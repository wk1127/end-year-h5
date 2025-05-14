<template>
  <div class="page swiper-inner">
    <!-- 后背景icons -->
    <section class="section-icons w100"></section>
    <section
      class="section-text ani ani-delay"
      swiper-animate-effect="text__animate__zoomIn"
      swiper-animate-duration="0.8s"
      swiper-animate-delay="2s"
    >
      <div class="text noSwipeingBox" ref="refText">
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2s"
        >
          夜深了
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2.5s">
          <span class="color-default">{{ formatTime(pageData.workAttendanceInfo.off_duty_time).split('-')[1] }}</span><span class="color-default fontsize-default">月</span><span
            class="color-default"
            >{{ formatTime(pageData.workAttendanceInfo.off_duty_time).split('-')[2] }}</span
          ><span class="color-default fontsize-default">日</span><br>
          <span class="color-default">{{ formatTime(pageData.workAttendanceInfo.off_duty_time).split('-')[3] }}</span><span class="color-default fontsize-default">时</span><span
            class="color-default"
            >{{ formatTime(pageData.workAttendanceInfo.off_duty_time).split('-')[4] }}</span
          ><span class="color-default fontsize-default">分</span>下班
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="3s"
        >可你并不孤单<br>因为公司<br>还有其他小伙伴陪着你
                            
        </p>
        <!-- <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2s"
        >
          {{ formatTime(pageData.workAttendanceInfo.off_duty_time).split('-')[1] }}月{{ formatTime(pageData.workAttendanceInfo.off_duty_time).split('-')[2] }}日<br />你似乎对我很不舍，陪伴我到<br />
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2.5s">
          <span class="color-default">{{ formatTime(pageData.workAttendanceInfo.off_duty_time).split('-')[3] }}</span><span class="color-default fontsize-default">时</span><span
            class="color-default"
            >{{ formatTime(pageData.workAttendanceInfo.off_duty_time).split('-')[4] }}</span
          ><span class="color-default fontsize-default">分</span>
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="3s"
        >
          那真是我最快乐的一天<br />
          因为有你的陪伴<br />
          也因为有TA陪我到最后
        </p> -->
      </div>
    </section>
    <!-- 电脑 -->
    <section
      class="section-computer ani ani-delay"
      swiper-animate-effect="computer__animate__fadeInUp"
      swiper-animate-duration="0.6s"
      swiper-animate-delay="1s"
    >
      <img
        class="computer"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork4/computer.png"
        alt=""
      />
      <img
        class="kz ani ani-delay"
        swiper-animate-effect="kz__animate"
        swiper-animate-duration="2s"
        swiper-animate-delay="2.5s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork4/kz.png"
        alt=""
      />
      <button
        class="btn-look ani"
        swiper-animate-effect="btn__animate__heartBeat"
        swiper-animate-duration="2s"
        swiper-animate-delay="2.5s"
        @click="handleWho"
      >
        点击查看TA是谁
      </button>
    </section>
    <!-- 文字 -->
  </div>
</template>

<script>
import times from '@/utils/times.js'
import mixins from '@/mixins/index'
export default {
  mixins: [mixins],
  data() {
    return {};
  },
  props: ['slidePublicData'],
  computed: {
    slidePublicDataSync: {
      get: function () {
        return this.slidePublicData
      },
      set: function(val) {
        this.$emit('update:slidePublicData', val)
      }
    },
    pageData() {
      return this.$store.getters.pageData
    }
  },
  components: {},
  methods: {
    handleWho(){
      this.btnMusicPlay()
      this.$emit('onNext')
    },
    getYmd(time) {
      return times.viewYears(time)
    },
    formatTime(time) {
      return times.formatTime(time)
    },
    // 置顶
    toTop(){
      this.$refs.refText.scrollTop = 0;
    },
    // 置底
    textToBottom(speed = 1){
      var clientHeight=this.$refs.refText.clientHeight;
      var scrollHeight=this.$refs.refText.scrollHeight;
      var height=scrollHeight-clientHeight; //超出窗口上界的值就是底部的scrolTop的值
      this.$refs.refText.scrollTop+=speed;
      if (this.$refs.refText.scrollTop<height) {
        var c=setTimeout(()=>this.textToBottom(speed),20);
      }else {
        clearTimeout(c);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/../public/css/myAnimate.scss";
@import "../common.scss";
@import "./index.scss";
</style>
