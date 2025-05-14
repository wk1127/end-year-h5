<template>
  <div
    class="fixed wh100 animate__animated animate__slow animate__fadeIn"
    :class="{ animate__fadeOut: nextPage }"
    :style="bg"
  >
    <img class="img1" :src="`${PUBLICIMGURL}step/step3/lg.png`" alt="栏杆" />
    <img
      class="img2 trainMove"
      :src="`${PUBLICIMGURL}step/step3/door-frame.png`"
      alt="背景"
    />
    <img
      class="img3 doorMove"
      :src="`${PUBLICIMGURL}step/step3/door.png`"
      alt="门"
    />
  </div>
</template>
<script>
export default {
  name: "Step3",
  data() {
    return {
      bg: {
        background: `url(${this.PUBLICIMGURL}step/step3/bg.png)no-repeat bottom/100%`,
      },
      nextPage: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.autoGoPage();
    }, 5000);
  },
  computed: {
    ticketInfo() {
      return this.$store.getters.pageData.ticketInfo;
    },
    staffInfo() {
      return this.$store.getters.pageData.staffInfo;
    },
  },
  methods: {
    autoGoPage() {
      this.nextPage = true;
      setTimeout(() => {
        this.$router.push("/two/step4");
      }, 1500);
    },
  },
};
</script>
<style lang="scss" scoped>
.img1 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 171px;
  z-index: 10;
}
.img2 {
  position: absolute;
  bottom: -120px;
  left: -550px;
  height: 548px;
  z-index: 9;
}
.img3 {
  position: absolute;
  bottom: -109px;
  left: 20px;
  height: 535px;
  z-index: 8;
}
@keyframes doorMove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(80px);
  }
}
@keyframes trainMove {
  0% {
    transform: translateX(80px);
  }
  100% {
    transform: translateX(400px);
  }
}
.doorMove {
  animation: doorMove 1s linear 1500ms, trainMove 2s ease-in 3500ms;
  animation-fill-mode: forwards;
}
.trainMove {
  animation: trainMove 2s ease-in  3500ms;
  animation-fill-mode: both;
}
</style>