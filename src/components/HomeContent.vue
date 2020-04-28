<template>
  <Layout style="background-color: #fff; padding: 30px 10px;">
    <Row class="container" style="margin: 0 auto;">
      <Col span="18">
        <div class="banner">
          <a target="_blank" href="/">
            <img src="http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587460786&t=93476876b5aab3db506802162cc1a36f" alt="540">
          </a>
        </div>
        <div class="content-item" v-for="article in articleList" :key="article.id">
          <a :href="article.uri" class="item-title">{{ article.title }}</a>
          <p class="item-content">{{ article.desc }}</p>
          <div class="item-meta">
            <span>
              <Icon type="ios-water" /> 0.9
            </span>
            <a class="nickname" target="_blank" href="uri">坏汤姆的小杰瑞</a>
            <a target="_blank" href="uri">
              <Icon type="ios-chatbubbles" /> 6
            </a>
            <span>
              <Icon type="ios-heart" /> 9
            </span>
          </div>
          <Divider style="margin-top: 18px;"/>
        </div>
        <a href="/" class="load-more">阅读更多</a>
      </Col>
      <Col span="6">
        <div class="recommended">
          <div class="recommended-title">
            <span>推荐阅读</span>
            <a href="/" target="_blank">
              <Icon type="ios-refresh" /> 换一批
            </a>
          </div>
          <div class="recommended-item" v-for="article in recommendedArticles" :key="article.id">
            <div class="title" :title="article.title">
              <a :href="article.uri" target="_blank">{{ article.title }}</a>
            </div>
            <div class="meta">阅读 {{ article.count }}</div>
          </div>
        </div>
        <div class="blogroll">
          <div class="blogroll-title">
            <span>友情链接</span>
          </div>
          <div class="blogroll-item" v-for="blogLink in blogLinks" :key="blogLink.id">
            <div class="content" :title="blogLink.title">
              <a :href="blogLink.uri" target="_blank">{{ blogLink.title }}</a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Layout>
</template>

<script>
import { Layout, Row, Col, Icon, Divider } from 'view-design'

export default {
  name: "HomeContent",
  components: { Layout, Row, Col, Icon, Divider },
  data: function () {
    return {
      articleList: [
        {
          id: 100,
          title: '标题1',
          desc: '最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...',
          category: 'JVM',
          pageviews: 12,
          comments: 8,
          uri: 'article/1',
          crtDate: new Date(2019,12,5).toDateString()
        }, {
          id: 110,
          title: '标题1',
          desc: '最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...',
          category: 'JVM',
          pageviews: 12,
          comments: 8,
          crtDate: new Date(2019,12,5).toDateString()
        }, {
          id: 120,
          title: '标题1',
          desc: '最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...',
          category: 'JVM',
          pageviews: 12,
          comments: 8,
          crtDate: new Date(2019,12,5).toDateString()
        }, {
          id: 130,
          title: '标题1',
          desc: '最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...',
          category: 'JVM',
          pageviews: 12,
          comments: 8,
          crtDate: new Date(2019,12,5).toDateString()
        }
      ],
      recommendedArticles: [
        {
          id: 100,
          uri: "/",
          title: '如何策划一场高大上的企业年会',
          count: 100
        },
        {
          id: 110,
          uri: "/",
          title: '最好的激励：让优者得高薪',
          count: 990
        },
        {
          id: 120,
          uri: "/",
          title: '最好的激励：让优者得高薪',
          count: 990
        },
        {
          id: 130,
          uri: "/",
          title: '最好的激励：让优者得高薪',
          count: 990
        },
        {
          id: 140,
          uri: "/",
          title: '最好的激励：让优者得高薪',
          count: 990
        }
      ],
      blogLinks: [
        {
          id: 100,
          uri: "/",
          title: '百度'
        },
        {
          id: 110,
          uri: "/",
          title: '搜狐'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.container
  width: 960px
.banner
  margin-bottom: 20px
  a
    cursor: pointer
    text-decoration: none
    img
      width: 100%
      height: 270px
      border-radius: 20px
      background-color: hsla(0,0%,71%,.2)
      vertical-align: middle
.content-item
  word-wrap: break-word
.item-title
  margin-bottom: 4px
  font-size: 18px
  font-weight: 800
  color: #2f2f2f
  &:visited
    color: #969696
  &:hover, &:focus
    text-decoration: underline
    color: #2f2f2f
.item-content
  margin: 0 0 8px
  font-size: 13px
  line-height: 24px
  color: #999
.item-meta
  font-size: 12px
  font-weight: 400
  line-height: 20px
  span, a
    margin-right: 10px;
    color: #b4b4b4;
  a
    &:hover, &:focus
      color: #787878
.recommended
  margin-bottom: 20px
  padding-left: 30px
  .recommended-title
    text-align: left
    margin-bottom: 12px
    span, a
      font-size: 14px
      color: #969696
    span
      padding-left: 4px
      border-left: 4px solid #ec7259
    a
      float: right
      display: inline-block
      padding-right: 10px
      &:hover, &:focus
        color: #787878
  .recommended-item
    margin-bottom: 12px
    .title
      font-size: 14px
      line-height: 22px
      margin-bottom: 4px
      overflow: hidden
      text-overflow: ellipsis
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
      a
        color: #2f2f2f
        &:hover, &:focus
          text-decoration: underline
    .meta
      font-size: 12px
      color: #969696
.blogroll
  margin-bottom: 20px
  padding-left: 30px
  .blogroll-title
    text-align: left
    margin-bottom: 8px
    span
      font-size: 14px
      color: #969696
      padding-left: 4px
      border-left: 4px solid #ec7259
  .blogroll-item
    margin-bottom: 4px
    padding-left: 10px
    .content
      font-size: 13px
      line-height: 18px
      margin-bottom: 4px
      overflow: hidden
      text-overflow: ellipsis
      a
        &:hover, &:focus
          text-decoration: underline
.load-more
  border-radius: 20px
  background-color: #a5a5a5
  height: 40px
  margin: 30px auto 60px
  padding: 10px 15px
  text-align: center
  font-size: 15px
  color: #fff
  display: block
  &:hover
    color: #fff
    background-color: #9b9b9b
</style>
