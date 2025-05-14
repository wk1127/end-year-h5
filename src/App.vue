<template>
  <div id="app">
    <audio
      ref="aideo"
      :src="`${PUBLICIMGURL}two/step10_end.mp3`"
      controls="controls"
      hidden="hidden"
      preload="auto"
    ></audio>
    <audio
      ref="aideo2"
      :src="`${PUBLICIMGURL}two/step2_start.mp3`"
      controls="controls"
      hidden="hidden"
      preload="auto"
    ></audio>
    <audio
      v-if="version === '1.0'"
      ref="oldAideo"
      src="@/assets/music/conclusion/music.mp3"
      controls="controls"
      hidden="hidden"
      autoplay="autoplay"
      loop="loop"
    ></audio>
    <module-position
      v-if="version === '1.0'"
      class="login-music"
      @click.native="musicStatus"
    >
      <img
        :src="
          isPlay
            ? 'https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/music.png'
            : 'https://mats.sudoyu.com/oa/end_of_2020_h5/img/logIn/music-icon.png'
        "
        class="w100"
        :style="{ 'animation-play-state': isPlay ? 'running' : 'paused' }"
      />
    </module-position>
    <music v-if="version === '2.0'" />
    <router-view />
  </div>
</template>

<script>
import ModulePosition from "@/components/ModulePosition";
import Music from "@/components/Music.vue";
export default {
  components: { ModulePosition, Music },
  data() {
    return {
      isPlay: true,
    };
  },
  mounted() {
    if (this.version === "1.0") {
      this.autoPlay();
    }
  },
  computed: {
    version() {
      return this.$store.state.version;
    },
  },
  methods: {
    musicStatus() {
      this.isPlay = !this.isPlay;
      let audio = this.$refs.oldAideo;
      this.isPlay ? audio.play() : audio.pause();
    },
    autoPlay() {
      var musicEle = this.$refs.oldAideo;
      // 播放开始，可能会显示loading
      var playPromise = musicEle.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {}).catch(() => {});
      }
      document.addEventListener("touchstart", this.autoPlay);
    },
    handleStepAideo() {
      this.$refs.aideo.play();
    },
    handleStep2Aideo() {
      this.$refs.aideo2.play();
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.touchstart {
    position: fixed;
    height: 100vh; 
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
    z-index: 11;
  }
.home-global {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background: #000000;
}
.login-music {
  position: fixed !important;
  width: 53px;
  right: 22px;
  top: 22px;
  z-index: 13;
  > img {
    animation: musicIcon 2s infinite linear;
    animation-fill-mode: forwards;
  }
}
.wh100 {
  width: 100%;
  height: 100%;
}
.w100 {
  width: 100%;
}
.h100 {
  height: 100%;
}
.translateX50 {
  transform: translateX(-50%);
}
.translateY50 {
  transform: translateY(-50%);
}
@keyframes musicIcon {
  0% {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(360deg);
  }
}
.dotting {
  display: inline-block;
  width: 10px;
  min-height: 2px;
  padding-right: 2px;
  border-left: 2px solid currentColor;
  border-right: 2px solid currentColor;
  background-color: currentColor;
  background-clip: content-box;
  box-sizing: border-box;
  -webkit-animation: dot 1.5s infinite step-start both;
  animation: dot 1.5s infinite step-start both;
  *zoom: expression(this.innerHTML ="..."); /*IE7 */
}
.dotting:before {
  content: "...";
} /* IE8 */
.dotting::before {
  content: "";
}
:root .dotting {
  margin-left: 2px;
  padding-left: 2px;
} /* IE9+ */

@-o-keyframes dot {
  25% {
    border-color: transparent;
    background-color: transparent;
  }
  50% {
    border-right-color: transparent;
    background-color: transparent;
  }
  75% {
    border-right-color: transparent;
  }
}
@-ms-keyframes dot {
  25% {
    border-color: transparent;
    background-color: transparent;
  }
  50% {
    border-right-color: transparent;
    background-color: transparent;
  }
  75% {
    border-right-color: transparent;
  }
}
@-moz-keyframes dot {
  25% {
    border-color: transparent;
    background-color: transparent;
  }
  50% {
    border-right-color: transparent;
    background-color: transparent;
  }
  75% {
    border-right-color: transparent;
  }
}
@-webkit-keyframes dot {
  25% {
    border-color: transparent;
    background-color: transparent;
  }
  50% {
    border-right-color: transparent;
    background-color: transparent;
  }
  75% {
    border-right-color: transparent;
  }
}
@keyframes dot {
  25% {
    border-color: transparent;
    background-color: transparent;
  }
  50% {
    border-right-color: transparent;
    background-color: transparent;
  }
  75% {
    border-right-color: transparent;
  }
}
</style>
