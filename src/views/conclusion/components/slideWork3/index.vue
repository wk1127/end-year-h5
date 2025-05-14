<template>
  <div class="page swiper-inner">
    <section
      class="section-text ani ani-delay"
      swiper-animate-effect="text__animate__zoomIn"
      swiper-animate-duration="0.6s"
      swiper-animate-delay="1.5s"
    >
      <div class="text">
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2s"
        >
          一哥，你好呀！<br>在2020年，你一共获得
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2.5s"
        >
          <span class="color-default">{{ pageData.staffInfo.brotherLogCount }}<span class="fontsiz-default">次一哥</span></span>
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="3s"
        >
          那是你努力被看到的样子
        </p>
      </div>
    </section>
    <!--  人 -->
    <!-- TODO 图片补全 -->
    <section
      class="section-man ani ani-delay"
      swiper-animate-effect="animate__fadeIn"
      swiper-animate-duration="2s"
      swiper-animate-delay="1s"
    >
      <img class="man" src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork3/man.png" alt="" />
    </section>
  </div>
</template>

<script>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/../public/css/myAnimate.scss";
@import "../common.scss";
@import "./index.scss";
</style>
