<template>
     <!-- <m-menus name="a" index="b" icon="c"  :data="datas" defaultActive="1"></m-menus>  -->
    <m-menus-init name="a" index="b" icon="c" children="d" :data="datas" defaultActive="2"></m-menus-init>
</template>
<script lang="ts" setup>
let datas = [
    {
    a: '导航1',
    b: '1',
    c: 'ElemeFilled'
    },
    {
    a: '导航2',
    b: '2',
    c: 'ElemeFilled'
    },
    {
    a: '导航3',
    b: '3',
    c: 'ElemeFilled',
    d: [
        {
            a: '导航3-1',
            b: '3-1',
            c: 'ElemeFilled',
            d: [
                {
                    a: '导航3-1-1',
                    b: '3-1-1',
                    c: 'ElemeFilled',
                    d: [
                        {
                            a: '导航3-1-1-1',
                            b: '3-1-1-1',
                            c: 'ElemeFilled'
                        }
                    ]   
                }
            ]
        }
    ]
    }
]

</script>

<style lang="scss" scoped>

</style>