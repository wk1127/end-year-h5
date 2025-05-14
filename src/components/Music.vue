<template>
  <div>
    <audio
      ref="publicAideo"
      :src="`${PUBLICIMGURL}two/music.mp3`"
      controls="controls"
      hidden="hidden"
      autoplay="autoplay"
      loop="loop"
    ></audio>
    <module-position class="login-music" @click.native="musicStatus">
      <img
        :src="
          isPlay
            ? `${PUBLICIMGURL}login/music.png`
            : `${PUBLICIMGURL}login/close-music.png`
        "
        class="w100"
        :style="{ 'animation-play-state': isPlay ? 'running' : 'paused' }"
      />
    </module-position>
  </div>
</template>
<script>
import ModulePosition from "@/components/ModulePosition";
export default {
  name: "Music",
  components: { ModulePosition },
  props: {},
  mounted() {
    this.autoPlay();
  },
  data() {
    return {
      isPlay: true,
    };
  },
  methods: {
    musicStatus() {
      this.isPlay = !this.isPlay;
      let audio = this.$refs.publicAideo;
      audio.volume = 0.4;
      this.isPlay ? audio.play() : audio.pause();
    },
    autoPlay() {
      const musicEle = this.$refs.publicAideo;
      musicEle.volume = 0.4;
      const playPromise = musicEle.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {}).catch(() => {});
      }
      document.addEventListener("touchstart", this.autoPlay);
    },
  },
};
</script>

<style lang="scss" scoped>
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
    animation: musicIcon 3s infinite linear;
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