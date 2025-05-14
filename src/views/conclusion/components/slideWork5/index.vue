<template>
  <div class="page swiper-inner">
    <!-- 预加载 透明 不显示 -->
    <section class="section-img-opacity">
       <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/bg-0.png" alt=""/>
       <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/bg-1.png" alt=""/>
       <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/bg-2.png" alt=""/>
       <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/bg-3.png" alt=""/>
       <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/bg-4.png" alt=""/>
    </section>
    <section
      class="section-bg ani"
      swiper-animate-effect="bg__animate"
      swiper-animate-duration="6s"
      swiper-animate-delay="1s"
    ></section>

    <section
      class="section-text ani ani-delay noSwipeingBox"
      swiper-animate-effect="text__animate__zoomIn"
      swiper-animate-duration="1s"
      swiper-animate-delay="1s"
    >
      <div class="text" ref="refText">
        <!-- 有伙伴 -->
        <template v-if="pageData.workAttendanceInfo.latestOffDutyStaffs.length">
           <ul
            class="ani ani-delay"
            swiper-animate-effect="animate__fadeIn"
            swiper-animate-duration="2s"
            swiper-animate-delay="2s"
          >
            <li 
              v-for="(item, index) in pageData.workAttendanceInfo.latestOffDutyStaffs" 
              :key="index"
            >
              <span class="color-default name" style="">{{ item.name }}</span>
              <span class="color-default" style="margin: 0 2vw">-</span>
              <span class="color-default" style="">{{ formatTime(item.off_duty_time).split('-')[3] }}:{{ formatTime(item.off_duty_time).split('-')[4] }}</span>
            </li>
          </ul>
          <p
            class="ani ani-delay"
            swiper-animate-effect="animate__fadeIn"
            swiper-animate-duration="2s"
            swiper-animate-delay="3s"
          >
            你们或许互不相识<br />
            但都在公司某个角落<br />
            为了我们的星辰大海<br />
            默默地发光发热
          </p>
        </template>
        <!-- 没伙伴 -->
        <template v-else>
          <p
            class="ani ani-delay"
            swiper-animate-effect="animate__fadeIn"
            swiper-animate-duration="2s"
            swiper-animate-delay="3s"
          >
            哇塞<br />
            原来那天最晚下班的是你呀
          </p>
          <p
            class="ani ani-delay"
            swiper-animate-effect="animate__fadeIn"
            swiper-animate-duration="2s"
            swiper-animate-delay="4s"
          >
            可即使工作再忙碌<br />
            也要照顾好自己呀
          </p>
          <p
            class="ani ani-delay"
            swiper-animate-effect="animate__fadeIn"
            swiper-animate-duration="2s"
            swiper-animate-delay="5s"
          >
            不过<br />
            我因有你，而感到荣幸
          </p>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import times from '@/utils/times.js'
export default {
  data() {
    return {};
  },
  props: ["slidePublicData"],
  components: {},
  created() {},
  computed: {
    pageData() {
      return this.$store.getters.pageData
    }
  },
  methods: {
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
@import "../common.scss";
@import "./index.scss";
</style>
