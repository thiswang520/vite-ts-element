import progress from './src/index.vue'
import { App } from 'vue'

//让这个组件以use形式使用
export default {
    install (app: App) {
        app.component('m-progress',progress)
    }
}