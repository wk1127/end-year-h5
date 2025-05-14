<template>
  <div
    class="loading-bg"
    :style="`background: url(${PUBLICIMGURL}loading/bg.png) no-repeat center;background-size: 100% 100%;`"
  >
    <div class="loading-content">
      <img class="img" :src="`${PUBLICIMGURL}loading/loading.gif`" />
      <div class="count">{{ count }}%</div>
      <!-- <div class="loading-text">鱼爪号准备出发<span class="dotting"></span></div> -->
    </div>

    <img style="display: none" src="/img2/data/bg.png" alt="">
    <img style="display: none" src="/img2/data/bg1.png" alt="">
    <img style="display: none" src="/img2/data/bt.png" alt="">
    <img style="display: none" src="/img2/data/fish.png" alt="">
    <img style="display: none" src="/img2/data/girl.png" alt="">
    <img style="display: none" src="/img2/data/save.png" alt="">
    <img style="display: none" src="/img2/data/shadow.png" alt="">
  </div>
</template>

<script>
import { getToken, getVerifyTime } from "@/utils/auth";
export default {
  name: "Loading2",
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
        // console.log(this.$route.path)
        // console.log(this.$route.query.from)
        // if(this.$route.path === '/two'){
        //   this.$route.query.from = ''
        // }
        const HASTOKEN = getToken();
        const LASTVALIDATIONTIME = Number(getVerifyTime());
        const CURRENTTIME = new Date().getTime();
        // if (!(HASTOKEN && LASTVALIDATIONTIME)) {
        //   this.$router.push("/two/login");
        //   return
        // }
        // if (CURRENTTIME - LASTVALIDATIONTIME >= 2 * 60 * 60 * 1000) {
        //   this.$router.push("/two/login");
        //   return
        // }
        // let fromRoute =
        //   this.$route.query.from === "/two" ? "" : this.$route.query.from;
        // this.$router.push({ path: fromRoute || "/two/login" });
        if (!(HASTOKEN && LASTVALIDATIONTIME)) {
          this.$router.push("/threeFrames");
          return
        }
        if (CURRENTTIME - LASTVALIDATIONTIME >= 2 * 60 * 60 * 1000) {
          this.$router.push("/threeFrames");
          return
        }
        let fromRoute =
          this.$route.query.from === "/two" ? "" : this.$route.query.from;
        this.$router.push({ path: fromRoute || "/threeFrames" });
      }
    },
  },
  created() {
    this.preload();
  },
  methods: {
    preload: function () {
      let imgs = [
        // 数据页面
        `data/bg.png`,
        `data/bg1.png`,
        `data/bt.png`,
        `data/fish.png`,
        `data/girl.png`,
        `data/save.png`,
        `data/shadow.png`,

        // 登录页面
        `login/01.png`,
        `login/02.png`,
        `login/03.png`,
        `login/04.png`,
        `login/05.png`,
        `login/06.png`,
        `login/07.png`,
        `login/08.png`,
        `login/09.png`,
        `login/10.png`,
        `login/bg.png`,
        `login/bg2.png`,
        `login/btn.png`,
        `login/close-music.png`,
        `login/hand.png`,
        `login/input.png`,
        `login/input2.png`,
        `login/music.png`,
        `login/ticket.png`,

        // station
        `station/one/bg.png`,
        `station/one/bird1.png`,
        `station/one/bird2.png`,
        `station/one/bird3.png`,
        `station/one/card.png`,
        `station/one/plant.png`,
        `station/one/train.png`,
        `station/one/train1.png`,

        // station页面
        `station/two/bg.png`,
        `station/two/bg1.png`,
        `station/two/card.png`,
        `station/two/house1.png`,
        `station/two/house2.png`,
        `station/two/house3.png`,
        `station/two/house4.png`,
        `station/two/house5.png`,
        `station/two/house6.png`,
        `station/two/light.png`,
        `station/two/photo.png`,
        `station/two/photo1.png`,
        `station/two/virus1.png`,
        `station/two/virus2.png`,

        // step2
        `step/step2/bg.png`,
        `step/step2/car.png`,
        `step/step2/station.png`,

        // step3
        `step/step3/bg.png`,
        `step/step3/door.png`,
        `step/step3/door-frame.png`,
        `step/step3/lg.png`,

        // step5
        `step/step5/img1.png`,
        `step/step5/img2.png`,
        `step/step5/img3.png`,
        `step/step5/img4.png`,
        `step/step5/img5.png`,

        // step6
        `step/step6/bg.png`,
        `step/step6/bg1.png`,
        `step/step6/cloud.png`,
        `step/step6/people.png`,
        `step/step6/pp1.png`,
        `step/step6/pp2.png`,
        `step/step6/pp3.png`,
        `step/step6/pp4.png`,
        `step/step6/pp5.png`,
        `step/step6/pp6.png`,
        `step/step6/pp7.png`,
        `step/step6/station.png`,
        `step/step6/zw.png`,

        // step7
        `step/step7/01bg.png`,
        `step/step7/album.png`,
        `step/step7/bg.png`,
        `step/step7/img1.png`,
        `step/step7/img2.png`,
        `step/step7/img3.png`,
        `step/step7/img4.png`,
        `step/step7/img5.png`,
        `step/step7/img6.png`,
        `step/step7/img7.png`,
        `step/step7/pic1.png`,
        `step/step7/pic2.png`,
        `step/step7/pic3.png`,
        `step/step7/pic4.png`,
        `step/step7/pic5.png`,
        `step/step7/station.png`,

        // step8
        `step/step8/bg.png`,
        `step/step8/board.png`,
        `step/step8/logo1.png`,
        `step/step8/logo2.png`,
        `step/step8/logo2_b.png`,
        `step/step8/logo3.png`,
        `step/step8/logo4.png`,
        `step/step8/logo4_b.png`,
        `step/step8/logo5.png`,
        `step/step8/logo6.png`,
        `step/step8/logo7.png`,
        `step/step8/logo8.png`,
        `step/step8/logo8_b.png`,
        `step/step8/logo9.png`,
        `step/step8/logo9_b.png`,
        `step/step8/logo10.png`,
        `step/step8/logo10_b.png`,
        `step/step8/station.png`,
        `step/step8/zw.png`,

        // step9
        `step/step9/bg.png`,
        `step/step9/card.png`,
        `step/step9/img1.png`,
        `step/step9/img2.png`,
        `step/step9/img3.png`,
        `step/step9/img4.png`,
        `step/step9/img5.png`,
        `step/step9/img6.png`,
        `step/step9/img7.png`,
        `step/step9/img8.png`,
        `step/step9/img9.png`,
        `step/step9/img10.png`,
        `step/step9/img11.png`,
        `step/step9/img12.png`,
        `step/step9/leaf.png`,

        // step10
        `step/step10/bg1.png`,
        `step/step10/bg2.png`,
        `step/step10/gift.png`,
        `step/step10/station.png`,
        `step/step10/train_ty.png`,

        // step11
        `step/step11/bg.png`,
        `step/step11/bg1.png`,
        `step/step11/bg2.png`,
        `step/step11/bt.png`,
        `step/step11/hand.png`,
        `step/step11/heart.png`,
        `step/step11/img.png`,
        `step/step11/img1.png`,
        `step/step11/mask.png`,
        `step/step11/bottom.png`,
        `step/step11/bottom1.png`,
        `step/step11/up.png`,
        `step/step11/up1.png`,

        // step13
        `step/step12/bg.png`,
        `step/step12/bg1.png`,
        `step/step12/bg2.png`,
        `step/step12/bg3.png`,
        `step/step12/bt.png`,
        `step/step12/close.png`,
        `step/step12/fire.gif`,
        `step/step12/lantern.png`,
        `step/step12/lantern1.png`,
        `step/step12/lantern2.png`,
        `step/step12/lantern3.png`,
        `step/step12/lantern4.png`,
        `step/step12/meteor.png`,

        // threeFrames
        `threeFrames/icon.png`,
        `threeFrames/img1.png`,
        `threeFrames/img2.png`,
        `threeFrames/img3.png`,
      ];

      let i = 0;
      for (let img of imgs) {
        let image = new Image();
        // image.src = img;
        image.src = this.PUBLICIMGURL + img;
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
