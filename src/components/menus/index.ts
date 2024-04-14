import menus from './src/index.vue'
import menusInit from './src/index.tsx'
import { App } from 'vue'

//让这个组件以use形式使用
export default {
    install (app: App) {
        app.component('m-menus',menus)
        app.component('m-menus-init',menusInit)
    }
}