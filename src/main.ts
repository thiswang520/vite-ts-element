import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index.ts'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import mUI from './components'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
