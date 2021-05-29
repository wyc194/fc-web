import Icon from '@/components/icon'

const req = require.context('@/assets/icons', false, /\.svg$/)
req.keys().map(req)

export default (app) => {
  app.component('Icon', Icon)
}
