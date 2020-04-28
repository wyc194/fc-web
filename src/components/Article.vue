<template>
  <Layout>
    <HomeHeader></HomeHeader>
    <Row :gutter="16" class="container" style="margin: 0 auto; padding-top: 10px;">
      <Col span="18" class="content">
        <div class="article">
          <h1 class="title">{{ article.title }}</h1>
          <div class="meta-top">
            <a :href="article.authorUri" target="_blank" class="profile">
              <img src="https://upload.jianshu.io/users/upload_avatars/8107105/9d7d7961-1fca-4c23-8196-45e779f5bd09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
            </a>
            <div style="margin-left: 8px;">
              <div class="author">
                <a style="color: inherit;" :href="article.authorUri" target="_blank">{{ article.author }}</a>
                <button type="button" class="concern">
                  <span>关注</span>
                </button>
              </div>
              <div style="color: #969696;">
                <span style="margin-right: 8px;">2019-01-27 12:19:31</span>
                <span style="margin-right: 8px;">字数 320</span>
                <span>阅读 1,334</span>
              </div>
            </div>
          </div>
          <article class="text">
            最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...
            最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...
            最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...
            最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...
            最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...
            最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...
            最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...
          </article>
          <div class="agree">
            <AIcon icon-class="iconagree" other-class="a-icon circle-warp"></AIcon>
            <span v-show="true">234人点赞</span>
            <AIcon icon-class="icondisagree" other-class="a-icon circle-warp"></AIcon>
            <span v-show="true">4人反对</span>
            <AIcon icon-class="iconshang" other-class="a-icon circle-warp"></AIcon>
            <span v-show="true">2人赞赏</span>
            <Dropdown trigger="click">
              <a href="javascript:void(0)">
                <AIcon icon-class="iconellipsis" other-class="a-icon circle-warp" style="margin-left: 12px;"></AIcon>
              </a>
              <DropdownMenu slot="list" style="min-width: 60px;">
                <Dropdown placement="right-start">
                  <DropdownItem>
                    分享
                    <Icon type="ios-arrow-forward"></Icon>
                  </DropdownItem>
                  <DropdownMenu slot="list">
                    <DropdownItem>微信分享</DropdownItem>
                    <DropdownItem>微博分享</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <DropdownItem>收藏</DropdownItem>
                <DropdownItem>举报</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Divider style="margin: 24px 0; height: 1px;"/>
          <div class="meta-bottom">
            <a :href="article.authorUri" target="_blank" class="profile">
              <img src="https://upload.jianshu.io/users/upload_avatars/8107105/9d7d7961-1fca-4c23-8196-45e779f5bd09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
            </a>
            <div style="margin-left: 8px;">
              <div class="author">
                <a style="color: inherit;" :href="article.authorUri" target="_blank">{{ article.author }}</a>
              </div>
              <div class="info">
                <span>总资产88.57元</span>
                <span>共写了7.6W字</span>
                <span>获得2,705个赞</span>
                <span>共390个粉丝</span>
              </div>
            </div>
            <button type="button" class="concern">
              <span>关注</span>
            </button>
          </div>
        </div>
        <section class="advertise">
          <div style="left:0;top:0;border:0px;height:114px; background-color: aquamarine;">
            广告位
          </div>
        </section>
        <section class="comment">
          <div class="edit">
            <img src="https://upload.jianshu.io/users/upload_avatars/8107105/9d7d7961-1fca-4c23-8196-45e779f5bd09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
            <div class="input">
              <textarea placeholder="写下你的评论..."></textarea>
              <div class="publish" v-show="true">
                <div class="desc">
                  <span>Ctrl + Enter 发表</span>
                </div>
                <div>
                  <button type="button" class="publish-btn" :disabled="canPublishComment">
                    <span>发布</span>
                  </button>
                  <button type="button" class="cancel-btn">
                    <span>取消</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h3 class="all-comment">
            <div class="head">
              <span>全部评论</span>
              <span>21</span>
            </div>
            <div class="sorter">
              <Button type="text" :disabled="true">按时间正序</Button>
              <Button type="text" :disabled="false">按时间倒序</Button>
            </div>
          </h3>
          <div class="comment-group">
            <div class="comment-item" v-for="comment in comments" :key="comment.id">
              <a :href="article.authorUri" target="_blank" class="profile">
                <img src="https://upload.jianshu.io/users/upload_avatars/8107105/9d7d7961-1fca-4c23-8196-45e779f5bd09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
              </a>
              <div class="comment-info">
                <div class="comment-user">
                  <a href="/u/287a60dd6f7f" target="_blank" rel="noopener noreferrer">用户1</a>
                </div>
                <div class="comment-meta">
                  <span>1楼</span>
                  <span>2020-04-02 19:45:03</span>
                </div>
                <div class="comment-text">
                  我就是自己在家隔离就可以了，之前一直在简书看文章，后来关注了一个公众号：【晶粮优加】，吃喝也挺方便的，上面很多米面粮油这些，都是送货上门的，很方便
                </div>
                <div class="comment-operate">
                  <span>
                    <AIcon icon-class="iconagreement" other-class="icon-other"></AIcon>赞
                  </span>
                  <span>
                    <AIcon icon-class="iconconment" other-class="icon-other"></AIcon>回复
                  </span>
                  <span>
                    <AIcon icon-class="iconjubao" other-class="icon-other"></AIcon>举报
                  </span>
                </div>
                <Divider style="margin: 14px 0 0; height: 1px;"/>
                <div class="comment-reply" v-show="true" v-for="comment in comments" :key="comment.id">
                  <div class="reply-meta">
                    <a :href="article.authorUri" target="_blank" class="profile">
                      <img src="https://upload.jianshu.io/users/upload_avatars/8107105/9d7d7961-1fca-4c23-8196-45e779f5bd09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
                    </a>
                    <div class="user">
                      <a href="/u/287a60dd6f7f" target="_blank" style="display: block;">用户1</a>
                      <span>2020-04-02 19:45:03</span>
                    </div>
                  </div>
                  <div class="reply-text">
                    之前一直在简书看文章，后来关注了
                  </div>
                  <div class="reply-operate">
                    <span>
                      <AIcon icon-class="iconconment" other-class="icon-reply"></AIcon>回复
                    </span>
                    <span>
                      <AIcon icon-class="iconjubao" other-class="icon-reply"></AIcon>举报
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Page :total="100" prev-text="上一页" next-text="下一页" style="display: table; margin: 0 auto;"/>
          </div>
        </section>
      </Col>
      <Col span="6" class="aside">
        <section class="advertise">
          <img class="ad-img" src="https://oimageb4.ydstatic.com/image?id=3457066514399420749&amp;product=adpublish&amp;w=520&amp;h=347" alt="">
          <span class="signature">广告</span>
        </section>
        <section class="author">
          <div class="info">
            <a :href="article.authorUri" target="_blank" class="profile">
              <img src="https://upload.jianshu.io/users/upload_avatars/8107105/9d7d7961-1fca-4c23-8196-45e779f5bd09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
            </a>
            <div style="margin-left: 8px;">
              <div class="name">
                <a style="color: inherit;" :href="article.authorUri" target="_blank">{{ article.author }}</a>
                <button type="button" class="concern">
                  <span>关注</span>
                </button>
              </div>
              <div style="color: #969696;">
                <span>总资产 1,334</span>
              </div>
            </div>
          </div>
          <Divider style="margin: 16px 0 0; height: 1px;"/>
          <div class="article-item" v-for="article in articles" :key="article.id">
            <div class="title">
              <a href="/p/4749982a434a" target="_blank">
                {{ article.title }}《绽放生命之美》读后感
              </a>
            </div>
            <div class="read-count">阅读 1,000</div>
          </div>
        </section>
        <section class="recommended">
          <div class="recommended-title">
            <span>推荐阅读</span>
          </div>
          <div class="recommended-item" v-for="article in articles" :key="article.id">
            <div class="title" :title="article.title">
              <a :href="article.uri" target="_blank">{{ article.title }}</a>
            </div>
            <div class="meta">阅读 {{ article.count }}</div>
          </div>
        </section>
        <section class="advertise">
          <img class="ad-img" src="https://oimageb4.ydstatic.com/image?id=3457066514399420749&amp;product=adpublish&amp;w=520&amp;h=347" alt="">
          <span class="signature">广告</span>
        </section>
      </Col>
    </Row>
    <div class="left-float">
      <AIcon icon-class="iconagree" other-class="icon-other"></AIcon>
      <span v-show="true">1,234赞</span>
      <AIcon icon-class="icondisagree" other-class="icon-other"></AIcon>
      <span v-show="true">4反对</span>
      <AIcon icon-class="iconshang" other-class="icon-other"></AIcon>
      <span v-show="true">赞赏</span>
    </div>
    <BackTop :bottom="80"></BackTop>
  </Layout>
</template>

<script>
import { Layout, Row, Col, BackTop, Divider, Dropdown, DropdownMenu, DropdownItem, Icon, Button, Page } from 'view-design'
import HomeHeader from '@/components/HomeHeader'
import AIcon from "./iconfont/AIcon";

export default {
  name: "Home",
  components: { Layout, HomeHeader, Row, Col, BackTop, AIcon, Divider, Dropdown, DropdownMenu, DropdownItem, Icon, Button, Page },
  data() {
    return {
      article: {
        id: 100,
        title: '标题1',
        author: 'freecity',
        authorUri: '',
        content: '最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...',
        category: 'JVM',
        pageviews: 12,
        comments: 8,
        uri: 'article/1',
        crtDate: new Date(2019,12,5).toDateString()
      },
      articles: [
        {
          id: 100,
          title: '标题1',
          author: 'freecity',
          authorUri: '',
          content: '最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...',
          category: 'JVM',
          pageviews: 12,
          comments: 8,
          uri: 'article/1',
          crtDate: new Date(2019,12,5).toDateString()
        },
        {
          id: 100,
          title: '标题1',
          author: 'freecity',
          authorUri: '',
          content: '最近习惯上了老是说无所谓。也不知道从什么时候开始，发现能让自己在乎的事情越来越少，天气的好坏、别人在说什么、在干什么，等等等等都觉得和自己好像没有什么关系。也许浮世的繁杂已经厌倦，觉得最近好疲倦，不想和人说什么，就喜欢自己静静的听歌，看着自己的心起起落落，任自己放纵着淡淡的思绪。突然觉得很轻松，当放...',
          category: 'JVM',
          pageviews: 12,
          comments: 8,
          uri: 'article/1',
          crtDate: new Date(2019,12,5).toDateString()
        }
      ],
      comments: [
        {
          id: 1
        },
        {
          id: 2
        }
      ],
      canPublishComment: true
    }
  },
  mounted() {

  },
  destroyed() {

  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.container
  width 1000px
  .content
    background-color #fff
    margin-bottom 24px
    .article
      padding 24px
      .title
        font-size 30px
        word-break break-word
        margin-bottom .5em
        color #404040
      .meta-top
        margin-bottom 32px
        font-size 13px
        display flex
        .profile
          img
            display: block
            border-radius: 50%
            border: 1px solid #eee
            min-width: 48px
            min-height: 48px
            width: 48px
            height: 48px
        .author
          font-size 16px
          font-weight 500
          margin-bottom 6px
          .concern
            padding 2px 9px
            font-size 12px
            margin-left 8px
            color #ec7259
            background-color #fff
            border 1px solid #ec7259
            border-radius 50px
            cursor pointer
            white-space nowrap
            transition all .2s cubic-bezier(.645,.045,.355,1)
          :focus
            outline none
          :hover
            background-color #fef8f7
      .text
        font-weight 400
        line-height 1.8
        margin-bottom 20px
      .agree
        display flex
        align-items center
        color #969696
        .a-icon
          font-size 28px
          margin-right 8px
        .circle-warp
          width 30px
          height 30px
          align-items center
          color #969696
          border 1px solid #eee
          border-radius 50%
          font-size 18px
          cursor pointer
        span
          margin-right 12px
      .meta-bottom
        display flex
        .profile
          img
            display: block
            border-radius: 50%
            border: 1px solid #eee
            min-width: 48px
            min-height: 48px
            width: 48px
            height: 48px
        .author
          font-size 16px
          font-weight 500
        .concern
          width 50px
          height 30px
          position relative
          left 80px
          top 10px
          font-size 14px
          color #ec7259
          background-color #fff
          border 1px solid #ec7259
          border-radius 50px
          cursor pointer
          white-space nowrap
          transition all .2s cubic-bezier(.645,.045,.355,1)
        :focus
          outline none
        .info
          color #969696
          span
            margin-right 12px
          span:last-child
            margin-right 0
    .advertise
      margin-bottom 10px
    .comment
      padding 24px
      background-color #fff
      border-radius 4px
      margin-bottom 10px
      .edit
        display flex
        img
          display: block
          width: 48px
          height: 48px
          min-width: 48px
          min-height: 48px
          border-radius: 50%
          border: 1px solid #eee
          margin-right 10px
        .input
          width 100%
          margin-top 0
          margin-bottom 48px
          font-size 16px
          textarea
            padding 12px 16px
            width 100%
            height 90px
            font-size 13px
            border 1px solid #eee
            border-radius 4px
            background-color #fafafa
            resize none
            display inline-block
            vertical-align top
            outline-style none
          .publish
            display flex
            justify-content space-between
            margin-top 16px
            font-size 14px
            color #969696
            .publish-btn
              display inline-flex
              margin-right 10px
              padding 4px 12px
              border:1px solid #ec7259
              outline none
              color #fff
              background-color #ec7259
              border-radius 50px
              cursor pointer
              white-space nowrap
              transition all .2s cubic-bezier(.645,.045,.355,1)
            [disabled]
              background-color #eda189
              cursor not-allowed
            .cancel-btn
              display inline-flex
              padding 4px 12px
              border:1px solid #999
              outline none
              color #999
              background-color #fff
              border-radius 50px
              cursor pointer
              white-space nowrap
              transition all .2s cubic-bezier(.645,.045,.355,1)
      .all-comment
        display flex
        height 20px
        line-height 20px
        font-size 18px
        font-weight 500
        justify-content space-between
        align-items center
        margin-bottom 16px
        padding-left 12px
        border-left 4px solid #ec7259
        .head
          span
            margin-right 6px
          span:last-child
            font-size 14px
            font-weight normal
            margin-right 0
        .sorter
          display flex
      .comment-group
        margin-top 30px
        margin-bottom 30px
        .comment-item
          display flex
          align-items flex-start
          .profile
            img
              display: block
              border-radius: 50%
              border: 1px solid #eee
              min-width: 48px
              min-height: 48px
              width: 48px
              height: 48px
          .comment-info
            margin-left 10px
            margin-bottom 20px
            .comment-user
              display flex
              a
                color inherit
                text-decoration none
                background-color transparent
                outline none
                cursor pointer
            .comment-meta
              margin-top 2px
              font-size 12px
              color #969696
              span
                margin-right 6px
            .comment-text
              margin-top 10px
              font-size 16px
              line-height 1.5
              word-break break-word
            .comment-operate
              display block
              justify-content space-between
              align-items center
              margin-top 12px
              font-size 15px
              span
                cursor pointer
                margin-right 16px
                color #b0b0b0
                .icon-other
                  margin-right 6px
              span:hover
                color #9c9c9c
              span:first-child:hover
                  color #ec7259
              span:last-child
                visibility hidden
                float right
                margin-right 0
            :hover
              span:last-child
                visibility visible
            .comment-reply
              padding 20px 0 16px
              border-top 1px solid #eee
              .reply-meta
                display flex
                .profile
                  img
                    display: block
                    border-radius: 50%
                    border: 1px solid #eee
                    min-width: 48px
                    min-height: 48px
                    width: 48px
                    height: 48px
                .user
                  display block
                  margin-left 10px
                  a
                    color inherit
                    text-decoration none
                    background-color transparent
                    outline none
                    cursor pointer
                  span
                    font-size 12px
                    color #969696
              .reply-text
                margin-top 10px
                font-size: 16px
                line-height 1.5
                word-break break-word
              .reply-operate
                display block
                justify-content space-between
                align-items center
                margin-top 12px
                font-size 15px
                span
                  cursor pointer
                  margin-right 16px
                  color #b0b0b0
                  .icon-reply
                    margin-right 6px
                span:hover
                  color #9c9c9c
                span:last-child
                  visibility hidden
                  float right
                  margin-right 0
              :hover
                span:last-child
                  visibility visible
  .aside
    display block
    .advertise
      position relative
      margin-bottom 10px
      background-color #fff
      border-radius 4px
      overflow hidden
      cursor pointer
      .ad-img
        width 100%
        vertical-align middle
        border-style none
      .signature
        position absolute
        bottom 0
        right 0
        font-size 12px
        padding 2px 6px
        background-color rgba(0,0,0,.5)
        color #fff
    .author
      margin-bottom 10px
      padding 16px
      background-color #fff
      border-radius 4px
      .info
        display flex
        font-size 13px
        .profile
          img
            display: block
            border-radius: 50%
            border: 1px solid #eee
            min-width: 48px
            min-height: 48px
            width: 48px
            height: 48px
        .name
          font-size 16px
          font-weight 500
          margin-bottom 6px
          .concern
            padding 2px 9px
            font-size 12px
            margin-left 8px
            color #ec7259
            background-color #fff
            border 1px solid #ec7259
            border-radius 50px
            cursor pointer
            white-space nowrap
            transition all .2s cubic-bezier(.645,.045,.355,1)
          :focus
            outline none
          :hover
            background-color #fef8f7
    .article-item
      margin-top 16px
      background-color #fff
      .title
        font-size 14px
        line-height 22px
        color #2d2d2d
        margin-bottom 4px
        overflow hidden
        text-overflow ellipsis
        a
          color inherit
          text-decoration none
          background-color transparent
          outline none
          cursor pointer
        a:hover
          text-decoration underline
      .read-count
        font-size 12px
        color #969696
    .recommended
      margin-bottom 10px
      padding 16px
      background-color #fff
      border-radius 4px
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
.left-float
  position fixed
  top 40vh
  left calc((100vw - 1000px)/2 - 78px)
  text-align center
  .icon-other
    display flex
    width 40px
    height 40px
    margin 16px auto 0
    align-items center
    cursor pointer
    color #969696
    border 1px solid #eee
    border-radius 50%
    font-size 18px
  :first-child
    margin-top 0
</style>
