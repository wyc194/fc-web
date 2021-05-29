<template>
  <div class="setting-bar">
    <div class="user-name">王永~</div>
    <el-dropdown>
      <i class="el-icon-user" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="console.log('exit')">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'SettingBar'
}
</script>

<style lang="stylus" scoped>
.setting-bar
  padding 0 20px
  display flex
  justify-content right
  margin-left auto
  text-align right
  align-items center
  i
    margin-left 10px
    cursor pointer
    font-size: 16px
.el-dropdown-menu
  text-align center
  min-width 60px
</style>
