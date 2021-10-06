import { createApp } from 'vue'
import { setupAntd } from '@/plugins/antd'
import router from './router'
import store, { key } from './store'
import App from './App.vue'
import './permission'

const app = createApp(App)

// 注册全局常用的ant-design-vue组件
setupAntd(app)

app.use(store, key).use(router).mount('#app')
