<template>
    <div>
        <el-popover placement="bottom" title="" :width="300" trigger="click"
        content="123"
        >
        <slot>这是内容</slot>
        <template #reference>
            <el-badge :value="value" class="item" :max="max" :isDot="isDot">
                <component :is="icon"></component>
            </el-badge>
        </template>
        </el-popover>
     
    </div>
</template>
<script lang="ts" setup>
let props = defineProps({
    icon: {
        type: String,
        default: 'Bell'
    },
    value: {
        type: [String,Number],
        default:''
    },
    max: {
        type: Number
    },
    isDot: {
        type: Boolean,
        default: false
    },
    
})
</script>

<style lang="scss" scoped>
svg {
  width: 1rem;
  height: 1rem;
}
</style>