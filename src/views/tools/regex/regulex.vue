<template>
  <div class="regulex">
    <h1 @click="Window.open('https://www.npmjs.com/package/regulex_common','_blank')">
      Regulex_common
      <em>JavaScript Regular Expression Visualizer.</em>
    </h1>
    <div class="re-input">
      <el-input v-model="regex" size="large" placeholder="请输入正则表达式">
        <template #prepend>/</template>
        <template #append>/{{ optionStr }}</template>
      </el-input>
    </div>
    <div class="re-opt">
      <el-button type="primary" round @click="doVisual">图像化</el-button>
      <el-button type="primary" round @click="doExport">导出图像</el-button>
      <el-button type="primary" round @click="doEmbed">生成外链</el-button>
      <el-checkbox-group v-model="options" @change="doCheck" class="options">
        <el-checkbox label="i">忽略大小写</el-checkbox>
        <el-checkbox label="m">多行匹配</el-checkbox>
        <el-checkbox label="g">全局匹配</el-checkbox>
      </el-checkbox-group>
    </div>
    <pre v-show="error" class="re-error">{{ error }}</pre>
    <div ref="graph" id="re-graph"></div>
    <div class="re-desc">
      <el-link type="primary" href="https://github.com/wyc194/regulex" target="_blank">Github: wyc194/regulex</el-link>
    </div>
  </div>
</template>

<script>
import { parse, Kit, Raphael, visualize } from 'regulex_common'
import { covertSVG2Image, baseUrl, copy } from '@/utils/common'

export default {
  name: 'Regulex',
  data() {
    return {
      regex: '^(a|b)*?\\d+$',
      options: [],
      paper: null,
      error: ''
    }
  },
  computed: {
    optionStr() {
      let str = ''
      const opts = [...this.options]
      str += opts.includes('i') ? 'i' : ''
      str += opts.includes('m') ? 'm' : ''
      str += opts.includes('g') ? 'g' : ''
      return str
    }
  },
  watch: {
    regex() {
      this.doVisual()
    }
  },
  mounted() {
    this.paper = Raphael('re-graph', 10, 10)
    this.doVisual()
  },
  methods: {
    doCheck() {
      this.doVisual()
    },
    doVisual(ignoreError) {
      this.error = ''
      let parseResult
      try {
        parseResult = parse(this.regex)
      } catch (ex) {
        if (!(ex instanceof parse.RegexSyntaxError)) {
          throw ex
        }
        if (!ignoreError) {
          const errorMsg = [`Error:${ex.message}\n`]
          if (typeof ex.lastIndex === 'number') {
            errorMsg.push(this.regex)
            errorMsg.push(Kit.repeats('-', ex.lastIndex) + '^')
          }
          this.error = errorMsg.join('\n')
        }
        return false
      }
      visualize(parseResult, this.optionStr, this.paper)
      return true
    },
    doExport() {
      const reSvg = this.$refs.graph.children[0]
      covertSVG2Image(reSvg, new Date().getTime(), reSvg.width.baseVal.value, reSvg.height.baseVal.value)
    },
    doEmbed() {
      const iframeTxt = `<iframe src="${baseUrl()}/blank/regulex_"></iframe>`
      this.$confirm(iframeTxt, '提示', {
        confirmButtonText: '复制',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        copy(iframeTxt)
        this.$message.info('复制成功!')
      }).catch(e => this.$message.info((e && e.message) || '已取消复制!'))
    }
  }
}
</script>

<style lang="stylus">
.regulex
  h1
    color #8a9fb4
    margin 14px 0
    padding 18px 16px 20px
    border-bottom 2px dashed #808080
    em
      color #77a6a6
      font-size small
      padding-left 2em
  .re-input
    .el-input__inner
      color #8282aa
      padding 0 2px
      font-size 1.4em
      font-weight bold
  .re-opt
    margin-top 8px
    .options
      display inline-block
      margin 6px 20px 0 10px
      .el-checkbox
        margin-right 15px
        .el-checkbox__label
          padding-left 5px
  .re-error
    margin 10px 0
    padding 10px 5px
    background-color #eeeeee
  #re-graph
    margin 10px 0 16px 0
    width 100%
    background-color #eeeeee
    cursor move
    svg
      display block
      margin 0 auto
  .re-desc
    padding-top 8px
    text-align center
    border-top 1px solid #808080
</style>
