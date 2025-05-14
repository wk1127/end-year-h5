<template>
<v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown">
  <div class="home-container">
    <div class="home-container">
      <module-position class="accent-bg wh100" />
      <module-position class="home-grass">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/grass.png" class="w100" style="display: block">
      </module-position>
      <module-position class="home-people translateX50">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/people.png" class="h100">
      </module-position>
    </div>
    <div class="">
      <module-position v-if="!haveLocal" ref="swipePage1" :class="[swipePage === 1 ? slideArr.length === 1 ? 'text-bg-in' : 'text-bg3-in' : 'text-bg-out' , 'translateX50', 'text-bg']">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/text-bg2.png" class="w100">
        <module-position class="text-container">
          <div>
            <p>其中有</p>
          </div>
          <div class="text-margin">
            <p class="dispaly-text" v-if="pageData.staffInfo.ceoCount > 0"><span>{{ pageData.staffInfo.ceoCount }}</span>个总裁</p>
            <p class="dispaly-text" v-if="pageData.staffInfo.vicePresidentCount > 0"><span>{{ pageData.staffInfo.vicePresidentCount }}</span>个副总裁</p>
            <p class="dispaly-text" v-if="pageData.staffInfo.generalManagerCount > 0"><span>{{ pageData.staffInfo.generalManagerCount }}</span>个总经理</p>
            <p class="dispaly-text" v-if="pageData.staffInfo.managerCount > 0"><span>{{ pageData.staffInfo.managerCount }}</span>个经理</p>
          </div>
          <div class="text-margin">
            <p>是你学习的榜样</p>
          </div>
        </module-position>
      </module-position>
      <!-- <module-position :class="[ swipePage === 2 ? 'text-bg3-in' : slideArr.includes(2) ? 'text-bg-out' : '', 'translateX50', 'text-bg3']">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/text-bg3.png" class="w100">
        <module-position class="text-container3">
          <div>
            <p>悄悄告诉你</p>
            <p>鱼爪<span>{{ pageData.staffInfo.staff_count }}</span>个伙伴里</p>
            <p>有<span>{{ pageData.staffInfo.domicile_staff_count }}</span>个小伙伴</p>
          </div>
          <div class="text-margin">
            <p>和你来自同一个地方</p>
          </div>
        </module-position>
      </module-position> -->
      <module-position :class="[ swipePage === 2 ? 'text-bg3-in' : slideArr.includes(2) ? 'text-bg-out' : '', 'translateX50', 'text-bg4']">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/text-bg3.png" class="w100">
        <module-position class="text-container3">
          <div>
            <p>下次见面时</p>
            <p>请记得说：</p>
            <p>哇塞，原来你也来自</p>
            
          </div>
          <div class="text-margin">
            <p class="dispaly-text">{{ pageData.staffInfo.domicile }}</p>
          </div>
        </module-position>
      </module-position>
    </div>
  </div>
  </v-touch>
</template>
<script>
import ModulePosition from '@/components/ModulePosition'
import mixins from '../mixins/index.js'
export default {
  mixins: [mixins],
  components: { 
    ModulePosition,
  },
  data() {
    return {
      checkout: false,
      clickUp: false,
      swipePage: 1,
      slideArr: [1]
    }
  },
  computed: {
    pageData() {
      return this.$store.getters.pageData
    },
    haveLocal() {
      return this.pageData.staffInfo.ceoCount == 0 && 
      this.pageData.staffInfo.vicePresidentCount == 0 && 
      this.pageData.staffInfo.generalManagerCount == 0 && 
      this.pageData.staffInfo.managerCount == 0
    }
  },
  mounted() {
    if(this.haveLocal) {
      this.swipePage = 2
      setTimeout(() =>{
        this.$emit('onNext')
      }, 2500)
    }
  },
  methods: {
    swipeup() {
      this.clickUp = true
      if(this.swipePage < 2 && !this.haveLocal) {
        this.swipePage++
        if(!this.slideArr.includes(this.swipePage)) {
          this.slideArr.push(this.swipePage)
        }
        if(this.swipePage === 2) {
            setTimeout(() =>{
              this.$emit('onNext')
            }, 500)
        }
      }
    },
    swipedown() {
      if(this.swipePage > 1 && this.activeIndex === '3' && !this.haveLocal) {
        this.swipePage--
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/views/home/index.scss';
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
@keyframes textRateIn {
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
@keyframes textRateOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: scale(0.4);
    opacity: 0;
  }
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
.home-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  .accent-bg {
    background: url('https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/bg.png') center center no-repeat;
    background-size: 100% 100%;
  }
  .home-grass {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 13;
    @include keyframes(grassAnimate) {
      0% {
        opacity: 0;
        bottom: -100%;
      }
      30% {
        opacity: 0;
      }
      100% {
        opacity: 1;
        bottom: 0;
      }
    }
    animation: grassAnimate 2s;
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
}
  .text-bg {
    width: 66%;
    left: 17%;
    top: 75px;
    opacity: 0;
  }
  .text-bg-in {
    animation: textRateIn 1s 1.2s;
    animation-fill-mode: forwards;
  }
  .text-bg-out {
    animation: textRateOut .5s;
    animation-fill-mode: forwards;
  }
  .text-container {
    color:#381D4C;
    font-size: 15px;
    font-weight: 500;
    top: 25px;
    left: 25%;
    width: 80%;
    p {
      text-align: left;
      line-height: 15px;
      span {
        color: #B376F3;
        font-weight: bold;
      }
    }
    .text-margin {
      margin-top: 25px;
      .dispaly-text {
        color: #B376F3;
        font-weight: bold;
        span {
          font-size: 22px;
        }
      }
    }
  }
  .text-bg3 {
    width: 76%;
    left: 12%;
    top: 75px;
    opacity: 0;
  }
  .text-bg3-in {
    animation: textRateIn 1s .5s;
    animation-fill-mode: forwards;
  }
  .text-bg4 {
    width: 66%;
    left: 17%;
    top: 75px;
    opacity: 0;
  }
  .home-grass {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 13;
    animation: centerPeopleIn 1.5s;
    animation-fill-mode: forwards;
  }
  .text-container3 {
    color:#381D4C;
    font-size: 15px;
    font-weight: 500;
    top: 40px;
    left: 18%;
    width: 80%;
    p {
      text-align: left;
      line-height: 15px;
      span {
        color: #B376F3;
        font-weight: bold;
      }
    }
    .text-margin {
      margin-top: 25px;
      .dispaly-text {
        color: #B376F3;
        font-weight: bold;
        // span {
          font-size: 22px;
        // }
      }
    }
  }
</style>