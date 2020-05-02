<template>
  <Layout style="background-color: #f1f1f1;">
    <Row>
      <Col class="icp">
        豫ICP备19016048号 - <a>公网安备-待备案</a>
      </Col>
      <Divider class="visitor" style="margin-top: 8px;">
        <span>©2020 FreeCity</span>
        <span>访问量: {{ visitCounts }}</span>
      </Divider>
    </Row>
  </Layout>
</template>

<script>
  import { Layout, Row, Col, Divider } from 'view-design'

  export default {
    name: "HomeFooter",
    components: { Layout, Row, Col, Divider },
    data() {
      return {
        fullYear: new Date().getFullYear(),
        visitCounts: 0
      }
    },
    methods: {
      queryVisitCounts() {
        this.visitCounts = 879
      }
    },
    mounted() {
      this.queryVisitCounts()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .icp
    text-align center
    margin-top 8px
    color #c8c8c8
    font-size 14px
    a
      text-decoration none
      color #c8c8c8
    :hover
      color #2f2f2f
      text-decoration underline
  .visitor
    font-size 14px
    span
      color #969696
      margin-right 8px
      :last-child
        margin-right 0
</style>
