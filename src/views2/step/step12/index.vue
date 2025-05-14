<template>
  <div
    class="container animate__animated animate__slow animate__fadeIn"
    :style="{
      background: `url(${PUBLICIMGURL}step/step12/bg.png) no-repeat bottom / 100%`,
    }"
  >
    <img class="fire" :src="`${PUBLICIMGURL}step/step12/fire.gif`" alt="烟花" />
    <img
      class="fire2"
      :src="`${PUBLICIMGURL}step/step12/fire.gif`"
      alt="烟花"
    />

    <div
      class="self-lantern"
      v-for="(item, index) in selfList"
      :key="item"
      @click="openSelfBless(index)"
      :style="{
        backgroundImage: `url(${PUBLICIMGURL}step/step12/lantern.png)`,
      }"
    >
      <div class="name">{{ pageData.staffInfo.name }}</div>
      <div class="number">NO.{{ pageData.staffInfo.number }}</div>
    </div>
    <div
      :class="`lantern${(index % 6) + 1}`"
      class="lantern"
      ref="lantern"
      @click="openBless(item)"
      :style="{
        backgroundImage: `url(${PUBLICIMGURL}step/step12/lantern.png)`,
      }"
      v-for="(item, index) of blessList2"
      :key="index"
    >
      <div class="name">{{ item.name }}</div>
      <div class="number">NO.{{ item.number }}</div>
    </div>
    <img class="meteor" :src="`${PUBLICIMGURL}step/step12/meteor.png`" alt="" />
    <div
      class="bottom-box"
      :style="{
        background: `url(${PUBLICIMGURL}step/step12/bg2.png) no-repeat top / 100%`,
      }"
    >
      <textarea
        ref="inputBox"
        class="input-box"
        v-model.trim="blessContent"
        maxlength="30"
        placeholder="请输入你的祝福语"
        :style="{
          backgroundImage: `url(${PUBLICIMGURL}step/step12/bg3.png)`,
        }"
      ></textarea>
      <img
        class="send"
        @click="send()"
        :src="`${PUBLICIMGURL}step/step12/bt.png`"
        alt=""
      />
      <div class="tip">{{ contentLength }}/30</div>
    </div>

    <div class="mask" v-if="blessShow" @click="blessShow = false">
      <div
        class="bless-box"
        :style="{ backgroundImage: `url(${PUBLICIMGURL}step/step12/bg1.png)` }"
        @click.stop="() => {}"
      >
        <div class="content">
          {{ blessInfo.content }}
        </div>
        <div class="name">{{ blessInfo.name }}</div>
        <div class="footer">
          {{ blessInfo.department }}
        </div>
      </div>
      <img
        class="bt"
        @click="blessShow = false"
        :src="`${PUBLICIMGURL}step/step12/close.png`"
        alt=""
      />
    </div>
    <!-- <div class="ytbtn" @click="openDialog">
      <img class="img" :src="`/img2/step/step12/new_btn.png`" alt="按钮视频" />
    </div> -->
    <van-dialog
      v-model="vedioShow"
      :show-cancel-button="false"
      :showConfirmButton="false"
      closeOnClickOverlay
      @close="closeDialog"
    >
      <video
        v-show="vedioShow"
        ref="vedio"
        class="vedio"
        :src="`${PUBLICIMGURL}two/yz.mp4`"
        controls=""
        x5-playsinline=""
        playsinline=""
        webkit-playsinline=""
        poster=""
        preload="auto"
      ></video>
    </van-dialog>
  </div>
</template>

<script>
import { blessCreate } from "@/api/demo.js";
// import { blessList, blessCreate } from "@/api/demo.js";
// import { getToken } from "@/utils/auth";
import { Notify } from "vant";
export default {
  data() {
    return {
      blessShow: false,
      blessContent: "",
      selfLantern: false, // 灯笼显隐
      blessInfo: {
        content: "",
        name: "",
        department: "",
      },
      blessIndex: 6,
      selfList: [], // 自己发送的祝福列表
      isend: true,
      randomList: [],
      blessList: [],
      lantern1: "",
      lantern2: "",
      lantern3: "",
      lantern4: "",
      lantern5: "",
      lantern6: "",
      blessList2: [],
      interval: null,
      vedioShow:false,
      res:{
    "code":"000000",
    "message":"Successful",
    "data":{
        "blessing":[
            {
                "id":"939",
                "number":"18581",
                "name":"刘茜",
                "content":"新的一年万事顺意，加油????",
                "department":"鱼爪网-知识产权事业群-商标",
                "created_at":1614686131,
                "updated_at":1614686131
            },
            {
                "id":"938",
                "number":"16532",
                "name":"张柯",
                "content":"2021加油????",
                "department":"营销中心-视觉体系-视频组",
                "created_at":1614387560,
                "updated_at":1614387560
            },
            {
                "id":"937",
                "number":"25433",
                "name":"蒋鹏裕",
                "content":"来晚的祝福",
                "department":"鱼爪网-智企事业群-企业转让",
                "created_at":1614079885,
                "updated_at":1614079885
            },
            {
                "id":"936",
                "number":"21051",
                "name":"何下雨",
                "content":"公司是我家，让我们一起打造我们更美好的家。",
                "department":"麦汇网-商标-商标注册一部",
                "created_at":1613983987,
                "updated_at":1613983987
            },
            {
                "id":"935",
                "number":"24091",
                "name":"付元琳",
                "content":"很感谢可以与鱼爪相遇  也很感谢与你们相遇",
                "department":"鱼爪网-知识产权事业群-商标",
                "created_at":1613903375,
                "updated_at":1613903375
            },
            {
                "id":"934",
                "number":"19724",
                "name":"罗宁霞",
                "content":"谢谢主管的鼓励，谢谢主管的帮助，很感动",
                "department":"鱼爪网-知识产权事业群-商标",
                "created_at":1613903015,
                "updated_at":1613903015
            },
            {
                "id":"933",
                "number":"16114",
                "name":"张涛",
                "content":"祝大家新年快乐",
                "department":"鱼爪网-知识产权事业群-商标",
                "created_at":1613902839,
                "updated_at":1613902839
            },
            {
                "id":"932",
                "number":"20335",
                "name":"王朝坤",
                "content":"恭祝鱼爪集团，越走越远，做大做强，牛年大吉，牛气冲天",
                "department":"江雀-天猫入驻-天猫入驻二部",
                "created_at":1613893857,
                "updated_at":1613893857
            },
            {
                "id":"931",
                "number":"20061",
                "name":"谯杰生",
                "content":"越来越强大",
                "department":"江雀-天猫入驻-天猫入驻二部",
                "created_at":1613893523,
                "updated_at":1613893523
            },
            {
                "id":"930",
                "number":"20202",
                "name":"周然",
                "content":"加油",
                "department":"鱼爪网-智企事业群-资质证书",
                "created_at":1613887801,
                "updated_at":1613887801
            },
            {
                "id":"929",
                "number":"26795",
                "name":"杜容",
                "content":"希望之后越来越好",
                "department":"鱼爪网-电商部-电商二部",
                "created_at":1613813217,
                "updated_at":1613813217
            },
            {
                "id":"928",
                "number":"26519",
                "name":"卢富强",
                "content":"希望公司越来越好，2021我们一起成长",
                "department":"鱼爪网-知识产权事业群-商标",
                "created_at":1613810851,
                "updated_at":1613810851
            },
            {
                "id":"927",
                "number":"18251",
                "name":"李嘉慧",
                "content":"希望大家越来越好 公司也越来越好",
                "department":"麦汇网-商标-商标入驻部",
                "created_at":1613807667,
                "updated_at":1613807667
            },
            {
                "id":"926",
                "number":"24943",
                "name":"李栋梁",
                "content":"加油",
                "department":"麦汇网-商标-商标入驻部",
                "created_at":1613807554,
                "updated_at":1613807554
            },
            {
                "id":"925",
                "number":"23969",
                "name":"帅成",
                "content":"牛气冲天，大吉大利，未来可期",
                "department":"麦汇网-专利-专利转让部",
                "created_at":1613805534,
                "updated_at":1613805534
            },
            {
                "id":"924",
                "number":"25012",
                "name":"郑龙丰",
                "content":"牛牛牛牛牛牛牛",
                "department":"分公司-二战区-北京分部",
                "created_at":1613805371,
                "updated_at":1613805371
            },
            {
                "id":"923",
                "number":"23902",
                "name":"向陈丹",
                "content":"2021你我皆黑马，不忘初心，愿公司越来越好，未来越来越好",
                "department":"鱼爪网-智企事业群-资质证书",
                "created_at":1613805273,
                "updated_at":1613805273
            },
            {
                "id":"922",
                "number":"24015",
                "name":"陈吉柯",
                "content":"2020很辛运加入到大家庭，2021大家一起加油我们会更好",
                "department":"麦汇网-专利-专利转让部",
                "created_at":1613805264,
                "updated_at":1613805264
            },
            {
                "id":"921",
                "number":"22189",
                "name":"何丽鑫",
                "content":"2021，和大家一起风雨同舟，加油!",
                "department":"麦汇网-专利-专利转让部",
                "created_at":1613805181,
                "updated_at":1613805181
            },
            {
                "id":"920",
                "number":"24437",
                "name":"文乙先",
                "content":"好家伙！奥利给！",
                "department":"麦汇网-专利-专利转让部",
                "created_at":1613805142,
                "updated_at":1613805142
            },
            {
                "id":"919",
                "number":"22954",
                "name":"青鑫",
                "content":"加油！2021一定会更好！",
                "department":"麦汇网-商标-商标转让二部",
                "created_at":1613804769,
                "updated_at":1613804769
            },
            {
                "id":"918",
                "number":"23745",
                "name":"孙宏运",
                "content":"希望今年牛气冲天，家人身体健康。鱼爪集团越做越大，",
                "department":"鱼爪网-智企事业群-资质证书",
                "created_at":1613804548,
                "updated_at":1613804548
            },
            {
                "id":"917",
                "number":"26787",
                "name":"陈银涛",
                "content":"干就完了 奥利给 加油",
                "department":"权盾-专利-专利申请二部",
                "created_at":1613804511,
                "updated_at":1613804511
            },
            {
                "id":"916",
                "number":"25635",
                "name":"汪权辉",
                "content":"不懂什么是年少轻狂只晓得有个东西叫胜者为王",
                "department":"鱼爪网-智企事业群-资质证书",
                "created_at":1613804479,
                "updated_at":1613804479
            },
            {
                "id":"915",
                "number":"15003",
                "name":"罗阳",
                "content":"恭祝鱼爪集团越来越好，越来越强",
                "department":"鱼爪网-智企事业群-资质证书",
                "created_at":1613804465,
                "updated_at":1613804465
            },
            {
                "id":"914",
                "number":"20733",
                "name":"韩东林",
                "content":"2021你我皆黑马，不忘初心，方得始终！鱼爪牛逼，麦汇牛逼，",
                "department":"麦汇网-商标-商标转让二部",
                "created_at":1613804444,
                "updated_at":1613804444
            },
            {
                "id":"913",
                "number":"22633",
                "name":"朱杰",
                "content":"2021我们一起为鱼爪而战！加油",
                "department":"麦汇网-商标-商标转让二部",
                "created_at":1613804424,
                "updated_at":1613804424
            },
            {
                "id":"912",
                "number":"15069",
                "name":"张继巍",
                "content":"新的一年一起乘风破浪，一起驶向远方！",
                "department":"权盾-专利-专利申请二部",
                "created_at":1613804393,
                "updated_at":1613804393
            },
            {
                "id":"911",
                "number":"25259",
                "name":"邓肖雪",
                "content":"路上见识世界，途中认清自己愿你的生活常温暖",
                "department":"鱼爪网-智企事业群-资质证书",
                "created_at":1613804301,
                "updated_at":1613804301
            },
            {
                "id":"910",
                "number":"24121",
                "name":"艾雪玲",
                "content":"祝公司越来越好",
                "department":"麦汇网-商标-商标转让一部",
                "created_at":1613804105,
                "updated_at":1613804105
            },
            {
                "id":"241",
                "number":"23236",
                "name":"秦双",
                "content":"希望大家都努力的成为自己想成为的人",
                "department":"麦汇网-专利-专利申请一部",
                "created_at":1613017576,
                "updated_at":1613804063
            },
            {
                "id":"834",
                "number":"20008",
                "name":"陈银",
                "content":"2021一起加油。乘风破浪。不负自己。",
                "department":"鱼爪网-智企事业群-资质证书",
                "created_at":1613061720,
                "updated_at":1613804019
            },
            {
                "id":"18",
                "number":"20694",
                "name":"彭苏进",
                "content":"一路前行",
                "department":"麦汇网-品牌-品牌部",
                "created_at":1612166535,
                "updated_at":1613803992
            },
            {
                "id":"909",
                "number":"22334",
                "name":"唐靖",
                "content":"希望自己在这新的一年里，实现自己的目标",
                "department":"鱼爪网-智企事业群-资质证书",
                "created_at":1613803990,
                "updated_at":1613803990
            },
            {
                "id":"908",
                "number":"14174",
                "name":"余良",
                "content":"感谢公司给予我现在的一切，我必将努力证明自己，推动公司发展",
                "department":"汉聪电商-客服基地-金堂客服部",
                "created_at":1613803960,
                "updated_at":1613803960
            },
            {
                "id":"907",
                "number":"16482",
                "name":"周俞伶",
                "content":"2021暴富",
                "department":"易店无忧服务序列-4楼行政部-行政",
                "created_at":1613803914,
                "updated_at":1613803914
            },
            {
                "id":"906",
                "number":"20691",
                "name":"付雄",
                "content":"砥砺前行，不忘初心，方得始终。2021让自己更精彩。",
                "department":"麦汇网-商标-商标转让二部",
                "created_at":1613803852,
                "updated_at":1613803852
            },
            {
                "id":"905",
                "number":"20637",
                "name":"白志伟",
                "content":"扭转乾坤",
                "department":"鱼爪网-智企事业群-资质证书",
                "created_at":1613803686,
                "updated_at":1613803686
            },
            {
                "id":"904",
                "number":"23284",
                "name":"唐川",
                "content":"2021我们来了",
                "department":"鱼爪网-智企事业群-资质证书",
                "created_at":1613803662,
                "updated_at":1613803662
            },
            {
                "id":"17",
                "number":"14025",
                "name":"黄代新",
                "content":"祝自己新的一年里越来越厉害  实现自己人生理想",
                "department":"麦汇网-品牌-品牌部",
                "created_at":1612166535,
                "updated_at":1613803600
            },
            {
                "id":"903",
                "number":"23990",
                "name":"邵岚岚",
                "content":"祝大家都能在鱼爪实现自己的梦想，和鱼爪一起奔赴星辰大海",
                "department":"营销中心-视觉体系-策划组",
                "created_at":1613803493,
                "updated_at":1613803493
            },
            {
                "id":"902",
                "number":"14331",
                "name":"王丽媛",
                "content":"我们的传奇，我们自己书写",
                "department":"麦汇网-品牌-品牌部",
                "created_at":1613803452,
                "updated_at":1613803452
            },
            {
                "id":"901",
                "number":"20012",
                "name":"黄代强",
                "content":"遇见鱼爪，预见未来。新的一年，全新出发，遇见更多美好（￢㉨￢",
                "department":"营销中心-视觉体系-策划组",
                "created_at":1613802950,
                "updated_at":1613802950
            },
            {
                "id":"900",
                "number":"10371",
                "name":"吴浩",
                "content":"新年快乐",
                "department":"汉聪电商-销售部-代运营销售一部",
                "created_at":1613750999,
                "updated_at":1613750999
            },
            {
                "id":"899",
                "number":"24706",
                "name":"杨超芳",
                "content":"感谢遇见公司，遇见一群志同道合的兄弟，2021继续相伴同行。",
                "department":"鱼爪网-传媒营销部-B站",
                "created_at":1613746498,
                "updated_at":1613746498
            },
            {
                "id":"898",
                "number":"24651",
                "name":"何伯箫",
                "content":"在这里我感受到了很多的温暖，欢声笑语里满满的都是开心",
                "department":"鱼爪网-传媒营销部-B站",
                "created_at":1613745125,
                "updated_at":1613745125
            },
            {
                "id":"897",
                "number":"21220",
                "name":"周影",
                "content":"一切都是最好的安排",
                "department":"易店无忧-淘宝-淘宝二部",
                "created_at":1613741325,
                "updated_at":1613741325
            },
            {
                "id":"896",
                "number":"23290",
                "name":"李知航",
                "content":"不说多的，鱼爪人牛逼",
                "department":"鱼爪网-传媒营销部-B站",
                "created_at":1613732590,
                "updated_at":1613732590
            },
            {
                "id":"895",
                "number":"17625",
                "name":"曹桂瑜",
                "content":"新年快乐，新的一年一起加油，为我们的鱼爪梦助力！",
                "department":"易店无忧-淘宝-淘宝二部",
                "created_at":1613725613,
                "updated_at":1613725613
            },
            {
                "id":"894",
                "number":"19691",
                "name":"苟元君",
                "content":"祝你早日脱单",
                "department":"江雀-天猫入驻-天猫入驻一部",
                "created_at":1613715932,
                "updated_at":1613715932
            }
        ]
    }
}
    };
  },
  computed: {
    pageData() {
      return this.$store.state.pageData;
    },
    contentLength() {
      return this.blessContent.length;
    },
  },
  mounted() {
    this.makeExpandingArea(this.$refs.inputBox);
    // this.autoPlay()
  },
  created() {
    this.getblessList();
  },
  methods: {
    openDialog(){
      this.vedioShow = true
      this.$nextTick(()=>{
        this.$refs.vedio.play()
      })
    },
    closeDialog(){
      const vedio = this.$refs.vedio
      vedio.pause()
    },
    autoPlay() {
      var vedioEle = this.$refs.vedio;
      // 播放开始，可能会显示loading
      var playPromise = vedioEle.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {}).catch(() => {});
      }
      document.addEventListener("touchstart", this.autoPlay);
    },
    send() {
      if (!this.blessContent) {
        return Notify({ type: "warning", message: "请输入你的祝福语" });
      }
      this.blessCreate();
    },
    // 绑定信息
    bindInfo() {
      this.interval = setInterval(() => {
        if (this.blessIndex < this.blessList.length - 1) {
          this.blessIndex++;
        } else {
          this.blessIndex = 0;
        }
        let time = Math.random() * 1000;
        setTimeout(() => {
          this.blessList2.push(this.blessList[this.blessIndex]);
        }, time);
      }, 1500);
    },
    openBless(blessInfo) {
      this.blessInfo = blessInfo;
      this.blessShow = true;
    },
    openSelfBless(index) {
      this.blessInfo.name = this.pageData.staffInfo.name;
      this.blessInfo.content = this.selfList[index];
      this.blessInfo.department = this.pageData.teamInfo.department_three;
      this.blessShow = true;
    },
    makeExpandingArea(el) {
      var timer = null;
      //由于ie8有溢出堆栈问题，故调整了这里
      var setStyle = function (el, auto) {
        if (auto) el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
      };
      var delayedResize = function (el) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(function () {
          setStyle(el);
        }, 200);
      };
      if (el.addEventListener) {
        el.addEventListener(
          "input",
          function () {
            setStyle(el, 1);
          },
          false
        );
        setStyle(el);
      } else if (el.attachEvent) {
        el.attachEvent("onpropertychange", function () {
          setStyle(el);
        });
        setStyle(el);
      }
      if (window.VBArray && window.addEventListener) {
        //IE9
        el.attachEvent("onkeydown", function () {
          var key = window.event.keyCode;
          if (key == 8 || key == 46) delayedResize(el);
        });
        el.attachEvent("oncut", function () {
          delayedResize(el);
        }); //处理粘贴
      }
    },
    getblessList() {
       this.blessList = this.res.data.blessing;
          this.blessList2 = this.blessList.slice(0, 6);
          if (this.blessList2.length) {
            setTimeout(() => {
              this.bindInfo();
            }, 6000);
          }
      // const data = {
      //   client_id: "yz_year_end_h5",
      //   login_token: getToken(),
      // };
      // blessList(data)
      //   .then((res) => {
      //     this.blessList = res.data.blessing;
      //     this.blessList2 = this.blessList.slice(0, 6);
      //     if (this.blessList2.length) {
      //       setTimeout(() => {
      //         this.bindInfo();
      //       }, 6000);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    blessCreate() {
      const data = {
        number: this.pageData.staffInfo.number,
        name: this.pageData.staffInfo.name,
        content: this.blessContent,
        department_three: this.pageData.teamInfo.department_three,
      };
      blessCreate(data)
        .then((res) => {
          if (res.data) {
            this.selfList.push(this.blessContent);
            this.selfLantern = true;

            this.blessContent = "";
            this.$refs.inputBox.style.height = "auto";
            console.log(this.selfList);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
@import "./lantern.scss";
.vedio {
  width: 100%;
}
::v-deep.van-dialog {
  background-color: #000;
  font-size: 0;
}
</style>
