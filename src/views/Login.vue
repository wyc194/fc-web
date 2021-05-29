<template>
  <div class="login-container">
    <div class="login-logo">
      <a href="/">
        <img :src="logoURI" alt="Logo" />
      </a>
    </div>
    <div class="login-box">
      <!--   头像区   -->
      <div class="avatar-box">
        <img :src="logoURI">
      </div>
      <!--   登录-注册-重置密码表单   -->
      <div class="login-form">
        <!--   登录表单   -->
        <el-form v-show="formType === 0" :model="loginForm" :rules="loginFormRules" :status-icon="true" ref="loginForm" label-width="0">
          <el-form-item prop="userName">
            <el-input v-model="loginForm.userName" size="-" :maxlength="20" placeholder="请输入用户名/注册手机号/注册邮箱">
              <template slot="prepend">
                <svg-icon icon-name="user"></svg-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" size="-" type="password" :maxlength="20" placeholder="请输入密码">
              <template slot="prepend">
                <svg-icon icon-name="password"></svg-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="记住我" label-width="60px" class="remember">
            <el-switch v-model="loginForm.remember"></el-switch>
            <div class="switch-login">
              <el-button type="text" @click="changeFormType(1)">还没有账号？</el-button>
              <el-button type="text" @click="changeFormType(2)">忘记密码了？</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round @click="login" class="login-btn">登录</el-button>
          </el-form-item>
          <!--   更多登录方式   -->
          <div class="more-way">
            <el-divider>社交账号登录</el-divider>
            <ul>
              <li>
                <a target="_blank" href="/auth/qq">
                  <svg-icon icon-name="qq" icon-class="big-icon"></svg-icon>
                </a>
              </li>
              <li>
                <a target="_blank" href="/auth/wechat">
                  <svg-icon icon-name="wechat" icon-class="big-icon"></svg-icon>
                </a>
              </li>
            </ul>
          </div>
        </el-form>
        <!--   注册表单   -->
        <el-form v-show="formType === 1" :model="signUpForm" :rules="loginFormRules" :status-icon="true" ref="signUpForm" label-width="0">
          <el-form-item>
            <el-input v-model="signUpForm.nickname" size="-" :maxlength="20" placeholder="您的昵称">
              <template slot="prepend">
                <svg-icon icon-name="user"></svg-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="userName">
            <el-input v-model="signUpForm.userName" size="-" :maxlength="20" placeholder="手机号/邮箱">
              <template slot="prepend">
                <svg-icon icon-name="phone"></svg-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="signUpForm.verifyCode" size="-" :maxlength="6" placeholder="验证码">
              <template slot="prepend">
                <svg-icon icon-name="security"></svg-icon>
              </template>
              <template slot="append">
                <el-button slot="suffix" type="text" :disabled="verifyCodeSendStatus!==2"
                           @click="sendVerifyCode"
                           class="validate-btn">
                  {{ verifyCodeText }}
                </el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="signUpForm.password" size="-" type="password" :maxlength="20" placeholder="设置密码">
              <template slot="prepend">
                <svg-icon icon-name="password"></svg-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="switch-login-alone">
              <el-button type="text" @click="changeFormType(0)">已有账号？</el-button>
              <el-button type="text" @click="changeFormType(2)">忘记密码了？</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round @click="signUp" class="login-btn">注册</el-button>
            <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守本站<br>
              <a href="/user">用户协议</a>和<a href="/user">隐私政策</a>。
            </p>
          </el-form-item>
          <!--   更多注册方式   -->
          <div class="more-way">
            <el-divider>社交账号直接注册</el-divider>
            <ul>
              <li>
                <a target="_blank" href="/auth/qq">
                  <svg-icon icon-name="qq" icon-class="big-icon"></svg-icon>
                </a>
              </li>
              <li>
                <a target="_blank" href="/auth/wechat">
                  <svg-icon icon-name="wechat" icon-class="big-icon"></svg-icon>
                </a>
              </li>
            </ul>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  userNameValidator
} from '@/utils/validate'

export default {
  data () {
    return {
      logoURI: require(`@/assets/logo.png`),
      /**
       * 表单类型
       * 0：登录表单
       * 1：注册表单
       * 2：重置密码表单
       */
      formType: 0,
      /**
       * 验证码发送状态
       * 0：禁用-验证不通过
       * 1：禁用-发送倒计时
       * 2：可用
       */
      verifyCodeSendStatus: 2,
      reSendVerifyCodeTime: 60,
      loginForm: {
        userName: '',
        password: '',
        remember: false
      },
      signUpForm: {
        nickname: '',
        userName: '',
        verifyCode: '',
        password: ''
      },
      loginFormRules: {
        userName: [{ validator: userNameValidator, trigger: 'change' }]
      }
    }
  },
  computed: {
    verifyCodeText () {
      return this.verifyCodeSendStatus === 1 ? this.reSendVerifyCodeTime + '秒后可重发' : '发送验证码'
    }
  },
  methods: {
    changeFormType (formType) {
      this.formType = formType
    },
    sendVerifyCode () {
      //
      this.verifyCodeSendStatus = 1
      const intervalId = setInterval(() => {
        if (this.reSendVerifyCodeTime === 0) {
          clearInterval(intervalId)
          this.verifyCodeSendStatus = 2
          this.reSendVerifyCodeTime = 60
        } else {
          this.reSendVerifyCodeTime--
        }
      }, 1000)
    },
    login () {
      // this.loginForm
    },
    signUp () {
      // this.signUpForm
    }
  }
}
</script>

<style lang="stylus">
@import '~styl/variables.styl'
.login-container
  background-color #f4f4f4
  height 100%
  .login-logo
    padding 30px 0 0 50px
    a img
      height 55px
  .login-box
    position relative
    top 50%
    left 50%
    width 450px
    margin-top -40px
    transform translate(-50%, -50%)
    background-color #fff
    border-radius 4px
    box-shadow: 0 0 8px rgba(0,0,0,.1)
    .avatar-box
      position relative
      left 50%
      transform translate(-50%, -50%)
      height 130px
      width 130px
      padding 10px
      background-color #fff
      border 1px solid #eee
      border-radius 50%
      box-shadow 0 0 10px #ddd
      img
        width 100%
        height 100%
        border-radius 50%
        background-color #eee
    .login-form
      width 100%
      margin-top -40px
      padding 0 50px
      box-sizing border-box
      .el-form-item__error
        padding-left 55px !important
      .remember
        margin-top -8px
        .switch-login
          position absolute
          right 0
          display inline-block
      .switch-login-alone
        margin-top -8px
        display flex
        justify-content flex-end
      .remember .switch-login, .switch-login-alone
        span
          font-size $f13
      .validate-btn
        padding 0 8px
        width 100px
      .login-btn
        margin-top -10px
        width 100%
        font-size $f18
      .sign-up-msg
        margin-top 10px
        text-align center
        font-size $f12
        line-height 20px
        color #969696
        a
          color $paleBlue
      .more-way
        margin-top 35px
        padding-bottom 10px
        text-align center
        .el-divider__text
          font-size $f12
          color $gray
        ul
          margin 0
          list-style none
          li
            margin 0 5px
            display inline-block
            text-align center
            a
              display block
              width 35px
              height 35px
</style>
