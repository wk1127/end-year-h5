<template>
  <div
    class="container animate__animated animate__slow animate__fadeIn"
    :class="{ animate__fadeOut: leave,'animate__delay-4s':leave }"
    :style="{ background: `url(${PUBLICIMGURL}step/step7/bg.png)no-repeat bottom/100%` }"
  >
    <audio
      ref="aideo"
      :src="`${PUBLICIMGURL}two/step8.mp3`"
      controls="controls"
      hidden="hidden"
    ></audio>
    <p class="p1">我知你不怕苦</p>
    <p class="p2">但我仍想你</p>
    <div class="date">尝遍世间的甜</div>
    <p class="p3">世间难得</p>
    <p class="p4">欢乐常伴</p>
    <p class="p5">你值得最好的</p>


    <div class="set-out" v-show="startShow" :class="{'set-out-hide': leave}" @click="handle()">
      <span class="dot"></span>
      快乐出发
    </div>
    <img class="station animate__fadeInUp animate__animated" :src="`${PUBLICIMGURL}step/step7/station.png`" alt="站台">
    <img class="train" :class="{'train-leave': leave}" :src="`${PUBLICIMGURL}station/one/train.png`" alt="" />

    <div class="mask" v-if="maskShow">
      <!-- <div class="photo-box" v-if="photoBoxShow" :class="{'photo-box-hide': photoBoxHide}">
        <div class="to-view" @click="toView()" v-if="tipShow">
          <span class="dot"></span>
          观摩欢乐时刻
        </div>
        <img class="photo1" :src="`${PUBLICIMGURL}step/step7/pic1.png`" alt="">
        <img class="photo2" :src="`${PUBLICIMGURL}step/step7/pic2.png`" alt="">
        <img class="photo3" :src="`${PUBLICIMGURL}step/step7/pic3.png`" alt="">
        <img class="photo4" :src="`${PUBLICIMGURL}step/step7/pic4.png`" alt="">
        <img class="photo5" :src="`${PUBLICIMGURL}step/step7/pic5.png`" alt="">

      </div> -->
      <div class="photo-list" v-if="photoStart">
        <img class="img1" :src="`${PUBLICIMGURL}step/step7/img1.png`" alt="">
        <img class="img2" :src="`${PUBLICIMGURL}step/step7/img2.png`" alt="">
        <img class="img3" :src="`${PUBLICIMGURL}step/step7/img3.png`" alt="">
        <img class="img4" :src="`${PUBLICIMGURL}step/step7/img4.png`" alt="">
        <img class="img5" :src="`${PUBLICIMGURL}step/step7/img5.png`" alt="">
        <img class="img6" :src="`${PUBLICIMGURL}step/step7/img6.png`" alt="">
        <img class="img7" :src="`${PUBLICIMGURL}step/step7/img7.png`" alt="">
      </div>
    </div>

    <img class="photoWindow" @click="again()" v-if="photoWindow" :src="`${PUBLICIMGURL}step/step7/album.png`" alt="相册">

    <div
      v-show="photoWindow"
      @click="again()"
      class="again-dot"
    >
      <span class="dot" style="margin-bottom: 20px;margin-right: 0"></span>
      回看图片
    </div>

      <!-- swiper相册 -->
    <div
      class="mask"
      v-if="swipeShow"
      @click="closeSwipe()"
    >
      <div class="example-3d">
        <swiper ref="mySwiper" class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="(i, index) in 7"
            :key="index"
            ><img :src="`${PUBLICIMGURL}step/step7/img${index+1}.png`" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <img class="close" :src="`${PUBLICIMGURL}step/step12/close.png`" alt="" />
    </div>

    <div v-show="startShow" style="height: 55vh" class="touchstart" @touchstart="move()"></div>
  </div>
</template>

<script>
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
  Navigation,
  EffectFade,
  EffectCoverflow,
} from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.min.css";
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
SwiperClass.use([
  Pagination,
  Mousewheel,
  Autoplay,
  Navigation,
  EffectFade,
  EffectCoverflow,
]);
export default {
    components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      leave: false,
      startShow: false, // 快乐出发提示隐显
      maskShow: false, // 遮罩层隐显
      photoBoxHide: false, // 相册透明度隐藏
      photoBoxShow: false, // 相册元素隐藏
      photoStart: false, // 照片列表显示，即动画开始
      tipShow: true, // 提示文字显隐
      photoWindow: false, // 照片窗口
        swipeShow:false,
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //自动播放
        autoplay: {
          delay: 5500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        //设定初始化时slide的索引
        initialSlide: 0,
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      },
    };
  },
  mounted() {
    // setTimeout(() => { // 大约5500后显示相册
    //   this.maskShow = true
    //   this.photoBoxShow = true
    // }, 6500)
    setTimeout(() => { // 大约5500后显示相册
      this.maskShow = true
      this.photoStart = true
      this.toView()
    }, 6500)
  },
  created() {},
  methods: {
    handle() {
      this.leave = true
      this.$refs.aideo.play();
      setTimeout(() => {
        this.$router.push("/two/step8");
      }, 5000)
    },
    toView() {
      // this.photoBoxHide = true
      // this.tipShow = false // 当相册消失的时候，提示文字隐藏
      // setTimeout(() => {
      //   this.photoStart = true
      // }, 800)

      setTimeout(() => {
        this.photoWindow = true
      }, 15450 + 1000)

      setTimeout(() => { // 收起相册 最后一张照片收起的时间12500 + photoStart等待的时间800
        this.maskShow = false
        this.photoBoxShow = false
        this.startShow = true // 显示快乐出发
      }, 18480)
    },
    again() {
      if (this.maskShow) { // 防止用户反复点击
        return
      }
      if (this.leave) { // 列车离开时点击无效
        return
      }
       this.photoWindow = false;
      this.swipeShow = true;
      // setTimeout(() => { 
      //   this.photoWindow = true
      // }, 16450)
      // setTimeout(() => { // 收起相册 最后一张照片收起的时间11400
      //   this.maskShow = false
      //   this.photoStart = false
      // }, 18480)
    },
        closeSwipe() {
      this.letterShow = true;
      this.swipeShow = false;
      this.photoWindow = true;
    },
    move() {
      if (this.leave) {
        return
      }
      this.handle()
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
@import "./album.scss";
</style>
