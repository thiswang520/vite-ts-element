import { App } from 'vue'
import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import trend from './trend'
import notification from './notification'
import list from './list'
import menus from './menus'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseCity from './chooseCity'
import scroll from './scroll'
import form from './form'

const components = [
    chooseIcon,
    chooseArea,
    trend,
    notification,
    list,
    menus,
    progress,
    chooseTime,
    chooseCity,
    scroll,
    form
]

export default {
    install (app: App) {
        components.map(item => {
            app.use(item)
        })
    }
}