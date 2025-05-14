<template>
  <div class="login-container wh100">
    <module-position class="login-sky">
      <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/background-center.png" class="w100">
    </module-position>
    <module-position class="login-build w100">
      <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/background-top.png" class="w100">
    </module-position>
    <!-- <form> -->
      <!-- <transition name="mybox"> -->
      <div :class="[ showForm ? '' : 'form-container-login' ]">
        <module-position class="login-account login-form">
          <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/input.png" class="w100">
          <module-position class="login-form-input w100">
            <input type="text" class="form-input" v-model="userNumber" placeholder="请输入工号">
          </module-position>
        </module-position>
        <module-position class="login-password login-form">
          <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/input.png" class="w100">
          <module-position class="login-form-input w100">
            <input type="password" class="form-input" v-model="password" placeholder="请输入密码">
          </module-position>
        </module-position>
      <!-- </form> -->
      <!-- <module-position class="login-music" @submit.native.prevent="loginSubmit">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/music.png" class="w100">
      </module-position> -->
      <module-position class="login-btn" @click.native="loginSubmit">
        <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/botton.png" class="w100">
        <module-position class="arrow-left arrow">
          <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/left-arrow.png" class="h100">
        </module-position>
        <module-position class="arrow-right arrow">
          <img src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/right-arrow.png" class="h100">
        </module-position>
        <module-position class="login-text">
          <div class="w100">重启2020</div>
        </module-position>
      </module-position>
    </div>
    <!-- <div :class="[ 'time-count', showForm ? '' : 'after-login']">

    </div> -->
    <div v-if="!showForm" :class="[ showForm ? '' : 'time-count' ]">
      <module-position class="count-img count">
        <img :src="'https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/count' + timeCount + '.png'" class="w100">
      </module-position>
      <module-position class="count-ready-text count text">
        <div>准备重启中<span class="dotting"></span></div>
      </module-position>
      <module-position class="count-text1 count count-text text">
        <div>正在注入工号...</div>
      </module-position>
      <module-position class="count-text2 count count-text text">
        <div>正在适配...</div>
      </module-position>
      <module-position class="count-text3 count count-text text">
        <div>回忆加载...</div>
      </module-position>
    </div>
    <div :class="['fade' ,showForm ? 'fade-container' : 'fade-out']"></div>
  </div>
</template>

<script>
import { Notify } from 'vant';
import ModulePosition from '@/components/ModulePosition'
export default {
  name: 'Login',
  components: { ModulePosition },
  data() {
    return {
      userNumber: '',
      password: '',
      client_id: 'yz_year_end_h5',
      simulatedData: {
        code: '000000',
        data: {
          token: '43245353453453453453'
        },
        message: ''
      },
      showForm: true,
      timeCount: 3,
      allowSubmit: true
    }
  },
  computed: {
    postParams() {
      return Object.assign({}, {
        username: this.userNumber,
        password: this.password,
        client_id: this.client_id
      })
    },
    dataParmas() {
      return Object.assign({}, {
        client_id: this.client_id,
        login_token: this.$store.getters.token
      })
    }
  },
  methods: {
    async loginSubmit() {
      if(this.userNumber && this.password && this.allowSubmit) {
        this.allowSubmit = false
        const response =  await this.$store.dispatch('userLogin', this.postParams)
        if (response.code === '000000') {
          this.$store.dispatch('setVerifyTime', this.$GetCurrentTime())
          await this.getPageData()
        } else {
          Notify({ type: 'danger', message: response.message });
        }
        setTimeout(() => {
          this.allowSubmit = true
        },1000)
      }
    },
    async getPageData() {
      const response = await this.$store.dispatch('getPageData', this.dataParmas)
      if (response.code === '000000') {
        this.showForm = false
        let _this = this
        setTimeout(() => {
          let timer = setInterval(() => {
            if(_this.timeCount === 1) {
              clearInterval(timer)
              this.$router.push({ path: '/conclusion' })
            }
            _this.timeCount > 1 && _this.timeCount--
          }, 1000)
        }, 500)
      } else {
        Notify({ type: 'danger', message: '数据获取失败' });
      }
    }
      
  }
}
</script>

<style lang="scss" scoped>
  $readyTop: 15px;
 input:-webkit-autofill {
   -webkit-text-fill-color: #420db0 !important;

    -webkit-box-shadow: 0 0 0px 1000px rgba(0,0,0,0) inset !important;
    font-size: 15px;
    background-image: none;

    // transition: background-color 50000s ease-in-out 0s;
    // -webkit-text-fill-color: #420db0 !important;
    // font-size: 15px;
    // background-color:  rgba(255, 255, 255, 0);
    // background-image: none;
 }
 .form-container-login {
   animation: afterLogin .5s;
   animation-fill-mode: forwards;
   position: relative;
   z-index: 11;
 }
 .container-time-count {
    opacity: 0;
 }
 @keyframes MaskSetting {
  0% {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
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
    background-color: rgba(0, 0, 0, 1);
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
     background-color: rgba(0, 0, 0, 1);
   }
   99% {
     height: 100%;
   }
   100% {
     height: 0;
     background-color: rgba(0, 0, 0, 0);
   }
 }
 .fade-container {
   animation: bgAnimate 1.5s;
   animation-fill-mode: forwards;
  
 }
 .fade-out {
  animation: MaskSetting 1s 3s;
  animation-fill-mode: forwards;
 }
 .fade {
    position: fixed;
    z-index: 15;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 }
 .time-count {
   animation: timeCount .5s;
   animation-fill-mode: forwards;
   position: relative;
   z-index: 11;
 }
 @keyframes timeCount {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
 }
 .count-ready-text {
   color: #FFCC4D;
   font-size: 31px;
   font-weight: bold;
   width: 300px;
   top: 180px;
   animation: readyText .5s .5s;
   animation-fill-mode: forwards;
 }
  @keyframes readyText {
    0% {
      top: 180px;
      opacity: 0;
    }
    100% {
      top: 180px - $readyTop;
      opacity: 1;
    }
  }
  @keyframes countText1 {
    0% {
      top: 225px;
      opacity: 0;
    }
    100% {
      top: 225px - $readyTop;
      opacity: 1;
    }
  }
  @keyframes countText2 {
    0% {
      top: 248px;
      opacity: 0;
    }
    100% {
      top: 248px - $readyTop;
      opacity: 1;
    }
  }
  @keyframes countText3 {
    0% {
      top: 271px;
      opacity: 0;
    }
    100% {
      top: 271px - $readyTop;
      opacity: 1;
    }
  }
 .count-img {
    width: 115px;
    left: 50%;
    top: 68px;
    transform: translate(-50%, 0);
 }
 .count {
    z-index: 14;
    text-align: center;
    transform: translate(-50%, 0);
    left: 50%;
 }
 .count-text {
   font-size: 15px;
   color: #FFB73F;
 }
 .count-text1 {
   top: 210px;
   animation: countText1 .5s .8s;
   animation-fill-mode: forwards;
 }
 .count-text2 {
   top: 233px;
   animation: countText2 .5s 1.1s;
   animation-fill-mode: forwards;
 }
 .count-text3 {
   top: 256px;
   animation: countText3 .5s 1.4s;
   animation-fill-mode: forwards;
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
  background: url('https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/background-bottom.png') center center no-repeat;
  background-size: 100% 100%;
  z-index: 10;

  .login-form {
    position: absolute;
    // bottom: calc(50%);
    left: 50%;
    width: 220px;
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
    top: 140px;
  }
  .login-password {
    top: 193px;
  }
  .login-music {
    width: 53px;
    right: 22px;
    top: 22px;
    z-index: 13;
  }
  .login-btn {
    z-index: 13;
    width: 200px;
    left: 50%;
    top: 226px;
    transform: translate(-50%, 0);
  }
  .arrow-left {
    right: 25px;
  }
  .arrow {
    height: 17px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .arrow-right {
    left: 17px;
  }
  .login-text {
    text-align: center;
    left: calc(50% - 2px);
    top: calc(50% - 2px);
    transform: translate(-50%, -50%);
    font-size: 22px;
    color: #BC1932;
    font-weight: bold;
  }
  .login-form-input {
    top: 45%;
    transform: translate(0, -50%);
    // border: none;
  }
  .form-input {
    border: none;
    background-color: rgba(255, 255, 255, 0);
    color: #420db0;
    font-size: 15px;
    text-align: center;
    padding: 5px 0;
  }
    
  input::-webkit-input-placeholder { /* WebKit browsers */
  
  color: #7248E0 !important;
  
  }
  
  input::-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
  
  color: #7248E0 !important; 
  
  } 
  
  input::-moz-placeholder { /* Mozilla Firefox 19+ */
  
  color: #7248E0 !important;
  
  } 
  input::-ms-input-placeholder {    /* Internet Explorer 10+ */  
  
  color: #7248E0 !important; 
  
  }
}
</style>
