<template>
  <Layout style="background-color: #f1f1f1; width: 100vw; height: 100vh;">
    <div style="margin-top: 15px; margin-left: 50px;">
      <a href="/">
        <img :src="logoURI" alt="Logo" style="height: 55px; margin-left: 10px; vertical-align: middle;">
      </a>
    </div>

    <Card v-show="!showResetPassword" style="width: 420px; margin: 40px auto 0;">
      <Tabs class="login-form">
        <TabPane label="登录">
          <Form ref="signIn" :model="loginUser" :rules="signFormRule">
            <FormItem prop="name">
              <Input v-model="loginUser.name" prefix="ios-person-outline" type="text" size="large" placeholder="手机号或邮箱" />
            </FormItem>
            <FormItem prop="password">
              <Input v-model="loginUser.password" prefix="ios-lock-outline" type="password" password size="large" placeholder="密码"></Input>
            </FormItem>
            <FormItem prop="remember">
              <i-Switch v-model="loginUser.remember"></i-Switch>
              <span style="margin-left: 5px;">记住我</span>
              <a @click="changeShow" style="float: right; color: #969696;">忘记密码了？</a>
            </FormItem>
            <FormItem>
              <Button type="primary" long :loading="loginLoading" @click="signIn">登录</Button>
            </FormItem>
          </Form>
          <!-- 更多登录方式 -->
          <div class="more-way">
            <Divider style="font-size: 12px; color: #b5b5b5;">社交帐号登录</Divider>
            <ul>
              <li>
                <a target="_blank" href="/users/auth/wechat">
                  <AIcon icon-class="iconqq" other-class="a_icon"></AIcon>
                </a>
              </li>
              <li>
                <a target="_blank" href="/users/auth/qq_connect">
                  <AIcon icon-class="iconweixin" other-class="a_icon"></AIcon>
                </a>
              </li>
            </ul>
          </div>
        </TabPane>
        <TabPane label="注册">
          <Form ref="signUp" :model="loginUser" :rules="signFormRule">
            <FormItem prop="nickname">
              <Input v-model="loginUser.nickname" prefix="ios-person-outline" type="text" size="large" placeholder="您的昵称" />
            </FormItem>
            <FormItem prop="name">
              <Input v-model="loginUser.name" prefix="ios-send-outline" type="text" size="large" placeholder="手机号或邮箱" />
            </FormItem>
            <FormItem prop="captcha" v-show="loginUser.name">
              <Input v-model="loginUser.captcha" prefix="ios-flash-outline" type="text" size="large" placeholder="验证码" />
              <Button type="primary" shape="circle" :disabled="sendValidate" class="captcha" @click="sendCaptcha">
                {{ sendCaptchaBtnText }}
              </Button>
            </FormItem>
            <FormItem prop="password">
              <Input v-model="loginUser.password" prefix="ios-lock-outline" type="password" password size="large" placeholder="设置密码" />
            </FormItem>
            <Button type="success" long :loading="loginLoading" @click="signUp" style="margin-bottom: 10px;">注册</Button>
            <p style="margin: 0 0 10px; text-align: center; font-size: 12px; line-height: 20px; color: #969696;">
              点击 “注册” 即表示您同意并愿意遵守本站<br>
              <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>
              和
              <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a>
              。
            </p>
          </Form>
          <!-- 更多注册方式 -->
          <div class="more-way">
            <Divider style="font-size: 12px; color: #b5b5b5;">社交帐号直接注册</Divider>
            <ul>
              <li>
                <a target="_blank" href="/users/auth/wechat">
                  <AIcon icon-class="iconqq" other-class="a_icon"></AIcon>
                </a>
              </li>
              <li>
                <a target="_blank" href="/users/auth/qq_connect">
                  <AIcon icon-class="iconweixin" other-class="a_icon"></AIcon>
                </a>
              </li>
            </ul>
          </div>
        </TabPane>
      </Tabs>
    </Card>
    <Card v-show="showResetPassword" class="rest-form">
      <Divider><h4>密码重置</h4></Divider>
      <Form ref="signIn" :model="resetUser" :rules="resetFormRule" style="margin: 26px 30px;">
        <FormItem prop="name">
          <Input v-model="resetUser.name" prefix="ios-send-outline" type="text" size="large" placeholder="手机号或邮箱" />
        </FormItem>
        <FormItem prop="captcha">
          <Input v-model="resetUser.captcha" prefix="ios-flash-outline" type="text" size="large" placeholder="验证码" />
          <Button type="primary" shape="circle" :disabled="sendValidate" class="captcha" @click="sendCaptcha">
            {{ sendCaptchaBtnText }}
          </Button>
        </FormItem>
        <FormItem prop="password">
          <Input v-model="resetUser.password" prefix="ios-lock-outline" type="password" password size="large" placeholder="请输入新密码"></Input>
        </FormItem>
        <FormItem prop="confirmPassword">
          <Input v-model="resetUser.confirmPassword" prefix="ios-lock-outline" type="password" password size="large" placeholder="请再次输入新密码"></Input>
        </FormItem>
        <Button type="primary" long :loading="loginLoading" @click="resetPassword">重置密码</Button>
      </Form>
      <Button type="text" @click="changeShow" style="display: block; margin: 0 auto;">
        <Icon type="ios-return-left" style="font-size: 20px;" />
        返回登录注册页
      </Button>
    </Card>
  </Layout>
</template>

<script>
import { Layout, Card, Tabs, TabPane, Form, FormItem, Input, Switch, Icon, Button, Divider } from 'view-design'
import AIcon from "../iconfont/AIcon";

export default {
  name: "Login",
  components: { Layout, Card, Tabs, TabPane, Form, FormItem, Input, 'i-Switch': Switch, Icon, Button, Divider, AIcon },
  data() {
    return {
      logoURI: require("@/assets/logo.png"),
      loginUser: {},
      signFormRule: {},
      resetUser: {},
      resetFormRule: {},
      loginLoading: false,
      showResetPassword: false,
      sendValidate: true,
      sendCaptchaBtnText: '发送验证码'
    }
  },
  methods: {
    changeShow () {
      this.showResetPassword = !this.showResetPassword
    },
    resetPassword () {},
    signIn () {
      this.$api.user.signIn(1)
    },
    signUp () {},
    sendCaptcha () {}
  },
  mounted() {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login-form
  .ivu-tabs-bar
    .ivu-tabs-nav
      width 150px
      margin 0 auto
      float none
  .ivu-form
    width 320px
    margin 0 auto
    padding-top 20px
  .more-way
    margin-top 30px
    ul
      margin-bottom 10px
      list-style none
      text-align center
      li
        width 50px
        height 50px
        margin 0 5px
        display inline-block
        .a_icon
          font-size 28px
.rest-form
  width 420px
  margin 40px auto 0
  .captcha
    position absolute
    right 0
    top 4px
</style>
