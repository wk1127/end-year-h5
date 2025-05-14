<template>
  <div class="conclusiontheme-position">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ModulePosition',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.conclusiontheme-position {
  position: absolute;
}
</style>
