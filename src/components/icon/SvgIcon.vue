<template>
  <svg :class="classesStr" aria-hidden="true">
    <use :xlink:href="iconIdentity"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String
    },
    iconName: {
      type: String,
      require: true
    }
  },
  computed: {
    classesStr () {
      return !this.iconClass ? 'icon' : ('icon ' + this.iconClass)
    },
    iconIdentity () {
      return `#icon-${this.iconName}`
    }
  }
}
</script>
