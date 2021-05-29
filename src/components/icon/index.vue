<template>
  <svg :class="styleClass" aria-hidden="true">
    <use :xlink:href="iconIdentity"></use>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
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
    styleClass () {
      return this.iconClass ? `icon ${this.iconClass}` : 'icon'
    },
    iconIdentity () {
      return `#icon-${this.iconName}`
    }
  }
}
</script>
