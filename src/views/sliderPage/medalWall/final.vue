<template>
  <div class="container">
    <module-position class="wh100">
      <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/bg.png" class="home-bg wh100">
      <module-position class="contianer-top-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/top-img.png" class="w100">
      </module-position>
      <module-position class="contianer-bottom-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/contianer-bottom-img.png" class="w100" style="dispaly: block">
      </module-position>
    </module-position>
    <module-position class="text-bg translateX50">
      <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/text-bg.png" class="text-bg-img wh100">
      <module-position class="text-memory text-memory-in">
        <p>{{ pageData.staffInfo.name }}勇士</p>
        <p>你在2020年共收获</p>
        <div class="text-margin">
          <p class="dispaly-text"><span>{{ pageData.bigEvent.length }}</span>枚勋章</p>
        </div>
      </module-position>
      <div class="medal-div translateX50" @scroll="handleScroll($event)">
        <ul class="medal-box" ref="medal">
          <li v-for="(item, index) in pageData.bigEvent" :key="index" class="medal-img">
            <img :src="item.img" class="h100">
          </li>
        </ul>
      </div>
      <module-position class="scroll-bar translateX50">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/scroll-bar.png" class="w100" ref="bar">
        <div class="scroll-slider translateY50" :style="{ left: leftPercent }" ref="slider">
          <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/scroll-slider.png" class="h100">
        </div>
      </module-position>
    </module-position>
  </div>
</template>
<script>
import ModulePosition from '@/components/ModulePosition'
export default {
  components: { ModulePosition },
  data() {
    return {
      scrollLeft: 0,
      width: 1,
      percent: null,
      timeOutEvent: null
    }
  },
  mounted() {
    setTimeout(() =>{
      this.$emit('changeScroll', true)
    }, 2700)
  },
  computed: {
    leftPercent() {
      return this.scrollLeft / this.width * this.percent  + 'px'
    },
    pageData() {
      return this.$store.getters.pageData
    }
  },
  methods: {
    handleScroll(e) {
      this.width = e.target.scrollWidth - e.target.clientWidth
      this.scrollLeft = e.target.scrollLeft
      this.percent = this.$refs.bar.clientWidth - this.$refs.slider.clientWidth
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
      bottom: 123px;
    }
    80% {
      bottom: 120px;
    }
    100% {
      bottom: 123px;
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
      width: 80%;
      height: 67vh;
      top: 16.5vh;
      left: 50%;
    }
    .text-bg-img {
      animation: text1 1s .7s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
    .text-memory {
      top: 7.5vh;
      left: 43px;
      color: #fff;
      font-size: 15px;
      opacity: 0;
      p {
        text-align: left;
        margin: 0;
        line-height: 31px;
        span {
          color: #FFB655;
          font-weight: bold;
        }
      }
      .text-margin {
         margin-top: 2vh;
        .dispaly-text {
          color: #FFB655;
          font-weight: bold;
          span {
            font-size: 25px;
          }
        }
      }
    }
    .medal-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-direction: column;
      height: 28vh;
      // overflow-x: auto;
      
    }
    .medal-div {
      position: absolute;
      left: 50%;  
      bottom: 30px;
      height: 29vh;
      overflow-x: scroll;
      overflow-y: hidden;
      width: calc(100% - 60px);
      animation: textBg 1s 1.7s;
      animation-fill-mode: forwards;
      -webkit-overflow-scrolling : touch;
      opacity: 0;
      padding-bottom: 20px;
    }
    .medal-div::-webkit-scrollbar{
      width:0px
    }
    .medal-img {
      height: 13vh;
      margin-right: 7px;
    }
    .text-memory-in {
      animation: textBg 1s 1.7s;
      animation-fill-mode: forwards;
    }
    .scroll-bar {
      bottom: 22px;
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
  }
</style>