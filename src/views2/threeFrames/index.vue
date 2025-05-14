<template>
  <div class="container animate__animated animate__slow animate__fadeOut delay-2s">
    <img class="img1" :src="`${PUBLICIMGURL}threeFrames/img1.png`" alt="" />
    <img class="img2" :src="`${PUBLICIMGURL}threeFrames/img2.png`" alt="" />
    <img
      class="img3"
      :src="`${PUBLICIMGURL}threeFrames/img3.png`"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.toLogin()
  },
  methods: {
    toLogin() {
      let t;
      clearTimeout(t);
      t = setTimeout(() => {
        this.$router.push("/two/login");
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
.delay-2s {
  animation-delay: 2000ms;
}

</style>
