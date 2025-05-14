<template>
  <div>
    <slot v-if="currentTime >= time" />
  </div>
</template>

<script>
export default {
  name: 'ModuleShow',
  props: {
    time: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      currentTime: 0
    }
  },
  created () {
  },
  mounted () {
    
  }
}
</script>

<style lang="scss" scoped>

</style>
