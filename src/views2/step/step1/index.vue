<template>
  <div
    class="fixed wh100 animate__animated animate__slow animate__fadeIn"
    :class="{ animate__fadeOut: isTake }"
    :style="bg"
  >
    <div class="pick-ticket" @click="takeTicket">
      <div
        class="ticket-bg animate__animated animate__fadeInUp delay"
        :style="{
          background: `url(${PUBLICIMGURL}login/ticket.png) no-repeat center / 100% 100% `,
        }"
      >
        <div class="id_info">
          <span class="fl"
            >YUZHUA{{ staffInfo.number }} {{ staffInfo.name }}</span
          >
          <span class="fr"
            >{{ ticketInfo.car_number }}车{{ ticketInfo.seat_number }}座</span
          >
        </div>
        <p class="date">{{ formatTime(ticketInfo.time) }}开</p>
      </div>
      <img class="hand" :src="`${PUBLICIMGURL}login/hand.png`" alt="" />
      <p class="p mgt5 animate__animated animate__fadeIn delay">
        点击拿起火车票
      </p>
      <p class="p animate__animated animate__fadeIn delay">
        搭乘你的Yuzhua次列车
      </p>
    </div>

    <div class="photo-list" v-show="photoShow">
      <img class="img1" :src="`${PUBLICIMGURL}login/01.png`" alt="" />
      <img class="img2" :src="`${PUBLICIMGURL}login/02.png`" alt="" />
      <img class="img3" :src="`${PUBLICIMGURL}login/03.png`" alt="" />
      <img class="img4" :src="`${PUBLICIMGURL}login/04.png`" alt="" />
      <img class="img5" :src="`${PUBLICIMGURL}login/05.png`" alt="" />
      <img class="img6" :src="`${PUBLICIMGURL}login/06.png`" alt="" />
      <img class="img7" :src="`${PUBLICIMGURL}login/07.png`" alt="" />
      <img class="img8" :src="`${PUBLICIMGURL}login/08.png`" alt="" />
      <img class="img9" :src="`${PUBLICIMGURL}login/09.png`" alt="" />
      <img class="img10" :src="`${PUBLICIMGURL}login/10.png`" alt="" />
    </div>
       <div
      v-show="show1"
      style="height: 100vh"
      class="touchstart"
      @touchstart="takeTicket()"
    ></div>
  </div>
</template>
<script>
export default {
  name: "Step1",
  data() {
    return {
      photoShow: false,
       show1: false,
      bg: {
        background: `url(${this.PUBLICIMGURL}login/bg2.png)no-repeat bottom/100%`,
      },
      isTake: false,
    };
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
    takeTicket() {
      this.isTake = true;
      this.$parent.handleStep2Aideo();
      setTimeout(() => {
        this.$router.push("/two/step2");
      }, 1500);
    },
  },
  mounted() {
    // setTimeout(() => {
    //   this.photoShow = false;
    //   this.show1 = true
    // }, 32000);
  },
};
</script>
<style lang="scss" scoped>
.pick-ticket {
  position: absolute;
  width: 274px;
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%, 0);
  .ticket-bg {
    height: 202px;
    overflow: hidden;
  }
  .hand {
    margin-top: -12px;
    width: 35px;
    height: 42px;
    animation: showHander 1s ease-in-out 2s, hander 1s ease-in-out 2s infinite;
    animation-fill-mode: both;
  }

  @keyframes showHander {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes hander {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  .p {
    margin: 0;
    text-align: center;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #fffefe;
    line-height: 28px;
  }
  .mgt5 {
    margin-top: 5px;
  }
  .id_info {
    margin-top: 100px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #375863;
    overflow: hidden;
    padding: 0 33px 0 28px;
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
  }
  .date {
    margin-top: 7px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #375863;
    text-align: left;
    padding-left: 28px;
  }
}
.delay {
  animation-delay: 1s;
}
.photo-list {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  animation: opacityAnimation 2s 30s forwards;

  img {
    position: absolute;
    left: 31xx;
    bottom: -600xx;
    width: 687xx;
    height: auto;
  }
  .img1 {
    animation: img1Move 3s ease-out forwards;
  }
  .img2 {
    animation: img2Move 3s 3s ease-out forwards;
  }
  .img3 {
    animation: img3Move 3s 6s ease-out forwards;
  }
  .img4 {
    animation: img4Move 3s 9s ease-out forwards;
  }
  .img5 {
    animation: img5Move 3s 12s ease-out forwards;
  }
  .img6 {
    animation: img6Move 3s 15s ease-out forwards;
  }
  .img7 {
    animation: img7Move 3s 18s ease-out forwards;
  }
  .img8 {
    animation: img8Move 3s 21s ease-out forwards;
  }
  .img9 {
    animation: img9Move 3s 24s ease-out forwards;
  }
  .img10 {
    animation: img10Move 3s 27s ease-out forwards;
  }

  @keyframes img1Move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50vh) translateY(50%) translateY(-900xx);
    }
  }
  @keyframes img2Move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50vh) translateY(50%) translateY(-840xx);
    }
  }
  @keyframes img3Move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50vh) translateY(50%) translateY(-780xx);
    }
  }
  @keyframes img4Move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50vh) translateY(50%) translateY(-720xx);
    }
  }
  @keyframes img5Move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50vh) translateY(50%) translateY(-660xx);
    }
  }
  @keyframes img6Move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50vh) translateY(50%) translateY(-600xx);
    }
  }
  @keyframes img7Move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50vh) translateY(50%) translateY(-540xx);
    }
  }
  @keyframes img8Move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50vh) translateY(50%) translateY(-480xx);
    }
  }
  @keyframes img9Move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50vh) translateY(50%) translateY(-420xx);
    }
  }
  @keyframes img10Move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50vh) translateY(50%) translateY(-360xx);
    }
  }

  @keyframes opacityAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>