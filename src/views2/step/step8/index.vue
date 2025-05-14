<template>
  <div
    class="container animate__animated animate__slow animate__fadeIn"
    :class="{ animate__fadeOut: leave, 'animate__delay-4s': leave }"
    :style="{
      background: `url(${PUBLICIMGURL}step/step8/bg.png)no-repeat bottom/100%`,
    }"
  >
    <audio
      ref="aideo"
      :src="`${PUBLICIMGURL}two/step9.mp3`"
      controls="controls"
      hidden="hidden"
    ></audio>
    <p class="p1">但是</p>
    <p class="p2">成功从来就不是一帆风顺</p>
    <p class="p3">可那又怎样</p>
    <p class="p4">2020虽有败战</p>
    <p class="p5">但更有属于我们的高光时刻</p>
    <div
      class="board"
      :style="{
        background: `url(${PUBLICIMGURL}step/step8/board.png)no-repeat center/100% 100%`,
      }"
    >
      <img class="logo logo1" :src="logoUrl.logo1" alt="logo1" />
      <img class="logo logo2 logo2_w" :src="logoUrl.logo2" alt="logo2" />
      <!-- <img class="logo logo2" :src="logoUrl.logo2_b" alt="logo2" /> -->
      <img class="logo logo3" :src="logoUrl.logo3" alt="logo3" />
      <img class="logo logo4 logo4_w" :src="logoUrl.logo4" alt="logo4" />
      <img class="logo logo4" :src="logoUrl.logo4_b" alt="logo4" />
      <img class="logo logo5" :src="logoUrl.logo5" alt="logo5" />
      <img class="logo logo6" :src="logoUrl.logo6" alt="logo6" />
      <img class="logo logo7" :src="logoUrl.logo7" alt="logo7" />
      <img class="logo logo8 logo8_w" :src="logoUrl.logo8" alt="logo8" />
      <img class="logo logo8" :src="logoUrl.logo8_b" alt="logo8" />
      <img class="logo logo9 logo9_w" :src="logoUrl.logo9" alt="logo9" />
      <img class="logo logo9" :src="logoUrl.logo9_b" alt="logo9" />
      <img class="logo logo10 logo10_w" :src="logoUrl.logo10" alt="logo10" />
      <!-- <img class="logo logo10" :src="logoUrl.logo10_b" alt="logo10" /> -->
    </div>
    <div
      class="set-out"
      v-if="show"
      :class="{ 'set-out-hide': leave }"
      @click="handle()"
    >
      <span class="dot"></span>
      快乐出发
    </div>
    <img
      class="station animate__fadeInUp animate__animated"
      :src="`${PUBLICIMGURL}step/step8/station.png`"
      alt="站台"
    />
    <img
      class="train"
      :class="{ 'train-leave': leave }"
      :src="`${PUBLICIMGURL}station/one/train.png`"
      alt="火车"
    />
    <img class="zw" :src="`${PUBLICIMGURL}step/step8/zw.png`" alt="植物" />

    <div v-show="show" class="touchstart" @touchstart="move()"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leave: false,
      show: false,
      logoUrl: {
        logo1: `${this.PUBLICIMGURL}step/step8/logo1.png`,
        logo2: `${this.PUBLICIMGURL}step/step8/logo2.png`,
        logo3: `${this.PUBLICIMGURL}step/step8/logo3.png`,
        logo4: `${this.PUBLICIMGURL}step/step8/logo4.png`,
        logo5: `${this.PUBLICIMGURL}step/step8/logo5.png`,
        logo6: `${this.PUBLICIMGURL}step/step8/logo6.png`,
        logo7: `${this.PUBLICIMGURL}step/step8/logo7.png`,
        logo8: `${this.PUBLICIMGURL}step/step8/logo8.png`,
        logo9: `${this.PUBLICIMGURL}step/step8/logo9.png`,
        logo10: `${this.PUBLICIMGURL}step/step8/logo10.png`,
        logo2_b: `${this.PUBLICIMGURL}step/step8/logo2_b.png`,
        logo4_b: `${this.PUBLICIMGURL}step/step8/logo4_b.png`,
        logo8_b: `${this.PUBLICIMGURL}step/step8/logo8_b.png`,
        logo9_b: `${this.PUBLICIMGURL}step/step8/logo9_b.png`,
        logo10_b: `${this.PUBLICIMGURL}step/step8/logo10_b.png`,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 7000);
  },
  created() {},
  methods: {
    handle() {
      this.leave = true;
      this.$refs.aideo.play();
      setTimeout(() => {
        this.$router.push("/two/step9");
      }, 5000);
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
</style>
