<template>
  <div
    class="container animate__animated animate__slow animate__fadeIn"
    :class="{ animate__fadeOut: leave, 'animate__delay-4s': leave }"
    :style="{
      background: `url(${PUBLICIMGURL}station/one/bg.png) no-repeat bottom/100%`,
    }"
  >
    <audio
      ref="aideo"
      :src="`${PUBLICIMGURL}two/step5.mp3`"
      controls="controls"
      hidden="hidden"
    ></audio>
    <p class="p1">候鸟南飞</p>
    <p class="p2">万河归海</p>
    <div class="date">{{first_work_date}}</div>
    <p class="p3">我终于等到你</p>
    <p class="p4">由此，我们2020的故事开始了……</p>

    <div
      class="set-out"
      v-if="show"
      :class="{ 'set-out-hide': leave }"
      @click="handle()"
    >
      <span class="dot"></span>
      快乐出发
    </div>

    <img class="bird1" :src="`${PUBLICIMGURL}station/one/bird1.png`" alt="" />
    <img class="bird2" :src="`${PUBLICIMGURL}station/one/bird2.png`" alt="" />
    <img class="bird3" :src="`${PUBLICIMGURL}station/one/bird3.png`" alt="" />
    <img
      class="train"
      :class="{ 'train-leave': leave }"
      :src="`${PUBLICIMGURL}station/one/train.png`"
      alt=""
    />
    <img class="card" :src="`${PUBLICIMGURL}station/one/card.png`" alt="" />
    <img class="plant" :src="`${PUBLICIMGURL}station/one/plant.png`" alt="" />

    <div v-show="show" class="touchstart" @touchstart="move()"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leave: false,
      show: false,
    };
  },
  computed: {
    first_work_date() {
      if (this.$store.state.pageData.teamInfo.first_work_date) {
        let date = new Date(this.$store.state.pageData.teamInfo.first_work_date * 1000)
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
      } else if(this.$store.state.pageData.staffInfo.induction_time) {
        let date = new Date(this.$store.state.pageData.staffInfo.induction_time * 1000)
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
      } else{
        return `2020年02月03日`
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 2000);
  },
  created() {},
  methods: {
    handle() {
      this.leave = true;
      this.$refs.aideo.play();
      setTimeout(() => {
        this.$router.push("/two/step5");
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
