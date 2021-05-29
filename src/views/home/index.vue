<template>
  <div class="home">
    <div ref="chart" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script>
import { propNames } from '@/constant'

export default {
  name: 'Home',
  data() {
    return {
      chart: null
    }
  },
  computed: {
    navCollapse: function () {
      return this.$store.getters.events[propNames.navCollapse]
    }
  },
  watch: {
    navCollapse(newValue, oldValue) {
      setTimeout(() => this.chart.resize(), 280)
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.chart = this.$echarts.init(this.$refs.chart)
      this.chart.setOption({
        backgroundColor: '#2c343c',
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ],
            roseType: 'angle',
            label: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        ]
      })
      window.addEventListener('resize', () => {
        this.chart.resize()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100%
</style>
