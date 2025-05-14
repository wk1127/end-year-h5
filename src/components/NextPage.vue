<template>
  <section class="section-next">
    <img
      class="next"
      src="https://mats.sudoyu.com/oa/end_of_2020_h5/img/conclusion/arrows-up.png"
      alt=""
    />
    <div class="text">向上滑动 故事继续</div>
  </section>
</template>

<script>
export default {
  name: "ModulePosition",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.section-next {
  position: fixed;
  bottom: 8.5vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 90;
  .next {
    display: block;
    width: 6vw;
    margin: auto;
    -webkit-animation: next 1.5s infinite ease-in-out;
    animation: next 1.5s infinite ease-in-out;

  }
  .text {
    margin-top: 1vh;
    font-size: 4vw;
    color: #ffffff;
  }
}

@-webkit-keyframes next {
  0%,
  30% {
    opacity: 0;
    transform: translateY(10px);
  }
  60% {
    opacity: 1;
    transform: translate(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-8px);
  }
}

@keyframes next {
  0%,
  30% {
    opacity: 0;
    transform: translateY(10px);
  }
  60% {
    opacity: 1;
    transform: translate(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-8px);
  }
}
</style>
