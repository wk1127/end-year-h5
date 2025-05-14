<template>
  <div class="page swiper-inner">
    <section
      class="section-text ani ani-delay"
      swiper-animate-effect="text__animate__zoomIn"
      swiper-animate-duration="0.8s"
      swiper-animate-delay="1s"
    >
      <div class="text" ref="refText">
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="1.5s"
        >
          年度踩点王一定非你莫属！<br>
          在2020年，你
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2s"
        >
          <span class="color-default" v-if="pageData.workAttendanceInfo.punctual_on_duty_times > 0">{{ pageData.workAttendanceInfo.punctual_on_duty_times }}<span class="fontsize-default">次差点迟到</span></span><br />
          <span class="color-default" v-if="pageData.workAttendanceInfo.punctual_off_duty_times > 0">{{ pageData.workAttendanceInfo.punctual_off_duty_times }}<span class="fontsize-default">次踩点下班</span></span>
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2.5s"
        >
          <!-- 另外<br />
          你<span class="color-default">{{ pageData.workAttendanceInfo.punctual_off_duty_times }}</span
          >次踏着下班的钟声走出了办公室<br /> -->
          那天<br />
          年度踩点王的你<br />
          一定是有什么急事吧
        </p>
      </div>
    </section>
    <!--  人 -->
    <section class="section-girl">
      <img
        class="girl1 ani ani-delay"
        swiper-animate-effect="girl_animate__fadeInLeft"
        swiper-animate-duration="3s"
        swiper-animate-delay="2s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork2/girl1.png"
        alt=""
      />
      <img
        class="girl2 ani ani-delay"
        swiper-animate-effect="girl_animate__fadeInLeft"
        swiper-animate-duration="3s"
        swiper-animate-delay="2.5s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork2/girl2.png"
        alt=""
      />
    </section>
    <!-- 钟 -->
    <section
      class="section-clock ani ani-delay"
      swiper-animate-effect="clock_animate"
      swiper-animate-duration="4s"
      swiper-animate-delay="2.5s"
    >
      <img
        class="clock clock-0"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork2/clock-0.png"
        alt=""
      />
      <img
        class="clock clock-1"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork2/clock-1.png"
        alt=""
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    pageData() {
      return this.$store.getters.pageData
    }
  },
  methods: {
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
