<template>
    <m-notification :value="50" :max="30"  >
        <template #default>
            <m-list @clickAction="clickAction" @clickItem="clickItem" :list="list" :actions="actions"></m-list>
        </template>
    </m-notification>
    <m-notification icon="SuccessFilled"></m-notification>
</template>
<script lang="ts" setup>
import {list,actions} from '../../views/notification/data'

let clickItem = (val: any) => {
    console.log(val);
    
}

let clickAction = (val:any) => {
    console.log(val);
    
}

</script>

<style lang="scss" scoped>

</style>