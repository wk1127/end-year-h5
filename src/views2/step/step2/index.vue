<template>
  <div
    class="fixed wh100 animate__animated animate__slow animate__fadeIn"
    :class="{ animate__fadeOut: nextPage }"
    :style="bg"
  >
    <div class="info-box">
      <p
        class="p1 animate__animated animate__slow animate__fadeInUp animate__delay-2s"
      >
        {{ staffInfo.name }}，你好！
      </p>
      <div class="content">
        <p
          class="p2 animate__animated animate__slow animate__fadeInUp delay-4s"
        >
          现诚挚邀请你踏上
        </p>
        <p
          class="p2 animate__animated animate__slow animate__fadeInUp delay-5s"
        >
          由2020开往2021方向的
        </p>
        <p
          class="p2 animate__animated animate__slow animate__fadeInUp delay-6s"
        >
          Yuzhua次列车 ！
        </p>
        <p
          class="p2 animate__animated animate__slow animate__fadeInUp delay-7s"
        >
          祝你旅途愉快！
        </p>
      </div>
    </div>
    <img
      class="train trainMove"
      :src="`${PUBLICIMGURL}step/step2/car.png`"
      alt="火车"
    />
    <img
      class="station"
      :src="`${PUBLICIMGURL}step/step2/station.png`"
      alt="站台"
    />
  </div>
</template>
<script>
export default {
  name: "Step2",
  data() {
    return {
      bg: {
        background: `url(${this.PUBLICIMGURL}step/step2/bg.png)no-repeat bottom/100%`,
      },
      nextPage: false,
    };
  },
  computed: {
    staffInfo() {
      return this.$store.getters.pageData.staffInfo;
    },
  },
  mounted() {
    let t;
    clearTimeout(t);
    t = setTimeout(() => {
      this.autoGoPage();
    }, 10000);
  },
  methods: {
    formatTime(time) {
      let date = new Date(time * 1000);
      let y = date.getFullYear();
      let m = (date.getMonth() + 1).toString().padStart(2, "0");
      let d = date.getDate().toString().padStart(2, "0");
      let h = date.getHours().toString().padStart(2, "0");
      let min = date.getMinutes().toString().padStart(2, "0");
      // let s = String(date.getSeconds()).padStart(2, "0");
      return `${y}年${m}月${d}日 ${h}:${min}`;
    },
    autoGoPage() {
      this.nextPage = true;
      setTimeout(() => {
        this.$router.push("/two/step3");
      }, 1500);
    },
  },
};
</script>
<style lang="scss" scoped>
.info-box {
  position: absolute;
  bottom: 55vh;
  left: 0;
  width: 100%;
  text-align: center;
  .p1 {
    font-size: 25px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #6d4853;
  }
  .p2 {
    font-size: 15px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #6d4853;
    line-height: 20px;
    margin-top: 5px;
  }
}
.train {
  width: 44px;
  height: 53px;
  position: absolute;
  bottom: 258px;
  left: 334xx;
}
.station {
  width: 189px;
  height: 197px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-55%, 0);
}

@keyframes trainMove {
  0% {
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    bottom: 198px;
    left: 334xx;
  }
}
.trainMove {
  animation: trainMove 3.4s ease-out 100ms;
  animation-fill-mode: both;
}
.delay-3s {
  animation-delay: 3500ms;
}
.delay-4s {
  animation-delay: 4000ms;
}
.delay-5s {
  animation-delay: 5000ms;
}
.delay-6s {
  animation-delay: 6000ms;
}
.delay-7s {
  animation-delay: 7000ms;
}
</style>