<template>
    <div class="trend">
        <div class="text" :style="{color: textColor}">
            <slot v-if="solts.default"></slot>
            <div v-else>{{ text }}</div>
        </div>
        <div class="icon">
            <component :is="upIcon" :style="{color: !reverseColor? upIconColor: 'red'}" v-if="type === 'up'"></component>
            <component :is="downIcon"  :style="{color: !reverseColor?  dowmIconColor: 'black'}" v-else></component>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useSlots,computed} from 'vue'
let props = defineProps({
    //icon
    upIcon: {
        type: String,
        default: 'ArrowUp'
    },
    downIcon: {
        type: String,
        default: 'ArrowDown'
    },
    //标记上升和下降
    type: {
        type: String,
        default: 'up'
    },
    // 标记文字 1、父传过来 2、插槽
    text: {
        type: String,
        default: '文字'
    },
    //上升图标颜色
    upIconColor: {
        type: String,
        default: 'red'
    },
     //下升图标颜色
     dowmIconColor: {
        type: String,
        default: 'black'
    },
    // 颜色反转，只在默认颜色下生效
    reverseColor: {
        type: String,
        default: false
    },
    //文字颜色
    TextColor: {
        type: String,
        default: ''
    }
    
})
let solts = useSlots()
let textColor = computed(() => {
    return props.TextColor
})

</script>

<style lang="scss" scoped>
.trend{
    display: flex;
    align-items: center;
}
.text{
    font-size: 20px;
    margin-right: 5px;
}
.icon{
    svg {
    width: 1rem;
    height: 1rem;
    }
}
</style>