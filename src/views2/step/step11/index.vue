<template>
  <div
    class="container animate__animated animate__slow animate__fadeIn"
    :class="{ animate__fadeOut: leave }"
    :style="{
      background: `url(${PUBLICIMGURL}step/step11/bg.png) no-repeat bottom / 100%`,
    }"
  >
    <div class="set-out" @click="again()">
      <span class="dot"></span>
      查看照片
    </div>

    <div
      class="letter"
      :class="{ 'letter-leave': letterContentShow }"
      v-show="letterShow"
      :style="{ backgroundImage: `url(${PUBLICIMGURL}step/step11/hand.png)` }"
    >
      <img
        class="heart"
        @click="toView()"
        :src="`${PUBLICIMGURL}step/step11/heart.png`"
        alt=""
      />
    </div>

    <div class="mask" v-if="maskShow">
      <div class="photo-list">
        <div
          v-for="(item, index) in imgList"
          :key="index"
          class="photo-item"
          :style="{
            animation: `imgEnter 1s ease ${2.5 * index}s, img${
              index + 1
            }Leave 1s ease ${1 + index * 2.5}s, img${index + 1}PuckUp 1s ease ${
              1 +
              (imgList.length - 1) * 2.5 +
              1 +
              (imgList.length - index) * 0.1
            }s`,
          }"
        >
          <div class="photo-desc" :style="{
            backgroundImage: `url(${PUBLICIMGURL}step/step11/up1.png)`,
          }">{{ item.describe }}</div>
          <div class="photo-img" :style="{
            backgroundImage: `url(${PUBLICIMGURL}step/step11/bottom1.png)`,
          }">
            <img :src="item.img" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- swiper相册 -->
    <div
      class="mask"
      :class="{ 'close-mask': animation }"
      v-if="swipeShow"
      @click="closeSwipe()"
    >
      <div class="example-3d">
        <swiper ref="mySwiper" class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="(image, index) in imgList"
            :key="index"
            :style="{
              backgroundImage: `url(${PUBLICIMGURL}step/step11/up.png)`,
            }"
            ><img :src="image.img" alt="" />
            <div class="photo-desc">{{ image.describe }}</div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <img class="close" :src="`${PUBLICIMGURL}step/step12/close.png`" alt="" />
    </div>

    <div class="mask" v-if="letterContentShow">
      <div
        class="letter-box"
        :style="{ backgroundImage: `url(${PUBLICIMGURL}step/step11/bg1.png)` }"
      >
        <div class="name">{{ pageData.staffInfo.name }}：</div>
        <div class="content" v-html="content">
          <!-- {{ text }} -->
        </div>
        <img
          class="mask1"
          :src="`${PUBLICIMGURL}step/step11/mask.png`"
          alt=""
        />
        <div class="footer">
          {{ pageData.teamInfo.higher_ups_message_nickname }}
        </div>
      </div>
      <div
        class="bt"
        :style="{ backgroundImage: `url(${PUBLICIMGURL}step/step11/bt.png)` }"
        @click="toNextPage()"
      >
        我要送祝福
      </div>
    </div>
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
      text: '图形商标和文字商标的区别↵图形商标是指以图形构成的商标。文字商标是指用汉字及其拼音字母或其他文字、字母组合而成，使用在商品或服务上的标志。↵↵两者区别如下：↵↵1、图形商标是以图形来表达的，表达直观，艺术感强，有好很强的感染力，不受语言限制，不受国界限制，一般都可以识别，但是称呼和传播性略差。图形商标的查询难度大于文字图标，注册的成功率低于文字图标。↵↵2、而文字商标是以文字的形式来表达的，文字商标同是具备形、音、意，能直观的传达信息，便于传播和称呼，但是受地域和语言的影响较大，对于异国文字的商标很难被当地人记忆和认知。↵↵当然，也可以选择文字和图形组合的商标进行注册，这样一来，商标可同时具备文字商标和图形商标双方的优点。不过，权盾提醒大家，申请组合商标的时候分开提交申请核准的概率会更大。↵↵选用图形商标或者文字商标最好还是不要拘泥于他们的优缺点，正确的做法是根据行业自身需求来注册商标。',
      maskShow: true,
      leave: false,
      letterShow: false,
      letterContentShow: false,
      imgList: [],
      swipeShow: false,
      animation: false,
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
  computed: {
    pageData() {
      return this.$store.state.pageData;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    content() {
      return this.pageData.teamInfo.higher_ups_message_content.replace(/\n/g, '<br/>')
    }
  },
  mounted() {
    setTimeout(() => {
      this.maskShow = false; // 关闭mask
      this.letterShow = true; // 显示手递信
    }, 1000 + (this.imgList.length - 1) * 2500 + 1000 + this.imgList.length * 100 + 1000);
  },
  created() {
    this.imgList = this.pageData.teamInfo.picture_content;
  },
  methods: {
    again() {
      // this.maskShow = true;
      // setTimeout(() => {
      //   this.maskShow = false; // 关闭mask
      // }, 1000 + (this.imgList.length - 1) * 2500 + 1000 + this.imgList.length * 100 + 1000);
      this.animation = false;
      this.swipeShow = true;

      this.letterShow = false;
    },
    toView() {
      this.letterContentShow = true;
    },
    toNextPage() {
      this.leave = true;
      setTimeout(() => {
        this.$router.push("/two/step12");
      }, 1000);
    },
    closeSwipe() {
      this.letterShow = true;
      this.animation = true;
      setTimeout(() => {
        this.swipeShow = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
@import "./album.scss";
.example-3d {
  width: 100%;
  // height: 400px;
  position: absolute;
  bottom: 50%;
    transform: translateY(50%);
}

.close {
  position: absolute;
  bottom: 0vh;
  left: 321xx;
  width: 110xx;
  height: auto;
}

.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    // height: 280px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    padding: 10px;
    img {
      width: 100%;
      // height: 188px;
      max-height: 80vh;
    }
    .photo-desc {
      margin-top: 16px;
      box-sizing: border-box;
      width: 100%;
      color: #532b1f;
      font-size: 12px;
      line-height: 22px;
      font-weight: bold;
      text-align: left;
      word-break: break-word;
    }
  }
  /deep/ .swiper-wrapper{
    align-items: center;
  }
  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
}
</style>

<style lang="scss">
@keyframes imgEnter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes img1Leave {
  0% {
    transform: scale(1) rotate(0deg) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.6) rotate(30deg) translate(-80%, -80%);
  }
}
@keyframes img1PuckUp {
  0% {
    transform: scale(0.6) rotate(30deg) translate(-80%, -80%);
  }
  100% {
    transform-origin: 100xx calc(50vh - 744xx);
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
  }
}
@keyframes img2Leave {
  0% {
    transform: scale(1) rotate(0deg) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.6) rotate(-20deg) translate(-55%, -90%);
  }
}
@keyframes img2PuckUp {
  0% {
    transform: scale(0.6) rotate(-20deg) translate(-55%, -90%);
  }
  100% {
    transform-origin: 100xx calc(50vh - 744xx);
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
  }
}
@keyframes img3Leave {
  0% {
    transform: scale(1) rotate(0deg) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.6) rotate(20deg) translate(-70%, -60%);
  }
}
@keyframes img3PuckUp {
  0% {
    transform: scale(0.6) rotate(20deg) translate(-70%, -60%);
  }
  100% {
    transform-origin: 100xx calc(50vh - 744xx);
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
  }
}
@keyframes img4Leave {
  0% {
    transform: scale(1) rotate(0deg) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.6) rotate(-30deg) translate(-70%, -70%);
  }
}
@keyframes img4PuckUp {
  0% {
    transform: scale(0.6) rotate(-30deg) translate(-70%, -70%);
  }
  100% {
    transform-origin: 100xx calc(50vh - 744xx);
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
  }
}
@keyframes img5Leave {
  0% {
    transform: scale(1) rotate(0deg) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.4) rotate(30deg) translate(-90%, -90%);
  }
}
@keyframes img5PuckUp {
  0% {
    transform: scale(0.4) rotate(30deg) translate(-90%, -90%);
  }
  100% {
    transform-origin: 100xx calc(50vh - 744xx);
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
  }
}
@keyframes img6Leave {
  0% {
    transform: scale(1) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.5) translate(-70%, -70%);
  }
}
@keyframes img6PuckUp {
  0% {
    transform: scale(0.5) translate(-70%, -70%);
  }
  100% {
    transform-origin: 100xx calc(50vh - 744xx);
    transform: scale(0) translate(-50%, -50%);
  }
}
@keyframes img7Leave {
  0% {
    transform: scale(1) rotate(0deg) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.6) rotate(45deg) translate(-110%, -50%);
  }
}
@keyframes img7PuckUp {
  0% {
    transform: scale(0.6) rotate(45deg) translate(-110%, -50%);
  }
  100% {
    transform-origin: 100xx calc(50vh - 744xx);
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
  }
}
@keyframes img8Leave {
  0% {
    transform: scale(1) rotate(0deg) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.4) rotate(-30deg) translate(-70%, -70%);
  }
}
@keyframes img8PuckUp {
  0% {
    transform: scale(0.4) rotate(-30deg) translate(-70%, -70%);
  }
  100% {
    transform-origin: 100xx calc(50vh - 744xx);
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
  }
}
@keyframes img9Leave {
  0% {
    transform: scale(1) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.5) translate(-50%, calc(-50% - 170xx));
  }
}
@keyframes img9PuckUp {
  0% {
    transform: scale(0.5) translate(-50%, calc(-50% - 170xx));
  }
  100% {
    transform-origin: 100xx calc(50vh - 744xx);
    transform: scale(0) translate(-50%, -50%);
  }
}
@keyframes img10Leave {
  0% {
    transform: scale(1) rotate(0deg) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.6) rotate(-30deg) translate(-70%, -70%);
  }
}
@keyframes img10PuckUp {
  0% {
    transform: scale(0.6) rotate(-30deg) translate(-70%, -70%);
  }
  100% {
    transform-origin: 100xx calc(50vh - 744xx);
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
  }
}
</style>
