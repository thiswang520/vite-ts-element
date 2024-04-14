<template>
        <el-menu :default-active="defaultActive" :router="router">
            <template v-for="(item,index) in data" :key="index">
                <el-menu-item v-if="!item[children] || !item[children].length" :index="index">
                    <component :is="item.icon"></component>
                    <span>{{ item[name] }}</span>
                </el-menu-item>
                <el-sub-menu v-if="item[children] && item[children].length" :index="index">
                    <template #title>
                        <component :is="item[icon]"></component>
                        <span>{{ item[name] }}</span>
                    </template>
                    <el-menu-item v-for="(item1,index1) in item.children" :key="index1" >
                        <component :is="item1[icon]"></component>
                        <span>{{ item1[name] }}</span>
                    </el-menu-item>
                </el-sub-menu>
            </template>
        </el-menu>
</template>
<script lang="ts" setup>
import {MenusItem} from './types'
import { PropType } from 'vue';
let props = defineProps({
    data: {
        type: Array as PropType<any[]>,
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
})


</script>

<style lang="scss" scoped>

</style>