<template>
  <div class="regular">
    <div class="re-input">
      <el-input ref="regexInput" v-model="regex" size="large" placeholder="请输入正则表达式">
        <template #prepend>/</template>
        <template #append>/{{ optionStr }}</template>
      </el-input>
    </div>
    <div class="re-opt">
      <el-button type="primary" @click="doMatch">匹配</el-button>
      <el-checkbox-group v-model="options" class="options">
        <el-checkbox label="i">忽略大小写</el-checkbox>
        <el-checkbox label="m">多行匹配</el-checkbox>
        <el-checkbox label="g">全局匹配</el-checkbox>
      </el-checkbox-group>
    </div>
    <pre v-show="error" class="re-error">{{ error }}</pre>
    <div class="re-result">
      <el-input ref="preMatchInput" v-model="preMatchStr" type="textarea" rows="5" placeholder="请输入待匹配文本"></el-input>
      <el-input v-model="matchResult" type="textarea" rows="5" placeholder="匹配结果..." class="spec-textarea"></el-input>
      <el-form label-width="80px">
        <el-form-item label="替换文本:">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-input v-model="replaceStr" ref="replaceInput" placeholder="请输入替换文本"></el-input>
            </el-col>
            <el-col :span="2">
              <el-button type="primary" @click="doReplace">替换</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <el-input v-model="replaceResult" type="textarea" rows="5" placeholder="替换结果..." class="spec-textarea"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Regular',
  data() {
    return {
      regex: '',
      options: ['g'],
      error: '',
      preMatchStr: '',
      matchResult: '',
      replaceStr: '',
      replaceResult: ''
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
  mounted() {
    this.$nextTick(() => this.$refs.regexInput.focus())
  },
  methods: {
    doMatch() {
      if (!this.regex) {
        this.$refs.regexInput.focus()
        return
      }
      if (!this.preMatchStr) {
        this.$refs.preMatchInput.focus()
        return
      }

      let regexp = null
      try {
        regexp = new RegExp(this.regex, this.optionStr)
      } catch (ex) {
        this.error = ex.message
        return
      }

      const results = this.preMatchStr.match(regexp)
      if (!results) {
        this.matchResult = '无匹配结果...'
        return
      }

      const resultArr = []
      if (this.optionStr && this.optionStr.includes('g')) {
        resultArr.push(`共找到 ${results.length} 处匹配：`)
        resultArr.push(...results)
      } else {
        resultArr.push(`匹配位置：${results.index}`)
        resultArr.push(`匹配结果：${results[0]}`)
      }
      this.matchResult = resultArr.join('\n')
    },
    doReplace() {
      if (!this.regex) {
        this.$refs.regexInput.focus()
        return
      }
      if (!this.preMatchStr) {
        this.$refs.preMatchInput.focus()
        return
      }
      if (!this.replaceStr) {
        this.$refs.replaceInput.focus()
        return
      }

      let regexp = null
      try {
        regexp = new RegExp(this.regex, this.optionStr)
      } catch (ex) {
        this.error = ex.message
        return
      }
      this.preMatchStr.match(regexp) && (this.replaceResult = this.preMatchStr.replace(regexp, this.replaceStr))
    }
  }
}
</script>

<style lang="stylus">
.regular
  padding 10px
  .re-input
    .el-input__inner
      color #8282aa
      padding 0 2px
      font-size 1.3em
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
  .re-result
    margin 20px 0
    .el-form-item
      margin-bottom 0
    .spec-textarea
      margin 10px 0
      textarea
        background-color #eeeeee
</style>
