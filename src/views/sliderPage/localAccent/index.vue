<template>
  <div class="home-container">
    <!-- <section
      class="section-text ani ani-delay"
      swiper-animate-effect="text__animate__zoomIn"
      swiper-animate-duration="0.8s"
      swiper-animate-delay="1s"
    > -->
    <div class="container" v-if="indexArr.includes(2)">
      <module-position class="home-bg wh100" />
      <module-position class="home-grass">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/grass.png" class="w100" style="display:block">
      </module-position>
      <module-position class="home-people translateX50">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/people.png" class="h100">
      </module-position>
      <module-position class="accent-img1 accent-img translateX50">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img1.png" class="w100">
      </module-position>
      <module-position class="accent-img2 accent-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img2.png" class="w100">
      </module-position>
      <module-position class="accent-img3 accent-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img3.png" class="w100">
      </module-position>
      <module-position class="accent-img4 accent-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img4.png" class="w100">
      </module-position>
      <module-position class="accent-img5 accent-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img5.png" class="w100">
      </module-position>
      <module-position class="accent-img6 accent-img translateX50">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img6.png" class="w100">
      </module-position>
      <module-position class="accent-img7 accent-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img7.png" class="w100">
      </module-position>
      <module-position class="accent-img8 accent-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img8.png" class="w100">
      </module-position>
      <module-position class="accent-img9 accent-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img9.png" class="w100">
      </module-position>
      <module-position class="accent-img10 accent-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img10.png" class="w100">
      </module-position>
    </div>
    <!-- 第一篇文字 -->
    <module-position class="text-bg1 translateX50" v-if="indexArr.includes(2)">
      <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/text-bg1.png" class="wh100">
      <module-position class="text-container translateX50">
        <div>
          <p>2020，鱼爪集团</p>
          <p>从<span>1728</span>人到<span>{{ pageData.staffInfo.staff_count }}</span>人</p>
        </div>
        <div class="text-margin">
          <p>离"53122"的万人小目标</p>
          <p>更近一步了哦~</p>
          <!-- <p class="dispaly-text"><span>{{ pageData.staffInfo.staff_count }}</span>人</p> -->
        </div>
        <div class="text-margin">
          <!-- <template v-if="pageData.staffInfo.domicile_staff_count > 0"> -->
            <p>其中有<span>{{ setLocalNum(pageData.staffInfo.domicile_staff_count) }}</span>个小伙伴</p>
            <p>和您来自同一个地方</p>
          <!-- </template> -->
          <!-- <template v-else>
            <p>离"53122"的万人小目标</p>
            <p>更近一步了哦~</p>
          </template> -->
        </div>
      </module-position>
    </module-position>
    <!-- </section> -->
  </div>
</template>
<script>
import ModulePosition from '@/components/ModulePosition'
export default {
  props: {
    indexArr: {
      default: () => { return [] }
    }
  },
  components: { ModulePosition },
  data() {
    return {
      
    }
  },
  computed: {
    pageData() {
      return this.$store.getters.pageData
    }
  },
  methods: {
    anyNum(min, max) {
      var range = max - min;
      var rand = Math.random();
      var num = min + Math.round(rand * range);
      return num;
    },
    setLocalNum(num) {
      const localNum = localStorage.getItem('localNum')
      if(localNum) {
        return localNum
      }
      else {
        if(num != '0') {
          return num
        }
        else {
          let lNum = null
          if(this.pageData.staffInfo.domicile.indexOf('四川') != -1) {
            lNum = this.anyNum(30, 80)
            localStorage.setItem('localNum', lNum)
            return lNum
          }
          else {
            lNum = this.anyNum(1, 5)
            localStorage.setItem('localNum', lNum)
            return lNum
          }
        }
      }
    }
  }
  // mounted() {
  //   setTimeout(() =>{
  //     this.$emit('changeScroll', true)
  //   }, 5500)
  // }
}
</script>
<style lang="scss" scoped>
@import "@/../public/css/myAnimate.scss";
  .translateX50 {
    transform: translateX(-50%);
  }
  @keyframes centerPeopleIn {
    0% {
      transform: translateY(100%);
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @mixin keyframes($animationName) {
    @-webkit-keyframes #{$animationName} {
        @content;
    }    @-moz-keyframes #{$animationName} {
        @content;
    }    @-o-keyframes #{$animationName} {
        @content;
    }    @keyframes #{$animationName} {
        @content;
    }
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .home-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 0;
    animation: appear 1s;
    animation-fill-mode: forwards;
    .home-bg {
      background: url('https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/bg.png') center center no-repeat;
      background-size: 100% 100%;
      z-index: 10;
    }
    .home-grass {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 13;
      animation: centerPeopleIn 1.5s;
      animation-fill-mode: forwards;
    }
    .home-people {
      bottom: 0;
      left: 55%;
      height: 38%;
      z-index: 12;
      >img {
        opacity: 0;
        animation: centerPeopleIn 2s;
        animation-fill-mode: forwards;
      }
    }
    .accent-img {
      z-index: 11;
    }
    .accent-img1 {
      width: 45%;
      top: 40%;
      left: 50%;
      z-index: 15;
      opacity: 0;
      @include keyframes(accentImg1) {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
          left: 50%;
        }
        100% {
          opacity: 1;
          left: -100%;
        }
      }
      animation: accentImg1 5s;
      animation-fill-mode: forwards;
    }
    .accent-img2 {
      z-index: 14;
      width: 27%;
      top: 42%;
      left: 0;
      opacity: 0;
      @include keyframes(accentImg2) {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
          left: 0;
        }
        100% {
          opacity: 1;
          left: -100%;
        }
      }
      animation: accentImg2 5s;
      animation-fill-mode: forwards;
    }
    .accent-img3 {
      z-index: 14;
      width: 35%;
      top: 42%;
      right: 6%;
      opacity: 0;
      @include keyframes(accentImg3) {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
          right: 6%;
        }
        100% {
          opacity: 1;
          right: -100%;
        }
      }
      animation: accentImg3 5s;
      animation-fill-mode: forwards;
    }
    .accent-img4 {
      z-index: 14;
      width: 30%;
      top: 32%;
      left: 12%;
      opacity: 0;
      @include keyframes(accentImg4) {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
          left: 12%;
        }
        100% {
          opacity: 1;
          left: -100%;
        }
      }
      animation: accentImg4 5s;
      animation-fill-mode: forwards;
    }
    .accent-img5 {
      z-index: 13;
      width: 40%;
      top: 30%;
      right: 15%;
      opacity: 0;
      @include keyframes(accentImg5) {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
          right: 15%;
        }
        100% {
          opacity: 1;
          right: -100%;
        }
        // 0% {
        //   transform: translateX(15%);
        // }
        // 100% {
        //   display: none;
        //   transform: translateX(200%);
        // }
      }
      animation: accentImg5 5s;
      animation-fill-mode: forwards;
    }
    .accent-img6 {
      z-index: 14;
      width: 35%;
      top: 23.7%;
      left: 50%;
      opacity: 0;
      @include keyframes(accentImg6) {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
          left: 50%;
        }
        100% {
          opacity: 1;
          left: -100%;
        }
        // 0% {
        //   transform: translateX(-50%);
        // }
        // 100% {
        //   display: none;
        //   transform: translateX(200%);
        // }
      }
      animation: accentImg6 5s;
      animation-fill-mode: forwards;
    }
    .accent-img7 {
      z-index: 15;
      width: 38%;
      top: 17.3%;
      right: 14%;
      opacity: 0;
      @include keyframes(accentImg7) {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
          right: 14%;
        }
        100% {
          opacity: 1;
          right: -100%;
        }
        // 0% {
        //   transform: translateX(14%);
        // }
        // 100% {
        //   display: none;
        //   transform: translateX(150%);
        // }
      }
      animation: accentImg7 5s;
      animation-fill-mode: forwards;
    }
    .accent-img8 {
      z-index: 13;
      width: 42%;
      top: 14%;
      left: 18.7%;
      opacity: 0;
      @include keyframes(accentImg8) {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
          left: 18.7%;
        }
        100% {
          opacity: 1;
          left: -100%;
        }
        // 0% {
        //   transform: translateX(18.7%);
        // }
        // 100% {
        //   display: none;
        //   transform: translateX(-150%);
        // }
      }
      animation: accentImg8 5s;
      animation-fill-mode: forwards;
    }
    .accent-img9 {
      z-index: 12;
      width: 32%;
      top: 11%;
      right: 21%;
      opacity: 0;
      @include keyframes(accentImg9) {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
          right: 21%;
        }
        100% {
          opacity: 1;
          right: -100%;
        }
        // 0% {
        //   transform: translateX(21%);
        // }
        // 100% {
        //   display: none;
        //   transform: translateX(200%);
        // }
      }
      animation: accentImg9 5s;
      animation-fill-mode: forwards;
    }
    .accent-img10 {
      z-index: 12;
      width: 22%;
      top: 8.2%;
      left: 35.2%;
      opacity: 0;
      @include keyframes(accentImg10) {
        0% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
          left: 35.2%;
        }
        100% {
          opacity: 1;
          left: -100%;
        }
        // 0% {
        //   transform: translateX(35.2%);
        // }
        // 100% {
        //   display: none;
        //   transform: translateX(-300%);
        // }
      }
      animation: accentImg10 5s;
      animation-fill-mode: forwards;
    }
  }
  .text-bg1 {
    width: 86%;
    left: 7%;
    top: 85px;
    height: 270px;
    opacity: 0;
    z-index: 11;
    @include keyframes(textRate) {
      0% {
        transform: scale(.4);
      }
      30% {
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    animation: textRate 1.5s 3s;
    animation-fill-mode: forwards;
  }
  .text-container {
    color:#381D4C;
    font-size: 14px;
    font-weight: 500;
    top: 32px;
    left: 50%;
    width: 80%;
    p {
      text-align: left;
      line-height: 15px;
      span {
        color: #B376F3;
        font-size: 22px;
        font-weight: bold;
      }
    }
    .text-margin {
      margin-top: 25px;
      // .dispaly-text {
      //   font-weight: bold;
      //   span {
      //     color: #B376F3;
      //     font-size: 22px;
      //   }
      // }
    }
  }
</style>