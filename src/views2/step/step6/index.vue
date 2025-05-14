<template>
  <div
    class="container animate__animated animate__slow animate__fadeIn"
    :class="{ animate__fadeOut: leave,'animate__delay-4s':leave }"
    :style="{ background: `url(${PUBLICIMGURL}step/step6/bg.png)no-repeat bottom/100%` }"
  >
    <audio
      ref="aideo"
      :src="`${PUBLICIMGURL}two/step7.mp3`"
      controls="controls"
      hidden="hidden"
    ></audio>
    <p class="p1">你，总是</p>
    <div class="date">知难而不惧难 </div>
    <p class="p2">直面挑战</p>
    <p class="p3">躬身入局</p>
    <p class="p4">虽道路荆棘</p>
    <p class="p5">但有我为伴</p>


    <div class="set-out" v-if="show" :class="{'set-out-hide': leave}" @click="handle()">
      <span class="dot"></span>
      快乐出发
    </div>
    <img class="cloud" :src="`${PUBLICIMGURL}step/step6/cloud.png`" alt="云">
    <img class="bg2" :src="`${PUBLICIMGURL}step/step6/bg1.png`" alt="背景山">
    <img class="zw" :src="`${PUBLICIMGURL}step/step6/zw.png`" alt="植物">
    <img class="pp" :src="`${PUBLICIMGURL}step/step6/people.png`" alt="任务">
    <img class="station animate__fadeInUp animate__animated" :src="`${PUBLICIMGURL}step/step6/station.png`" alt="站台">
    <img class="train" :class="{'train-leave': leave}" :src="`${PUBLICIMGURL}station/one/train.png`" alt="" />
    <img class="qp qp1" :src="`${PUBLICIMGURL}step/step6/pp1.png`" alt="气泡">
    <img class="qp qp2" :src="`${PUBLICIMGURL}step/step6/pp2.png`" alt="气泡">
    <img class="qp qp3" :src="`${PUBLICIMGURL}step/step6/pp3.png`" alt="气泡">
    <img class="qp qp4" :src="`${PUBLICIMGURL}step/step6/pp4.png`" alt="气泡">
    <img class="qp qp5" :src="`${PUBLICIMGURL}step/step6/pp5.png`" alt="气泡">
    <img class="qp qp6" :src="`${PUBLICIMGURL}step/step6/pp6.png`" alt="气泡">
    <img class="qp qp7" :src="`${PUBLICIMGURL}step/step6/pp7.png`" alt="气泡">
    <img class="qp qp8" :src="`${PUBLICIMGURL}step/step6/pp8.png`" alt="气泡">
    <img class="qp qp9" :src="`${PUBLICIMGURL}step/step6/pp9.png`" alt="气泡">
    <img class="qp qp10" :src="`${PUBLICIMGURL}step/step6/pp10.png`" alt="气泡">

    <div v-show="show" class="touchstart" @touchstart="move()"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leave: false,
      show: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 10000)
  },
  created() {},
  methods: {
    handle() {
      this.leave = true
      this.$refs.aideo.play();
      setTimeout(() => {
        this.$router.push("/two/step7");
      }, 5000)
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
