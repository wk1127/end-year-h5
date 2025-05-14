<template>
  <div
    class="container animate__animated animate__slow animate__fadeIn"
    :class="{ animate__fadeOut: leave, 'animate__delay-4s':leave }"
    :style="{background: `url(${this.PUBLICIMGURL}step/step9/bg.png) no-repeat bottom / 100%`,}"
  >

    <div class="set-out" :class="{'set-out-hide': leave}" @click="handle()">
      <span class="dot"></span>
      快乐出发
    </div>

    <div class="img-list" v-show="imgIndex == 0">
      <img class="img1" :src="`${PUBLICIMGURL}step/step9/img1.png`" alt="">
      <img class="img2" :src="`${PUBLICIMGURL}step/step9/img2.png`" alt="">
      <img class="img3" :src="`${PUBLICIMGURL}step/step9/img3.png`" alt="">
      <img class="img4" :src="`${PUBLICIMGURL}step/step9/img4.png`" alt="">
      <img class="img5" :src="`${PUBLICIMGURL}step/step9/img5.png`" alt="">
      <img class="img6" :src="`${PUBLICIMGURL}step/step9/img6.png`" alt="">
      <img class="img7" :src="`${PUBLICIMGURL}step/step9/img7.png`" alt="">
      <img class="img8" :src="`${PUBLICIMGURL}step/step9/img8.png`" alt="">
      <img class="img9" :src="`${PUBLICIMGURL}step/step9/img9.png`" alt="">
      <img class="img10" :src="`${PUBLICIMGURL}step/step9/img10.png`" alt="">
      <img class="img11" :src="`${PUBLICIMGURL}step/step9/img11.png`" alt="">
      <img class="img12" :src="`${PUBLICIMGURL}step/step9/img12.png`" alt="">
    </div>

    <div class="img-list" v-show="imgIndex == 1">
      <img class="img1" :src="`${PUBLICIMGURL}step/step9/img5.png`" alt="">
      <img class="img2" :src="`${PUBLICIMGURL}step/step9/img6.png`" alt="">
      <img class="img3" :src="`${PUBLICIMGURL}step/step9/img7.png`" alt="">
      <img class="img4" :src="`${PUBLICIMGURL}step/step9/img8.png`" alt="">
    </div>

    <div class="img-list" v-show="imgIndex == 2">
      <img class="img1" :src="`${PUBLICIMGURL}step/step9/img9.png`" alt="">
      <img class="img2" :src="`${PUBLICIMGURL}step/step9/img10.png`" alt="">
      <img class="img11" :src="`${PUBLICIMGURL}step/step9/img11.png`" alt="">
      <img class="img12" :src="`${PUBLICIMGURL}step/step9/img12.png`" alt="">
    </div>

    <img class="train" :class="{'train-leave': leave}" :src="`${PUBLICIMGURL}station/one/train.png`" alt="" />
    <img class="card" :src="`${PUBLICIMGURL}step/step9/card.png`" alt="" />
    <img class="plant" :src="`${PUBLICIMGURL}step/step9/leaf.png`" alt="" />

    <div v-show="show" class="touchstart" @touchstart="move()"></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      leave: false,
      imgIndex: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 4000)
    // setInterval(() => {
    //   if (this.imgIndex < 2) {
    //     this.imgIndex++
    //   } else {
    //     this.imgIndex = 0
    //   }
    // }, 5000)
  },
  created() {},
  methods: {
    handle() {
      this.leave = true
      this.$parent.handleStepAideo()
      setTimeout(() => {
        this.$router.push("/two/step10");
      }, 4500)
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
