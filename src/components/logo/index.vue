<template>
  <div class="fcLogo">
    <img v-if="logo" :src="logo">
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    page: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      title: '归园田居',
      link: '/',
      logo: require(`@/assets/images/logo${this.page === 'loginPage' ? '_login' : ''}.png`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.fcLogo
  height 100%
  padding 0 20px
  display flex
  align-items center
  img
    width 220px
</style>
