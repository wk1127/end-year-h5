<template>
  <div class="container animate__animated animate__slow animate__fadeIn"  :class="{ animate__fadeOut: isClick, 'animate__delay-1s': isClick }">
    <div
      v-if="!imgUrl"
      ref="capture"
      class="box"
      :style="{ backgroundImage: `url(${PUBLICIMGURL}data/bg.png)` }"
    >
      <img class="girl" :src="`${PUBLICIMGURL}data/girl.png`" alt="" />
      <img class="shadow" :src="`${PUBLICIMGURL}data/shadow.png`" alt="" />

      <div
        class="data-report"
        :style="{ backgroundImage: `url(${PUBLICIMGURL}data/bg1.png)` }"
      >
        <div class="report-title">2020年度数据报告</div>
        <div class="report-content">
          <p>
            HI,<span>{{ pageData.staffInfo.name }}</span> <br />
            <span>{{ pageData.staffInfo.induction_time | getFullYear }}</span
            >年<span>{{ pageData.staffInfo.induction_time | getMonth }}</span
            >月<span>{{ pageData.staffInfo.induction_time | getDate }}</span
            >日 <br />
            那是最特别的一天 <br />
            你成了鱼爪的1/<span>3000</span>
          </p>
          <p>
            2020年<br />
            您陪我一起度过了<br />
            <span>{{ pageData.workAttendanceInfo.work_day_count }}</span
            >天<br />
            <span>{{ pageData.workAttendanceInfo.work_time | filterTime }}</span
            >工时<br />
            相当于从成都徒步到<span>{{
              pageData.workAttendanceInfo.on_foot_address
            }}</span>
          </p>
          <p v-if="pageData.staffInfo.brotherLogCount > 0">
            您一共获得<span>{{
              pageData.staffInfo.brotherLogCount
            }}</span
            >次一哥<br />
            那是您努力被看到的样子
          </p>
          <p>2020你辛苦啦！</p>
        </div>
        <div class="save-tip">
          <img class="save" :src="`${PUBLICIMGURL}data/save.png`" alt="" />
          长按保存你的数据报告
        </div>
      </div>
    </div>
    <div class="bottom">
      <img class="fish" :src="`${PUBLICIMGURL}data/fish.png`" alt="" />
      <div
        @click="getTicket()"
        class="bt animate__animated"
        :class="{animate__tada: isClick}"
        :style="{ backgroundImage: `url(${PUBLICIMGURL}data/bt.png)` }"
      >
      
      </div>
    </div>
    <div v-if="imgUrl" class="box1">
      <img :src="imgUrl" alt="" />
    </div>
  </div>
</template>

<script>
// import html2canvas from "html2canvas";
import html2canvas from '../../utils/html2canvas';
export default {
  data() {
    return {
      imgUrl: "",
      isClick: false,
      PUBLICIMGURL: '/img2/'
    };
  },
  filters: {
    getFullYear(val) {
      return new Date(val * 1000).getFullYear();
    },
    getMonth(val) {
      return new Date(val * 1000).getMonth() + 1;
    },
    getDate(val) {
      return new Date(val * 1000).getDate();
    },
    filterTime(val) {
      return Math.ceil(val/3600)
    }
  },
  computed: {
    pageData() {
      return this.$store.getters.pageData;
    },
  },
  created() {
    console.log(this.pageData);
  },
  mounted() {
    this.toImage();
  },
  methods: {
    toImage() {
      (window.html2canvas || html2canvas)(this.$refs.capture, {
        scrollY: 0, // 一定要配置这个参数，否则会导致截图不全
      }).then((canvas) => {
        let dataURL = canvas.toDataURL("image/png");
        console.log(dataURL)
        this.imgUrl = dataURL;
      });
    },
    getTicket() {
      this.isClick = true
       setTimeout(() => {
        this.$router.push("/two/step1");
      }, 2500);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
