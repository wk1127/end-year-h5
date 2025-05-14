<template>
<!-- <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown"> -->
  <div class="container">
    <module-position class="wh100">
      <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/page-container.png" class="home-bg wh100">
      <module-position class="contianer-top-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/top-img.png" class="w100">
      </module-position>
      <module-position class="contianer-bottom-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/bottom-img.png" class="w100" style="display: block">
      </module-position>
    </module-position>
    <module-position class="text-bg translateX50">
      <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/text-bg-index.png" class="text-bg-img wh100">
      <module-position class="text-memory text-memory-in">
        <p>鱼爪之旅</p>
        <p>2020，我们共同经历</p>
      </module-position>
      <div class="swiper translateX50" ref="swiper" @scroll="handleScroll($event)">
        <div v-for="(item, index) in pageData.bigEvent" class="swiper-item" :key="index">
          <div>
            {{ index + 1 }}.{{ item.event }}
          </div>
        </div>
      </div>
      <module-position class="text-memory-bottom text-memory-in">
        <p>俗话说，勇士该勋章相配</p>
        <p>那你共获得多少勋章呢？</p>
      </module-position>
      <module-position class="scroll-bar translateX50">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/scroll-bar.png" class="w100" ref="bar">
        <div class="scroll-slider translateY50" :style="{ left: leftPercent }" ref="slider">
          <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/scroll-slider.png" class="h100">
        </div>
      </module-position>
      <module-position class="bottom-btn translateX50" @click.native="goWallFinal">
          <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/button.png" class="w100 btn-bg">
          <module-position class="btn-text translateY50">
            点亮勋章
          </module-position>
        </module-position>
    </module-position>
  </div>
<!-- </v-touch> -->
</template>
<script>
import ModulePosition from '@/components/ModulePosition'
import mixins from '@/mixins/index'
export default {
  mixins: [mixins],
  components: { 
    ModulePosition,
  },
  data() {
    return {
      scrollLeft: 0,
      width: 1,
      percent: null,
    }
  },
  computed: {
    pageData() {
      return this.$store.getters.pageData
    },
    leftPercent() {
      return this.scrollLeft / this.width * this.percent  + 'px'
    }
  },
  methods: {
    handleScroll(e) {
      this.width = e.target.scrollWidth - e.target.clientWidth
      this.scrollLeft = e.target.scrollLeft
      this.percent = this.$refs.bar.clientWidth - this.$refs.slider.clientWidth
    },
    goWallFinal() {
      this.btnMusicPlay()
      this.$emit('onNext')
    },
  }
}
</script>
<style lang="scss" scoped>
  @keyframes text1 {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes textOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes textBg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes topImg {
    0% {
      top: -50%;
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      top: 0;
      opacity: 1;
    }
  }
  @keyframes bottomImg {
    0% {
      bottom: -50%;
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      bottom: 0;
      opacity: 1;
    }
  }
  @keyframes btnAnimate {
    0% {
      bottom: -10px;
    }
    80% {
      bottom: -7px;
    }
    100% {
      bottom: -10px;
    }
  }
  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background: url('https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/bg.png') center center no-repeat;
    background-size: 100% 100%;
    .home-bg {
      animation: textBg 1s;
      animation-fill-mode: forwards;
    }
    .btn-bg {
      opacity: 0;
      animation: textBg 1s 1.7s;
      animation-fill-mode: forwards;
    }
    .bottom-btn {
      width: 48%;
      left: 50%;
      bottom: 52px;
      animation: btnAnimate 1s infinite;
    }
    .btn-text {
      width: 100%;
      left: 0;
      top: 45%;
      font-size: 0.45rem;
      color: #DD3A5C;
      text-align: center;
      opacity: 0;
      animation: textBg 1s 1.7s;
      animation-fill-mode: forwards;
    }
    .text-memory-bottom {
      bottom: 50px;
      left: 50px;
      font-size: 14px;
      opacity: 0;
      animation: textBg 1s 1.7s;
      animation-fill-mode: forwards;
      p {
        line-height: 25px;
        margin: 0;
        text-align: left;
      }
    }
    .scroll-bar {
      bottom: 100px;
      left: 50%;
      width: calc(100% - 80px);
      opacity: 0;
      animation: textBg 1s 1.7s;
      animation-fill-mode: forwards;
      .scroll-slider {
        top: 32%;
        height: 70%;
        position: absolute;
      }
    }
    .swiper::-webkit-scrollbar{
      width:0px
    }
    .swiper {
      position: absolute;
      height: 43%;
      top: calc(28% + 5px);
      width: 250px;
      left: 50%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: hidden;
      overflow-x: scroll;
      opacity: 0;
      animation: textBg 1s 1.7s;
      animation-fill-mode: forwards;
      -webkit-overflow-scrolling : touch;
      .swiper-item {
        text-align: left;
        width: 100%;
        margin-bottom: 5px;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          background-color: #7AEAD7;
          padding: 5px;
          width: calc(90% - 10px);
          color: #6A4EE6;
          font-weight: bold;
        }
      }
    }
    .contianer-top-img {
      top: 0;
      left: 0;
      opacity: 0;
      animation: topImg 1s;
      animation-fill-mode: forwards;
    }
    .contianer-bottom-img{
      bottom: 0;
      left: 0;
      opacity: 0;
      animation: bottomImg 1s;
      animation-fill-mode: forwards;
    }
    .text-bg {
      z-index: 11;
      width: 87%;
      height: 65vh;
      top: 17.8vh;
      left: 50%;
    }
    .text-bg-img {
      animation: text1 1s .7s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
    .text-memory {
      top: 48px;
      left: 50px;
      color: #434149;
      font-size: 14px;
      opacity: 0;
      p {
        text-align: left;
        margin: 0;
        line-height: 25px;
      }
    }
    .text-memory-in {
      animation: textBg 1s 1.7s;
      animation-fill-mode: forwards;
    }
  }
</style>