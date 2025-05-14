<template>
  <div class="login-container animate__fadeIn animate__slow animate__animated" :style="bg1"  :class="{animate__fadeOut:isLogin}">
    <div class="wh100">
      <div class="input-cont">
        <module-position class="login-account login-form">
          <img :src="`${PUBLICIMGURL}login/input.png`" class="w100" />
          <module-position class="login-form-input w100">
            <input
              type="text"
              class="form-input"
              v-model="userNumber"
              placeholder="请输入工号"
              maxlength="20"
            />
          </module-position>
        </module-position>
        <module-position class="login-password login-form">
          <img :src="`${PUBLICIMGURL}login/input.png`" class="w100" />
          <module-position class="login-form-input w100">
            <input
              type="password"
              class="form-input"
              v-model="password"
              placeholder="请输入密码"
              maxlength="20"
            />
          </module-position>
        </module-position>
        <module-position
          class="login-btn ripple"
          @click.native="
            () => {
              isBack = false;
              loginSubmit();
            }
          "
        >
          <img :src="`${PUBLICIMGURL}login/btn.png`" class="w100" />
          <module-position class="login-text">
            <div class="w100">带上回忆出发</div>
          </module-position>
        </module-position>
        <div
          class="back-old"
          @click="
            () => {
              isBack = true;
              loginSubmit();
            }
          "
        >
         {{backMsg}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Notify } from "vant";
import ModulePosition from "@/components/ModulePosition";
export default {
  name: "Login",
  components: { ModulePosition },
  data() {
    return {
      userNumber: "admin",
      password: "123456",
      client_id: "yz_year_end_h5",
      isLogin: false,
      bg1: {
        background: `url(${this.PUBLICIMGURL}login/bg.png) no-repeat center/100%`,
      },
      staffInfo: "",
      ticketInfo: "",
      isBack: false,
      loading: false,
      backMsg:'> 回顾2020 <'
    };
  },
  computed: {
    postParams() {
      return Object.assign(
        {},
        {
          username: this.userNumber,
          password: this.password,
          client_id: this.client_id,
        }
      );
    },
    dataParmas() {
      return Object.assign(
        {},
        {
          client_id: this.client_id,
          login_token: this.$store.getters.token,
        }
      );
    },
  },
  methods: {
    async loginSubmit() {
      if (this.loading) {
        return
      }
      this.getPageData();
      // this.loading = true
      // if (this.userNumber && this.password) {
      //   const response = await this.$store.dispatch(
      //     "userLogin",
      //     this.postParams
      //   );
      //   this.loading = false
      //   if (response.code === "000000") {
      //     this.$store.dispatch("setVerifyTime", this.$GetCurrentTime());
      //     await this.getPageData();
      //   } else {
      //     Notify({ type: "danger", message: response.message });
      //   }
      // }else{
      //   this.loading = false
      //   Notify({ type: "warning", message:'请先输入工号密码'});
      // }
    },
    // async loginSubmit() {
    //   if (this.loading) {
    //     return
    //   }
    //   this.loading = true
    //   if (this.userNumber && this.password) {
    //     const response = await this.$store.dispatch(
    //       "userLogin",
    //       this.postParams
    //     );
    //     this.loading = false
    //     if (response.code === "000000") {
    //       this.$store.dispatch("setVerifyTime", this.$GetCurrentTime());
    //       await this.getPageData();
    //     } else {
    //       Notify({ type: "danger", message: response.message });
    //     }
    //   }else{
    //     this.loading = false
    //     Notify({ type: "warning", message:'请先输入工号密码'});
    //   }
    // },
    getPageData() {
      if (this.isBack) {
            this.$router.push({ path: "/two/data" });
          } else {
            this.$router.push("/two/step1");
          }
      // const response = await this.$store.dispatch(
      //   "getPageData",
      //   this.dataParmas
      // );
      // if (response.code === "000000") {
      //   this.isLogin = true;
      //   setTimeout(() => {
      //     if (this.isBack) {
      //       this.$router.push({ path: "/two/data" });
      //     } else {
      //       this.$router.push("/two/step1");
      //     }
      //   }, 1000);
      // } else {
      //   Notify({ type: "danger", message: "数据获取失败" });
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
$readyTop: 15px;
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset !important;
  font-size: 15px;
  background-image: none;
}
.form-container-login {
  animation: afterLogin 0.5s;
  animation-fill-mode: forwards;
  position: relative;
  z-index: 11;
}
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
.fadeOut {
  animation: fadeOut 1s;
  animation-fill-mode: both;
}

.ripple {
    position: relative;
    //隐藏溢出的径向渐变背景
    overflow: hidden;
}
 
.ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 98%;
    height: 90%;
    top: 0;
    left: 0;
    pointer-events: none;
    //设置径向渐变
    background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .3s, opacity .5s;
}
 
.ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    //设置初始状态
    transition: 0s;
}

// @keyframes MaskSetting {
//   0% {
//     opacity: 1;
//     background-color:r ;
//   }
//   100% {
//     opacity: 0;
//   }
// }
@keyframes MaskSetting {
  0% {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0);
  }
  99% {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  100% {
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    background-color: rgba(255, 255, 255, 1);
  }
}
@keyframes afterLogin {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes bgAnimate {
  0% {
    background-color: rgba(255, 255, 255, 1);
  }
  99% {
    height: 100%;
  }
  100% {
    height: 0;
    background-color: rgba(255, 255, 255, 0);
  }
}
.fade-container {
  animation: bgAnimate 1.5s;
  animation-fill-mode: forwards;
}
.fade-out {
  animation: MaskSetting 2s;
  animation-fill-mode: both;
}
.fade {
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text {
  opacity: 0;
}
.login-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  .input-cont {
    position: absolute;
    top: 20vh;
    left: 50%;
    transform: translate(-50%);
  }
  .login-form {
    position: absolute;
    // bottom: calc(50%);
    left: 50%;
    width: 190px;
    // height: 200px;
    transform: translate(-50%, -50%);
    z-index: 13;
  }
  .login-sky {
    width: 130%;
    left: -15%;
    top: -15px;
    z-index: 11;
  }
  .login-build {
    z-index: 12;
    bottom: 0;
  }
  .login-account {
    top: 0;
  }
  .login-password {
    top: 43px;
  }
  .login-music {
    width: 53px;
    right: 22px;
    top: 22px;
    z-index: 13;
  }
  .login-btn {
    z-index: 13;
    width: 190px;
    height:40px;
    left: 50%;
    top: 70px;
    transform: translate(-50%, 0);
  }
  .login-text {
    text-align: center;
    left: calc(50% - 2px);
    top: calc(50% - 2px);
    width: 190px;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #ffffff;
  }
  .login-form-input {
    top: 45%;
    transform: translate(0, -50%);
    // border: none;
  }
  .back-old {
    position: absolute;
    width: 200px;
    top: 115px;
    display: block;
    text-align: center;
    font-size: 15px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #4395dc;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .form-input {
    border: none;
    background-color: rgba(255, 255, 255, 0);
    font-size: 15px;
    text-align: center;
    padding: 5px 0;
    font-size: 15px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #532b1f;
    width: 98%;
  }

  input::-webkit-input-placeholder {
    /* WebKit browsers */

    color: #532b1f !important;
  }

  input::-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */

    color: #532b1f !important;
  }

  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */

    color: #532b1f !important;
  }
  input::-ms-input-placeholder {
    /* Internet Explorer 10+ */

    color: #532b1f !important;
  }
}
</style>
