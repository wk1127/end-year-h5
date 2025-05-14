<template>
  <div class="page swiper-inner">
    <!-- 预加载 透明 不显示 -->
    <section class="section-img-opacity">
      <img
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/bg-0.png"
        alt=""
      />
      <img
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/bg-1.png"
        alt=""
      />
      <img
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/bg-2.png"
        alt=""
      />
    </section>

    <section
      class="section-bg ani"
      swiper-animate-effect="bg__animate"
      swiper-animate-duration="4s"
      swiper-animate-delay="1s"
    ></section>

    <section
      :class="
        isOpenLetterSync === true
          ? 'section-text text__animate__zoomOut'
          : 'section-text ani ani-delay text__animate__zoomIn'
      "
      swiper-animate-effect="text__animate__zoomIn"
      swiper-animate-duration="1s"
      swiper-animate-delay="1s"
    >
      <div class="text">
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="1.5s"
        >
          <span class="color-default">2021第一份祝福</span><br />
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2s"
        >
          亲爱的{{ pageData.staffInfo.name }}<br />
          2021将至<br />
          你猜谁会给你送上<br />
          第一份新年祝福呢？
        </p>
      </div>
      <img
        class="fish ani ani-delay"
        swiper-animate-effect="animate__fadeIn"
        swiper-animate-duration="2s"
        swiper-animate-delay="1.5s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/fish.png"
        alt=""
      />
    </section>
    <section class="section-tree">
      <img
        class="tree ani ani-delay"
        swiper-animate-effect="animate__fadeIn"
        swiper-animate-duration="2s"
        swiper-animate-delay="1.5s"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/tree.png"
        alt=""
      />
    </section>
    <section
      :class="
        isOpenLetterSync === true
          ? 'section-letter letter__animate__zoomOut'
          : 'section-letter ani ani-delay letter__animate__fadeInUp'
      "
      swiper-animate-effect="letter__animate__fadeInUp"
      swiper-animate-duration="2s"
      swiper-animate-delay="2.5s"
    >
      <img
        class="letter"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/letter.png"
        alt=""
      />

      <div
        class="heart ani"
        swiper-animate-effect="heart__animate__heartBeat"
        swiper-animate-duration="2s"
        swiper-animate-delay="4.5s"
        @click="openLetter"
      >
        <img
          src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/heart.png"
          alt=""
        />
        <span class="look">查看祝福</span>
      </div>
    </section>

    <!-- 打开信封 -->
    <section
      v-show="isOpenLetterSync === true"
      class="section-details ani ani-delay"
      swiper-animate-effect="details__animate"
      swiper-animate-duration="2s"
      swiper-animate-delay="1s"
    >
      <img
        class="letter-after"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/letter-after.png"
        alt=""
      />
      <div
        class="details ani"
        swiper-animate-effect="letter-details__animate"
        swiper-animate-duration="2s"
        swiper-animate-delay="1.5s"
      >
        <div class="text">
          <p v-html="obj.output" style="font-size: 4.8vw"></p>
        </div>
        <img
          v-show="isPrintOver === true"
          class="signature ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0s"
          src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/signature.png"
          alt=""
        />
      </div>
      <img
        class="letter-before"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/letter-before.png"
        alt=""
      />
    </section>
  </div>
</template>

<script>
import EasyTyper from "easy-typer-js";
import mixins from "@/mixins/index";
export default {
  mixins: [mixins],
  data() {
    return {
      isPrintOver: false, // 文字是否打印完
      typed: "",
      obj: {
        output: "",
        isEnd: false,
        speed: 150,
        singleBack: false,
        sleep: 0,
        type: "normal",
        backSpeed: 0,
        sentencePause: false,
        // 其他参数省略
      },
    };
  },
  props: ["slidePublicData", "isOpenLetter"],
  components: {},
  created() {},
  computed: {
    isOpenLetterSync: {
      get: function () {
        return this.isOpenLetter;
      },
      set: function (val) {
        this.$emit("update:isOpenLetter", val);
      },
    },
    pageData() {
      return this.$store.getters.pageData;
    },
  },
  methods: {
    funTyed() {
      this.obj.output = ''
      this.allowSlide();
      const $this = this;
      const typed = new EasyTyper(
        this.obj,
        `亲爱的${this.pageData.staffInfo.name}，新年伊始，万象更新，值此辞旧迎新之际，我要感谢勤勤恳恳工作的全体伙伴，你们创造了鱼爪一个又一个奇迹；2021，我们齐头并进，砥砺前行，助推53122计划、赢取自身未来。在这里，祝福亲爱的小伙伴们，来年牛运当头，牛年大吉！`,
        function () {
          console.log('this.isPrintOver', this.isPrintOver)
          $this.isPrintOver = true
          setTimeout(() => {
            $this.$emit("canAllowSlide");
          }, 1 * 1000);
        }
      );
      console.log(typed);
    },
    allowSlide() {
      this.$emit("canAllowSlide");
    },
    // 打开信封
    openLetter() {
      this.btnMusicPlay();
      this.isOpenLetterSync = true;
      setTimeout(() => {
        this.funTyed();
      }, 3.5 * 1000);
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../common.scss";
@import "./index.scss";
</style>
