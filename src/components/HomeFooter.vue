<template>
  <Layout style="background-color: #f1f1f1;">
    <Row>
      <Col style="text-align: center; margin-top: 8px;">
        <a style="text-decoration: none;">公网安备-待备案</a> - 豫ICP备19016048号
      </Col>
      <Divider style="font-size: 14px; margin-top: 8px;">©2020 FreeCity - 访问量: {{ visitCounts }}</Divider>
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
