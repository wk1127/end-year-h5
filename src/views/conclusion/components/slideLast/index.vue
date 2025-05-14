<template>
  <div class="page swiper-inner">
    <section class="section-img">
      <img
        :style="
          'transform: translate3d(' +
          x * clock1Speed +
          'px,' +
          y * clock1Speed +
          'px,' +
          z * clock1Speed +
          'px)'
        "
        class="clock1"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/clock1.png"
        alt=""
      />
      <img
        :style="
          'transform: translate3d(' +
          x * clock2Speed +
          'px,' +
          y * clock2Speed +
          'px,' +
          z * clock2Speed +
          'px)'
        "
        class="clock2"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/clock2.png"
        alt=""
      />
      <img
        :style="
          'transform: translate3d(' +
          x * cloud1Speed +
          'px,' +
          y * cloud1Speed +
          'px,' +
          z * cloud1Speed +
          'px)'
        "
        class="cloud1"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/cloud1.png"
        alt=""
      />
      <img
        :style="
          'transform: translate3d(' +
          x * cloud2Speed +
          'px,' +
          y * cloud2Speed +
          'px,' +
          z * cloud2Speed +
          'px)'
        "
        class="cloud2"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/cloud2.png"
        alt=""
      />
      <img
        :style="
          'transform: translate3d(' +
          x * fishSpeed +
          'px,' +
          y * fishSpeed +
          'px,' +
          z * fishSpeed +
          'px)'
        "
        class="fish"
        src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/slideLast/fish.png"
        alt=""
      />
    </section>
    <section
      class="section-text ani ani-delay"
      swiper-animate-effect="my_animate__zoomIn"
      swiper-animate-duration="1s"
      swiper-animate-delay="1s"
    >
      <div class="text">
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="1.5s"
        >公历2021将至<br>农历2021还会远吗？
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="1.5s"
        >
          除了15天春节长假<br>你的上司还为你写下了<br>年终寄语以及2021展望
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2s"
        >
          <span class="color-default">{{ countDay }}<span class="fontsize-default">天</span></span>
          <span class="color-default fontsize-default">
          <br>{{ countH }}时 {{ countH }}分 {{ countS }}秒
          </span>
        </p>
        <p
          class="ani ani-delay"
          swiper-animate-effect="animate__fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="2.5s"
        >
          敬请期待哦~
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SHAKE_THRESHOLD: 2000,
      last_update: 0,
      x: 0,
      y: 0,
      z: 0,
      last_x: 0,
      last_y: 0,
      last_z: 0,
      clock1Speed: 20,
      clock2Speed: 60,
      cloud1Speed: 40,
      cloud2Speed: 80,
      fishSpeed: 30,
      countText: '',
      countDay: '',
      countH: '',
      countM: '',
      countS: '',
      lefttime: ''
    };
  },
  props: ["slidePublicData"],
  components: {},
  created() {
    this.init();
  },
  mounted() {
    let _this = this
    let timer = setInterval(() => {
      _this.countDown()
    }, 1000)
    this.$once('hook:beforeDestroy', () => {
      clearInterval(timer)
    })
  },
  
  methods: {
    countDown() {
        let nowtime = new Date(),  //获取当前时间
        endtime = new Date("2021/2/11 00:00:00");  //定义结束时间
        this.lefttime = endtime.getTime() - nowtime.getTime()  //距离结束时间的毫秒数
        if(this.lefttime > 0) {
          this.countDay = Math.floor(this.lefttime/(1000*60*60*24))  //计算天数
          this.countH = Math.floor(this.lefttime/(1000*60*60)%24)  //计算小时数
          this.countM = Math.floor(this.lefttime/(1000*60)%60) //计算分钟数
          this.countS = Math.floor(this.lefttime/1000%60);  //计算秒数
        }
        else {
          console.log('欢迎来到2021')
        }
        
    },
    deviceMotionHandler(eventData) {
      // console.log('deviceMotionHandler')
      // console.log(eventData)
      // console.log(event)
      var acceleration = eventData.accelerationIncludingGravity;
      this.acceleration = acceleration;
      var curTime = new Date().getTime();
      // console.log("摇动了：x"+acceleration.x+"-y:"+acceleration.y+"-z:"+acceleration.z);
      if (curTime - this.last_update > 100) {
        var diffTime = curTime - this.last_update;
        this.last_update = curTime;
        this.x = acceleration.x;
        this.y = acceleration.y;
        this.z = acceleration.z;
        // this.iceMove(this.x, this.y, this.z); // 移动冰块
        var speed =
          (Math.abs(
            this.x + this.y + this.z - this.last_x - this.last_y - this.last_z
          ) /
            diffTime) *
          10000;
        if (speed > this.SHAKE_THRESHOLD) {
          // draw();
        }
        this.last_x = this.x;
        this.last_y = this.y;
        this.last_z = this.z;
      }
    },
    init() {
      if (window.DeviceMotionEvent) {
        window.addEventListener(
          "devicemotion",
          this.deviceMotionHandler,
          false
        );
      } else {
        // alert("not support mobile event");
      }
    },
    // iceMove(x, y, z) {
    //   // 冰块抖动
    //   // ice1.css({
    //   //   transform:
    //   //     "translate3d(" +
    //   //     x * ice1Speed +
    //   //     "px," +
    //   //     y * ice1Speed +
    //   //     "px," +
    //   //     z * ice1Speed +
    //   //     "px)",
    //   // });
    //   // ice2.css({
    //   //   transform:
    //   //     "translate3d(" +
    //   //     x * ice2Speed +
    //   //     "px," +
    //   //     y * ice2Speed +
    //   //     "px," +
    //   //     z * ice2Speed +
    //   //     "px)",
    //   // });
    //   // ice3.css({
    //   //   transform:
    //   //     "translate3d(" +
    //   //     x * ice3Speed +
    //   //     "px," +
    //   //     y * ice3Speed +
    //   //     "px," +
    //   //     z * ice3Speed +
    //   //     "px)",
    //   // });
    //   // ice4.css({
    //   //   transform:
    //   //     "translate3d(" +
    //   //     x * ice4Speed +
    //   //     "px," +
    //   //     y * ice4Speed +
    //   //     "px," +
    //   //     z * ice4Speed +
    //   //     "px)",
    //   // });

    //   // 限制标题抖动幅度
    //   // var textArr = [x, y, z];
    //   // $.each(textArr, function (index, value) {
    //   //   if (value > 2) {
    //   //     textArr[index] = 2;
    //   //   }
    //   // });
    // },
  },
};
</script>


<style lang="scss" scoped>
@import "@/../public/css/myAnimate.scss";
@import "../common.scss";
@import "./index.scss";
</style>
