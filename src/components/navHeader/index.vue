<template>
   <div class="header">
        <span @click="istotg">
            <ArrowRight v-if="isCollapse"/>
            <ArrowLeft v-else/>
        </span>
   </div>
</template>
<script lang="ts" setup>
let props = defineProps<{
    isCollapse: boolean
}>()
let emits = defineEmits('update:isCollapse')
let istotg = () => {
    emits('update:isCollapse', !props.isCollapse)
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    margin-top: 20px;
}


</style>