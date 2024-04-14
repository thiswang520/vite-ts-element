<template>
    <div>
        <div class="flex">
            <!-- <div>
                <m-trend text="营业额1" type="up" upIconColor="aqua">
                    营业额
                </m-trend>
            </div>
            <div>
                <m-trend text="销售额" type="down"></m-trend>
            </div> -->
            <m-trend text="销售额" type="up" reverseColor upIconColor="aqua" upIcon="CaretTop"></m-trend>
            <m-trend text="销售额" type="down" TextColor="red" downIcon="CaretBottom"></m-trend>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.flex{
    display: flex;
    div{
        margin-right: 20px;
    }
}
</style>