<template>
  <div class="loading-bg">
    <div class="loading-content">
      <!-- <i></i> -->
      <div class="msg-box">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/loading/msg-box.png" />
        <div class="count">{{ count }}%</div>
      </div>
      <div class="loading-img"></div>
      <div class="loading-text">页面加载中<span class="dotting"></span></div>
    </div>
  </div>
</template>

<script>
// import { getToken, getVerifyTime } from "@/utils/auth";
export default {
  name: "Loading",
  components: {},
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count: function (val) {
      if (val === 100) {
        // 图片加载完成后跳转页面
        this.$store.dispatch("changeLoading", true);
        
        this.$router.push({path: this.$route.query.from ? '/conclusion' : '/home'})
      }
    },
  },
  created() {
    this.$router.replace({
      path: '/two'
    })
    this.preload();
  },
  methods: {
    preload: function () {
      let imgs = [
        // 先加载loading页的图片
        // loading
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/loading/01.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/loading/02.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/loading/03.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/loading/04.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/loading/05.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/loading/06.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/loading/msg-box.png",

        // bigEvents
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/bg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/bottom-img.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/bottom-people.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/page-container.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/bigEvents/text-bg.png",

        //  conclusion
        // slideEntryJob
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/after-0.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/after-1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/after-bk.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/before.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/cloud.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/fish.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideEntryJob/fish-ball.png",
        //  slideLast
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/bg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/clock1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/clock2.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/cloud1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/cloud2.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/fish.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/text-bg.png",
        // slideLetter1
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/bg-0.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/bg-1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/bg-2.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/details-bg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/fish.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/heart.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/letter.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/letter-after.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/letter-before.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/text-bg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLetter1/tree.png",
        // slideRole
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideRole/after.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideRole/girl.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideRole/girl-ball.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideRole/gril-shadow.png",
        // slideWork1
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork1/bg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork1/man.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork1/text-bg.png",
        // slideWork2
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork2/bg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork2/clock-0.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork2/clock-1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork2/girl1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork2/girl2.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork2/text-bg.png",
        // slideWork3
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork3/bg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork3/man.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork3/text-bg.png",
        // slideWork4
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork4/btn-bg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork4/computer.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork4/computer1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork4/icons.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork4/kz.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork4/text-bg.png",
        // slideWork5
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/bg-0.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/bg-1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/bg-2.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/bg-3.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/bg-4.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideWork5/text-bg.png",
        // theme
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/1yunbg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/2yun.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/3housebg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/4centerpeople.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/5rightpeople.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/6leftpeople.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/7rightpeople.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/8leftpeople.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/9movepeople.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/10zhuti.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/11hand.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/theme/12click.png",
        // 公共
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/arrows-up.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/bg1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/girl.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/girl-ball.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/logo.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/musicclose.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/musicopen.png",

        // localAccent
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img2.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img3.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img4.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img5.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img6.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img7.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img8.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img9.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/accent-img10.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/bg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/grass.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/people.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/text-bg1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/text-bg2.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/localAccent/text-bg3.png",


        // logIn
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/background-bottom.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/background-center.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/background-top.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/botton.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/count1.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/count2.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/count3.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/input.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/left-arrow.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/music.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/right-arrow.png",

        // medalWall
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/bg.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/bottom-img.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/button.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/contianer-bottom-img.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/medal.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/scroll-bar.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/scroll-slider.png",
        "https://mats.sudoyu.com/oa/end_of_2020_h5/img/medalWall/text-bg.png",
      ];

      let i = 0;
      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          i++;
          // 计算图片加载的百分数，绑定到percent变量
          this.count = Math.floor((i / imgs.length) * 100);
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
