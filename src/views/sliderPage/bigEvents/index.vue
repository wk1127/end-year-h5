<template>
<v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown">
  <div class="container">
    <module-position class="wh100">
      <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/page-container.png" class="home-bg wh100">
      <module-position class="contianer-top-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/top-img.png" class="w100">
      </module-position>
      <module-position class="contianer-bottom-img">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/bottom-img.png" class="w100">
      </module-position>
    </module-position>
    <module-position class="text-bg translateX50">
      <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/text-bg.png" class="text-bg-img wh100">
      <module-position :class="['text-memory', slidePage === 1 ? slideArr.length === 1 ? 'text-memory-in' : 'text-memory-intow' : 'text-memory-out']">
        <p>而现在</p>
        <p>2020即将远去</p>
        <p>那你还记得</p>
        <p>我们一起奋斗的时光吗</p>
      </module-position>
      <div :class="['text-big-events','translateX50' , slidePage === 2 ? 'text-memory-intow' : slideArr.includes(2) ? 'text-memory-out' : '']">
        <div class="event-title">2020大事件：</div>
        <div class="events-content w100" ref="refText">
          <ul>
            <li v-for="(item, index) in pageData.bigEvent" :key="index"><span>></span>{{item.event}}</li>
          </ul>
        </div>
      </div>
      <module-position :class="['text-memory', slidePage === 3 ? 'text-memory-intow' : slideArr.includes(3) ? 'text-memory-out' : '']">
        <p>你看</p>
        <p>2020虽然惊险</p>
        <p>但有你的陪伴</p>
        <p>我很勇敢</p>
        <p>一点都不怕</p>
        <p>且茁壮成长</p>
      </module-position>
      <module-position :class="['text-memory', slidePage === 4 ? 'text-memory-intow' : slideArr.includes(4) ? 'text-memory-out' : '']">
        <p>2020的我们确实很美好</p>
        <p>不过</p>
        <p>它终究要过去</p>
        <div>
          <p>此刻</p>
          <p>我总想</p>
          <p>为我们的2020</p>
          <p>留下点什么</p>
        </div>
      </module-position>
      <module-position :class="['bottom-img', slidePage === 2 ? 'bottom-img-small': 'bottom-img-large' ]">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/bottom-people.png" class="w100">
      </module-position>
    </module-position>
  </div>
</v-touch>
</template>
<script>
import ModulePosition from '@/components/ModulePosition'
// import mixins from '../mixins/index.js'
export default {
  // mixins: [mixins],
  components: { ModulePosition },
  data() {
    return {
      slidePage: 1,
      slideArr: [1]
    }
  },
  computed: {
    pageData() {
      return this.$store.getters.pageData
    }
  },
  methods: {
    swipeup() {
      if(this.slidePage < 4) {
        this.slidePage++
        if(this.slidePage === 2) {
          this.textToBottom()
        }
        if(!this.slideArr.includes(this.slidePage)) {
          this.slideArr.push(this.slidePage)
        }
        if(this.slideArr.includes(4)) {
           setTimeout(() =>{
              this.$emit('onNext')
            }, 500)
        }
      }
    },
    textToBottom(speed = 1){
      var clientHeight=this.$refs.refText.clientHeight;
      var scrollHeight=this.$refs.refText.scrollHeight;
      var height=scrollHeight-clientHeight; //超出窗口上界的值就是底部的scrolTop的值
      this.$refs.refText.scrollTop+=speed;
      if (this.$refs.refText.scrollTop < height) {
        var c=setTimeout(()=>this.textToBottom(speed),40);
      }else {
        clearTimeout(c);
      }
    },
    swipedown() {
      if(this.slidePage > 1 && this.activeIndex === '9') {
        this.slidePage--
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @keyframes text1 {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform:scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform:scale3d(1.1, 1.1, 1.1);
    }

    100% {
      opacity: 1;
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
      // background: url('https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/page-container.png') center center no-repeat;
      // background-size: 100% 100%;
      // z-index: 10;
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
      width: 57%;
      height: 59.7vh;
      top: 16.5vh;
      left: 50%;
    }
    .text-bg-img {
      animation: text1 1s .7s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
    .text-memory {
      top: 65px;
      left: 33px;
      color: #434149;
      font-size: 14px;
      opacity: 0;
      p {
        text-align: left;
        margin: 0;
        line-height: 30px;
      }
      div {
        margin-top: 30px;
      }
    }
    .text-memory-in {
      animation: textBg 1s 1.7s;
      animation-fill-mode: forwards;
    }
    .text-memory-intow {
      animation: textBg 1s .5s;
      animation-fill-mode: forwards;
    }
    .text-memory-out {
      animation: textOut .5s;
      animation-fill-mode: forwards;
    }
    .bottom-img {
      width: 100px;
      right: -30px;
      bottom: -30px;
      opacity: 0;
      animation: textBg 1s 1.7s;
      animation-fill-mode: forwards;
    }
    .text-big-events {
      position: absolute;
      top: 50px;
      left: 50%;
      font-size: 14px;
      opacity: 0;
      width: 72%;
      .event-title {
        color: #B376F3;
        font-size: 14px;
        font-weight: bolder;
        margin-bottom: 15px;
        text-align: left;
      }
      .events-content {
        overflow-y: scroll;
        overflow-x: hidden;
        height: 200px;
        position: absolute;
        ul {
          height: 200px;
          li {
            text-align: left;
            font-size: 14px;
            color: #434149;
            font-size: 12px;
            line-height: 20px;
            span {
              color: #B376F3;
              display: inline-block;
              margin-right: 5px;
              font-size: 14px;
              font-weight: bold;
            }
          }
        }
      }
      // p {
      //   color: #434149;
      //   font-size: 12px;
      //   line-height: 20px;
      //   margin: 0;
      //   text-align: left;
      //   span {
      //     color: #B376F3;
      //     display: inline-block;
      //     margin-right: 5px;
      //     font-size: 14px;
      //     font-weight: bold;
      //   }
      // }
    }
  }
</style>