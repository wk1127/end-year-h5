<template>
  <div class="page-wrap">
    <swiper
      :slides-per-view="3"
      :space-between="50"
      :options="swiperOptions"
      class="conclusion-swiper"
      ref="mySwiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <!--0 入职 -->
      <swiper-slide>
        <slide-entry-job></slide-entry-job>
      </swiper-slide>
      <!--1 角色 -->
      <!-- pageData.staffInfo.job_grade && pageData.staffInfo.job_grade != 's0' && pageData.staffInfo.job_grade != 'S0' -->
      <swiper-slide>
        <slide-role></slide-role>
      </swiper-slide>
      <!--2 乡音 -->
      <swiper-slide>
        <localAccent
          :activeIndex="slidePublicData.activeIndex"
          :indexArr="indexArr"
        />
      </swiper-slide>
      <!--3 乡音2 -->
      <swiper-slide>
        <localAccent2
          :activeIndex="slidePublicData.activeIndex"
          @onNext="canAllowSlide"
          v-if="indexArr.includes(3)"
        />
      </swiper-slide>
      <!--4 工作1 公司是我家-->
      <swiper-slide>
        <slide-work1></slide-work1>
      </swiper-slide>
      <!--5 工作2 踩点打卡-->
      <swiper-slide>
        <slide-work2 ref="refSlideWork2"></slide-work2>
      </swiper-slide>
      <!--6 工作3 一哥-->
      <swiper-slide>
        <slide-work3></slide-work3>
      </swiper-slide>
      <!--7 工作4 是谁-->
      <swiper-slide>
        <slide-work4
          :slide-public-data.sync="slidePublicData"
          @onNext="onNext"
          ref="refSlideWork4"
        ></slide-work4>
      </swiper-slide>
      <!--8 工作5 -->
      <swiper-slide>
        <slide-work5
          ref="refSlideWork5"
          :slide-public-data.sync="slidePublicData"
        ></slide-work5>
      </swiper-slide>
      <!--9 大事件 -->
      <!-- <swiper-slide>
        <bigEvents :activeIndex="slidePublicData.activeIndex" @onNext="canAllowSlide" v-if="indexArr.includes(9)" />
      </swiper-slide> -->
      <!--9 勋章墙 -->
      <swiper-slide>
        <medalWall
          :activeIndex="slidePublicData.activeIndex"
          @onNext="onNext"
          v-if="indexArr.includes(9)"
        />
      </swiper-slide>
      <!--10 勋章墙列表 -->
      <swiper-slide>
        <medalWallFinal v-if="indexArr.includes(10)" />
      </swiper-slide>
      <!--11 信 -->
      <swiper-slide>
        <slide-letter1
          ref="letter1"
          @canAllowSlide="canAllowSlide"
          :slide-public-data.sync="slidePublicData"
          :is-open-letter.sync="isOpenLetter"
        ></slide-letter1>
      </swiper-slide>
      <!--12 最后一页 -->
      <swiper-slide>
        <slide-last></slide-last>
      </swiper-slide>
    </swiper>
    <!-- 下一页 -->
    <!-- <div class="test">
      {{slidePublicData.needScroll}}
    </div> -->
    <next-page
      v-if="allowScoll && slidePublicData.activeIndex !== '12'"
    ></next-page>
    <div class="fade"></div>
  </div>
</template>

<script>
import SwiperCore, { EffectFade } from "swiper";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import {
  swiperAnimateCache,
  swiperAnimate,
} from "@/../public/js/swiper.animate1.0.3.min.js";
import slideEntryJob from "./components/slideEntryJob/index"; // 入职
import localAccent from "@/views/sliderPage/localAccent/index";
import localAccent2 from "@/views/sliderPage/localAccent2/index";
import medalWall from "@/views/sliderPage/medalWall/index";
import medalWallFinal from "@/views/sliderPage/medalWall/final";
import slideRole from "./components/slideRole/index"; // 角色
import slideWork1 from "./components/slideWork1/index"; // 工作1
import slideWork2 from "./components/slideWork2/index"; // 工作2
import slideWork3 from "./components/slideWork3/index"; // 工作3
import slideWork4 from "./components/slideWork4/index"; // 工作4
import slideWork5 from "./components/slideWork5/index"; // 工作5
import slideLetter1 from "./components/slideLetter1/index"; // 信
import slideLast from "./components/slideLast/index"; // 最后
import NextPage from "@/components/NextPage"; // 下一页
SwiperCore.use([EffectFade]);
// import bigEvents from '@/views/sliderPage/bigEvents/index'
export default {
  data() {
    return {
      slidePublicData: {
        activeIndex: "0",
      },
      isShowNextPage: true, // 是否显示下一页
      noSwiper: false,
      moduleList: ["theme"],
      // activeIndex: 6,
      isOpenLetter: false,
      // observer: true,
      // observeParents: true,
      indexArr: [],
      allowScoll: false,
      swiperOptions: {
        // allowSlideNext : true,
        // allowSlidePrev : true,
        allowTouchMove: true, //  是否允许滑动
        direction: "vertical",
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        // effect: "effectFade", // 切换效果
        speed: 2000,
        initialSlide: 0,
        noSwiping: true, // 不可滑动
        preventInteractionOnTransition: true, // 滑动过程禁止滑动
        noSwipingSelector: ".noSwipeingBox", // 设置不可触摸滑动的元素
        on: {
          init: function () {
            swiperAnimateCache(this);
            swiperAnimate(this);
          },
          slideChange: function () {
            // console.log(this);
            swiperAnimate(this);
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    slideEntryJob,
    slideRole,
    NextPage,
    slideWork1,
    slideWork2,
    slideWork3,
    slideWork4,
    slideWork5,
    slideLetter1,
    localAccent,
    localAccent2,
    medalWall,
    medalWallFinal,
    slideLast,
  },
  direcNextPagetives: {
    swiper: directive,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    pageData() {
      return this.$store.getters.pageData;
    },
    haveLocal() {
      return (
        this.pageData.staffInfo.ceoCount == 0 &&
        this.pageData.staffInfo.vicePresidentCount == 0 &&
        this.pageData.staffInfo.generalManagerCount == 0 &&
        this.pageData.staffInfo.managerCount == 0 &&
        this.pageData.staffInfo.domicile_staff_count == 0
      );
    },
    // 没有踩点上下班
    noCheckWork() {
      return (
        (Number(this.pageData.workAttendanceInfo.punctual_on_duty_times) ===
          0 ||
          this.pageData.workAttendanceInfo.punctual_on_duty_times === "" ||
          this.pageData.workAttendanceInfo.punctual_on_duty_times === null) &&
        (Number(this.pageData.workAttendanceInfo.punctual_off_duty_times) ===
          0 ||
          this.pageData.workAttendanceInfo.punctual_off_duty_times === "" ||
          this.pageData.workAttendanceInfo.punctual_off_duty_times === null)
      );
    },
    // 没有一哥
    noBrother() {
      return (
        Number(this.pageData.staffInfo.brotherLogCount) === 0 ||
        this.pageData.staffInfo.brotherLogCount === "" ||
        this.pageData.staffInfo.brotherLogCount === null
      );
    },
  },
  created() {
    if (this.slidePublicData.activeIndex === "0") {
      setTimeout(() => {
        this.allowScoll = true;
        this.swiper.allowSlideNext = true;
      }, 3.5 * 1000);
    }
  },
  methods: {
    // 允许上一页，下一页
    canAllowSlide() {
      this.allowScoll = true;
      this.swiper.allowSlidePrev = true;
      this.swiper.allowSlideNext = true;
    },
    // 禁止上一页，下一页
    disabledAllowSlide() {
      this.allowScoll = false;
      // this.swiper.allowSlidePrev = false;
      this.swiper.allowSlideNext = false;
    },
    // 下一页
    onNext() {
      this.swiper.allowSlideNext = true;
      this.swiper.slideNext();
      // console.log(this.swiper)
      // this.swiper.slideTo(8)
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onTouchEnd() {
      // console.log('滑动结束')
    },
    onSlideChange(swiper) {
      // console.log(this.pageData.staffInfo.brotherLogCount)
      this.indexArr.push(swiper.activeIndex);
      setTimeout(() => {
        let previous = this.indexArr.indexOf(swiper.previousIndex);
        previous > -1 && this.indexArr.splice(previous, 1);
      }, 1000);
      if(this.haveLocal && swiper.previousIndex == 2 && swiper.activeIndex == 3) {
        swiper.slideTo(4);
        this.indexArr = [4]
      }
      else if(this.haveLocal && swiper.previousIndex == 4  && swiper.activeIndex == 3) {
        swiper.slideTo(2);
        this.indexArr = [2]
      }
      // 未转正
      if (
        this.pageData.staffInfo.job_grade === "" &&
        swiper.previousIndex == 0 &&
        swiper.activeIndex == 1
      ) {
        swiper.slideTo(2);
      } else if (
        this.pageData.staffInfo.job_grade === "" &&
        swiper.previousIndex == 2 &&
        swiper.activeIndex == 1
      ) {
        swiper.slideTo(0);
      }

      // 0次一哥
      if (
        this.noBrother &&
        swiper.previousIndex == 5 &&
        swiper.activeIndex == 6
      ) {
        swiper.slideTo(7);
      } else if (
        this.noBrother &&
        swiper.previousIndex == 7 &&
        swiper.activeIndex == 6
      ) {
        swiper.slideTo(5);
      }

      // 没有卡点
      if (
        this.noCheckWork &&
        swiper.previousIndex == 4 &&
        swiper.activeIndex == 5
      ) {
        swiper.slideTo(6);
      } else if (
        this.noCheckWork &&
        swiper.previousIndex == 6 &&
        swiper.activeIndex == 5
      ) {
        swiper.slideTo(4);
      }
      let index = (this.slidePublicData.activeIndex = String(
        swiper.activeIndex
      ));
      // this.
      this.disabledAllowSlide();
      switch (index) {
        case "0":
          setTimeout(() => {
            this.canAllowSlide();
          }, 3.5 * 1000);
          break;
        case "1":
          setTimeout(() => {
            this.canAllowSlide();
          }, 4 * 1000);
          break;
        case "2":
          setTimeout(() => {
            this.canAllowSlide();
          }, 5.5 * 1000);
          break;
        // case '3':
        //   if(swiper.previousIndex == 2 && this.haveLocal) {
        //     swiper.slideTo(4)
        //     this.indexArr = [4]
        //   }
        //   else if(swiper.previousIndex == 4 && this.haveLocal) {
        //     swiper.slideTo(2)
        //     this.indexArr = [2]
        //   }
        //   break;
        case "4":
          setTimeout(() => {
            this.canAllowSlide();
          }, 3 * 1000);
          break;
        case "5":
          setTimeout(() => {
            this.canAllowSlide();
          }, 5.5 * 1000);
          setTimeout(() => {
            this.$refs.refSlideWork2.textToBottom();
          }, 5 * 1000);
          break;
        case "6":
          setTimeout(() => {
            this.canAllowSlide();
          }, 4 * 1000);
          break;
        case "7":
          setTimeout(() => {
            this.$refs.refSlideWork4.textToBottom();
          }, 5 * 1000);
          break;
        case "8":
          setTimeout(() => {
            this.canAllowSlide();
          }, 6 * 1000);
          setTimeout(() => {
            this.$refs.refSlideWork5.textToBottom();
          }, 5 * 1000);
          break;
        case "9":
          setTimeout(() => {
            this.canAllowSlide();
          }, 2.5 * 1000);
          break;
        case "10":
          setTimeout(() => {
            this.canAllowSlide();
          }, 2.5 * 1000);
          break;
        case "11":
          this.isOpenLetter = false;
          setTimeout(() => {
          }, 0 * 1000);
          break;
        case "12":
          setTimeout(() => {
            this.canAllowSlide();
          }, 4 * 1000);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
}
@keyframes bgAnimate {
  0% {
    background-color: rgba(0, 0, 0, 1);
  }
  99% {
    height: 100%;
  }
  100% {
    height: 0;
    background-color: rgba(0, 0, 0, 0);
  }
}
.fade {
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: bgAnimate 1s;
  animation-fill-mode: forwards;
}
.conclusion-swiper {
  background: url("https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/bg1.png");
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-size: 100% 100%;
  .swiper-inner {
    width: 100%;
    height: 100%;
  }
}
</style>
