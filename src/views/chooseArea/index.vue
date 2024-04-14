<template>
    <m-chooes-area @change="changeArea"></m-chooes-area>
</template>
<script lang="ts" setup>

let changeArea = (val :any) => {
    console.log(val);
    
}

</script>

<style lang="scss" scoped>

</style>