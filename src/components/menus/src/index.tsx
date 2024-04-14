import { defineComponent, PropType, useAttrs } from "vue";
import { MenusItem } from "./types";
import Components from "../..";
export default defineComponent({
   props: {
        data: {
            type: Array as PropType<MenusItem[]>,
            required: true
        },
        defaultActive: {
            type: String,
            default: ''
        },
        router: {
            type:Boolean,
            default: false
        },
        name:{
            type: String,
            default: 'name'
        },
        index: {
            type: String,
            default: 'index'
        },
        icon: {
            type: String,
            default: 'icon'
        },
        children: {
            type: String,
            default: 'children'
        }
   },
   setup(props,ctx) {
    //封装渲染无线菜单层级方法
    let renderMenu = (data: any[]) => {
        return data.map((item: any) => {
            //每个菜单
            item.i = item.icon
            let slots = {
                title: () => {
                    return <>
                    <item.icon />
                    <span>{item[props.name]}</span>
                    </>
                }
            }
            //递归渲染
            if(item[props.children!] && item[props.children!].length) {
                return(
                    <el-sub-menu index={item[props.index]!} v-slots={slots}>
                        {renderMenu(item[props.children!])}
                    </el-sub-menu>
                )
            }
            //正常渲染
            return (
                <el-menu-item index={item[props.index]}>
                    <item.icon />
                    <span>{item[props.name]}</span>
                </el-menu-item>
            )
        })
    }
    return () => {
        return (
            <el-menu 
            default-active={props.defaultActive}
            router={props.router}
            >
                {renderMenu(props.data)}
            </el-menu>
        )
    }
   }
})