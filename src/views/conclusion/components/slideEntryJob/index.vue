<template>
  <div class="page swiper-inner">
    <!-- 前背景 -->
    <section
      class="section-before w100 ani ani-delay"
      swiper-animate-effect="animate__fadeInUp"
      swiper-animate-duration="1.5s"
      swiper-animate-delay="0.8s"
    >
      <img
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/before.png"
        alt=""
      />
    </section>
    <!-- 后背景 -->
    <section
      class="section-after w100 ani"
      swiper-animate-effect="animate__fadeInUp"
      swiper-animate-duration="1.5s"
      swiper-animate-delay="0s"
    >
      <img :src="bgUrl" alt="" />
    </section>
    <!-- 女孩 -->
    <section class="section-ball">
      <img
        class="girl ani ani-delay"
        swiper-animate-effect="animate__fadeIn"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="2.7s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/girl.png"
        alt=""
      />
      <img
        class="ball ani ani-delay"
        swiper-animate-effect="animate__fadeInLeft"
        swiper-animate-duration="1.2s"
        swiper-animate-delay="1.5s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/girl-ball.png"
        alt=""
      />
    </section>
    <!-- 鱼 -->
    <section class="section-fish">
      <img
        class="fish ani ani-delay"
        swiper-animate-effect="animate__fadeIn"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="2.7s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/fish.png"
        alt=""
      />
      <img
        class="ball ani ani-delay"
        swiper-animate-effect="animate__fadeInRight"
        swiper-animate-duration="1.2s"
        swiper-animate-delay="1.5s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/fish-ball.png"
        alt=""
      />
    </section>
    <!-- 文字 -->
    <section class="section-text">
      <p
        class="ani ani-delay"
        swiper-animate-effect="animate__fadeInUp"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="2s"
      >
        <span class="color-default">Hi，{{ pageData.staffInfo.name }}</span>
      </p>
      <p
        class="ani ani-delay"
        swiper-animate-effect="animate__fadeInUp"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="2.5s"
      >
        {{ getDepartment(pageData.staffInfo.department) }}<br />
      </p>
      <p
        class="ani ani-delay"
        swiper-animate-effect="animate__fadeInUp"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="3s"
      >
        <span class="color-default">我们在一起{{ pageData.staffInfo.cumulative_days }}天啦！</span>
      </p>
      <p
        class="ani ani-delay"
        swiper-animate-effect="animate__fadeInUp"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="3.5s"
      >
        {{ getYears(pageData.staffInfo.induction_time).split("-")[0] }}年{{
          getYears(pageData.staffInfo.induction_time).split("-")[1]
        }}月{{
          getYears(pageData.staffInfo.induction_time).split("-")[2]
        }}日<br />
        第一次遇见你
      </p>

    </section>
  </div>
</template>

<script>
import times from "@/utils/times.js";
export default {
  data() {
    return {
      bgUrl:
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/after-0.png",
    };
  },
  components: {},
  created() {
    this.bgAfter();
  },
  computed: {
    pageData() {
      return this.$store.getters.pageData;
    },
  },
  methods: {
    getYears(time) {
      return times.viewYears(time);
    },
    bgAfter() {
      setTimeout(() => {
        this.changeAfter();
      }, 1.5 * 1000);
    },
    changeAfter() {
      const time = 600;
      const bgUrl =
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/after-0.png";
      const bgUrlActive =
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/after-1.png";
      for (let i = 0; i <= time; i++) {
        if (i % 2 === 0) {
          this.bgUrl = bgUrl;
        } else {
          this.bgUrl = bgUrlActive;
        }
      }
    },
    getDepartment(val) {
      let department = val.split(">");
      if (department.length === 0) {
        return "鱼爪集团的";
      } else if (department.length == 1) {
        return department[0]
      } else if (department.length == 2)  {
        return department[0] + "-" + department[1];
      } else if (department.length > 2) {
        return department[0] + "-" + department[1] + '-' + department[2];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";
@import "./index.scss";
</style>
