<template>
  <el-container class="layout">
    <el-header class="header">
      <div class="header-inner">
        <logo />
        <setting-bar />
      </div>
    </el-header>
    <el-container class="page">
      <el-aside class="nav">
        <navigation />
      </el-aside>
      <el-container>
        <el-main class="main">
<!--          <tags-view />-->
          <router-view v-slot="{ Component }">
            <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-footer class="footer">
      <div class="abouts">
        <a target="_blank" href="http://www.freecity.club">关于本站</a>
        <em> · </em>
        <a target="_blank" href="http://www.freecity.club/contact">联系我们</a>
        <em> · </em>
        <a target="_blank" href="http://www.freecity.club/p">合作伙伴</a>
        <div class="icp">
          ©2016-2021 个人网站 / 归园田居 /
          <a target="_blank" href="https://beian.miit.gov.cn">豫ICP备19016048号-1 / </a>
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=xxx">
            公网安备 - 待处理
          </a>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import Logo from '@/components/logo'
import SettingBar from '@/components/setting'
import Navigation from '@/components/navigation'

export default {
  name: 'Layout',
  components: {
    Logo,
    Navigation,
    SettingBar
  }
}
</script>

<style lang="stylus" scoped>
.layout
  .header
    position relative
    padding 0
    z-index 1000
    .header-inner
      width 100%
      height 60px
      position fixed
      top 0
      background-color #ffffff
      border-color #f0f0f0
      box-shadow 0 1px 3px rgba(18, 18, 18, 0.1)
      display flex
  .page
    padding 10px
    .nav
      width auto !important
    .main
      padding 0 10px
      margin 0 10px
  .footer
    margin 0 auto
    .abouts
      a
        color #969696
        font-size 15px
        &:hover
          color #2F2F2F
      .icp
        color #C8C8C8
        a
          color #C8C8C8
          &:hover
            color #2F2F2F
</style>
