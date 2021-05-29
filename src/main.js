import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './plugins/element'
import icon from './plugins/icon'
import echart from './plugins/echart'
import '@/assets/css/index.styl'

const app = createApp(App)
element(app)
icon(app)
echart(app)
app.use(store).use(router).mount('#app')
