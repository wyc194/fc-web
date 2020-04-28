<template>
  <div style="height: 58px;">
    <transition name="header">
      <Layout v-show="show" class="header">
        <Row>
          <Col span="6">
            <img :src="logoURI" class="logo" />
          </Col>
          <Col span="14">
            <ul class="nav">
              <li><a href="/">首页</a></li>
              <li><a href="/">分类栏目</a></li>
              <li><a href="/">在线工具</a></li>
              <li><a href="/about">关于本站</a></li>
            </ul>
          </Col>
          <Col span="4">
            <Button type="primary" to="/login">登录 / 注册</Button>
            <Button type="primary" to="/writer">新建文章</Button>
          </Col>
        </Row>
      </Layout>
    </transition>
  </div>
</template>

<script>
import { Layout, Row, Col, Button } from 'view-design'

export default {
  name: "HomeHeader",
  components: { Layout, Row, Col, Button },
  data() {
    return {
      logoURI: require("@/assets/logo.png"),
      show: true,
      scrollTop: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.watchScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.watchScroll, false)
  },
  methods: {
    watchScroll () {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      let diff = scrollTop - this.scrollTop
      this.scrollTop = scrollTop
      if (scrollTop > 60 && diff > 0) {
        this.show = false
      }
      if (scrollTop < 60 || diff < 0) {
        this.show = true
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header-enter-active, .header-leave-active
  transition: all .8s ease;
.header-leave-to, .header-enter
  transform: translateY(-70px);
  opacity: 0;
.header
  position fixed
  width 100%
  line-height 55px
  border-bottom solid 1px #dce7ff
  background-color #fff
  box-shadow 0 2px 10px rgba(0,0,0,.05)
  z-index 100
  .logo
    height 55px
    margin-left 10px
    vertical-align middle
  .nav
    list-style-type: none
    li
      display: inline-block
      margin-left: 28px
      padding-bottom: 3px
      a
        height: 55px
        font-size: 17px
        color: #7e8c8d
        &:hover, &.current
          color #409EFF
</style>
