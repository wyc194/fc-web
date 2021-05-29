<template>
  <el-menu default-active="0" class="menu" :collapse="isCollapse" router>
    <el-button
      :icon="isCollapse ? 'el-icon-caret-right' : 'el-icon-caret-left'"
      @click="isCollapse = !isCollapse"
    />
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <template #title>首页</template>
    </el-menu-item>
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>在线工具</span>
      </template>
      <el-menu-item-group title="正则表达式">
        <el-menu-item index="/regulex">图解正则表达式</el-menu-item>
        <el-menu-item index="1-2">在线正则表达式</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Corn表达式">
        <el-menu-item index="1-3">在线Corn表达式</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template #title>选项信息</template>
        <el-menu-item index="1-4-1">选项信息</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
import { propNames } from '@/constant'

export default {
  name: 'Navigation',
  data() {
    return {
      isCollapse: true
    }
  },
  watch: {
    isCollapse(newValue, oldValue) {
      this.$nextTick(() => {
        const events = {}
        events[propNames.navCollapse] = newValue
        this.$store.dispatch('setEvents', events)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu
  min-height 580px
.menu:not(.el-menu--collapse)
    width 240px
  .el-button
    width 100%
    margin-left 1px
  .el-button--small
    font-size 16px
</style>
