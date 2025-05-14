<template>
  <!-- <div
    class="container animate__animated"
    :class="{ animate__fadeOut: leave, animateScale: !leave }"
    :style="{
      background: show ? bg2 : bg1,
    }"
  >
 
    <div calss="cj1" v-if="!show">
      <p class="p1">前方到站是本次列车的</p>
      <p class="p2">2021站</p>
      <p class="p3">请您带好</p>
      <div class="date">2020还未开启的彩蛋</div>
      <p class="p4">做好继续前行的准备</p>

      <img
        class="station animate__fadeInUp animate__animated"
        :src="`${PUBLICIMGURL}step/step10/station.png`"
        alt="站台"
      />
      <img class="train" :src="`${PUBLICIMGURL}station/one/train.png`" alt="" />
      <img
        class="train train_ty"
        :src="`${PUBLICIMGURL}step/step10/train_ty.png`"
        alt=""
      />
    </div>
    <div v-if="show">
      <img class="gift" :src="`${PUBLICIMGURL}step/step10/gift.png`" alt="" />
      <div
        class="set-out"
        v-if="show"
        :class="{ 'set-out-hide': leave }"
        @click="handle()"
      >
        <span class="dot"></span>
        <div class="dk">打开彩蛋</div>
      </div>
    </div>

    <div v-show="show1" style="height: 100vh" class="touchstart" @touchstart="move()"></div>
  </div> -->
  <div
    class="container animate__animated animate__slow animate__fadeIn"
    :class="{ animate__fadeOut: leave }"
    :style="{
      background: bg1,
    }"
  >
    <div calss="cj1">
      <p class="p1">前方到站是本次列车的</p>
      <p class="p2">2021站</p>
      <p class="p3">请您带好</p>
      <div class="date">2020还未开启的彩蛋</div>
      <p class="p4">做好继续前行的准备</p>

      <img
        class="station animate__fadeInUp animate__animated"
        :src="`${PUBLICIMGURL}step/step10/station.png`"
        alt="站台"
      />
      <img class="train" :src="`${PUBLICIMGURL}station/one/train.png`" alt="" />
      <img
        class="train train_ty"
        :src="`${PUBLICIMGURL}step/step10/train_ty.png`"
        alt=""
      />
      <img class="animate__animated gift" :src="`${PUBLICIMGURL}step/step10/gift.png`" alt="" />
      <div
        class="set-out"
        @click="handle()"
      >
        <span class="dot"></span>
        <div class="dk">打开彩蛋</div>
      </div>
    </div>
    <div
      v-show="show1"
      style="height: 100vh"
      class="touchstart"
      @touchstart="move()"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leave: false,
      show: false,
      show1: false,
      bg1: `url(${this.PUBLICIMGURL}step/step10/bg1.png)no-repeat bottom/100%`,
      bg2: `url(${this.PUBLICIMGURL}step/step10/bg2.png)no-repeat bottom/100%`,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 6000);
    setTimeout(() => {
      this.show1 = true;
    }, 6000);
  },
  created() {},
  methods: {
    handle() {
      this.leave = true;
      setTimeout(() => {
        this.$router.push("/two/step11");
      }, 1500);
    },
    move() {
      if (this.leave) {
        return;
      }
      this.handle();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
