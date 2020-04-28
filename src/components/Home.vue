<template>
  <Layout>
    <HomeHeader></HomeHeader>
    <HomeContent></HomeContent>
    <HomeFooter></HomeFooter>
    <BackTop :bottom="80"></BackTop>
  </Layout>
</template>

<script>
import { Layout, BackTop } from 'view-design'
import HomeHeader from '@/components/HomeHeader'
import HomeContent from '@/components/HomeContent'
import HomeFooter from '@/components/HomeFooter'

export default {
  name: "Home",
  components: { Layout, HomeHeader, HomeFooter, BackTop, HomeContent },
  data() {
    return {

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
