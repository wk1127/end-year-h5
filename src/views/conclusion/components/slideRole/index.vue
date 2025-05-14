<template>
  <div class="page swiper-inner">
    <!-- 后背景 -->
    <section
      class="section-after w100 ani"
      swiper-animate-effect="animate__fadeInUp"
      swiper-animate-duration="1.5s"
      swiper-animate-delay="0s"
    >
      <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideRole/after.png" alt="" />
    </section>
    <!-- 女孩 -->
    <section class="section-ball">
      <div class="girl-wrap">
        <img
          class="girl ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="3s"
          src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideRole/girl.png"
          alt=""
        />
        <img
          class="girl-shadow ani ani-delay"
          swiper-animate-effect="animate__girl_shadow"
          swiper-animate-duration="3s"
          swiper-animate-delay="3s"
          src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideRole/gril-shadow.png"
          alt=""
        />
      </div>
      <img
        class="ball ani ani-delay"
        swiper-animate-effect="animate__fadeInUp"
        swiper-animate-duration="1.5s"
        swiper-animate-delay="1.5s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideRole/girl-ball.png"
        alt=""
      />
    </section>
    <!-- 文字 -->
    <section class="section-text">
      <p
        class="ani ani-delay"
        swiper-animate-effect="animate__fadeInUp"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="3s"
      >
        你当前职级
      </p>
      <p
        class="ani ani-delay"
        swiper-animate-effect="animate__fadeInUp"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="3s"
      >
        <span class="color-default">{{ pageData.staffInfo.job_grade }}<br></span>
      </p>
      <p
        class="ani ani-delay"
        swiper-animate-effect="animate__fadeInUp"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="3.5s"
      >
        你看<br />你的付出终究会有收获
      </p>
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
      return this.$store.getters.pageData;
    },
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
