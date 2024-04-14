<template>
        <el-button @click="handleClick" type="primary">
            <slot></slot>
        </el-button>
        <div class="m-choose-incon-body">
            <el-dialog :title="title" v-model="dialogVisible">
         <div class="container">
            <div class="item" 
            @click="clickItem(item)"
            v-for="(item,index) in Object.keys(ElementPlusIconsVue)" 
            key="index">
            <div class="text">
                <el-icon> 
                    <component :is="item" />
                </el-icon>
            </div>
            <div class="icon">{{ item }}</div>
            </div>
        </div>  
        </el-dialog>
        </div>
</template>

<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { useCopy } from '../../../hooks/useCopy/index'
import {ref} from 'vue'
let props = defineProps<{
    // 弹出框标题
    title: string,
    // 控制弹出框显示
    visible: boolean
}>();
let emits = defineEmits(['update:dialogVisible'])
let dialogVisible = ref(props.visible)

let clickItem = (item: string) => {
    console.log(1111,item);
    
    useCopy(item)
}

//点击按钮显示
let handleClick = () => {
    dialogVisible.value =   !dialogVisible.value
    emits('update:dialogVisible', !dialogVisible.value)
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.item {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    height: 7rem;
}
.text {
    font-size: 2rem;
}
.icon {
    flex: 1;
}
svg{
    width: 5rem;
    height: 5rem;
}

</style>
