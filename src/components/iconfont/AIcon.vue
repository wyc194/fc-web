<template>
  <svg :class="addClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "AIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    otherClass: {
      type: String
    }
  },
  computed: {
    addClass () {
      if (this.otherClass) {
        return 'icon ' + this.otherClass
      } else {
        return 'icon'
      }
    },
    iconName () {
      return `#${this.iconClass}`
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.icon
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  overflow hidden
</style>
