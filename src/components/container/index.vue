<template>
        <el-container>
            <el-aside width="auto">
                <nav-side :isCollapse="isCollapse"></nav-side>
            </el-aside>
        <el-container>
            <el-header>
                <nav-header v-model:isCollapse="isCollapse"></nav-header>
            </el-header>
            <el-main><router-view></router-view></el-main>
        </el-container>
        </el-container>
</template>
<script setup>
import NavHeader from '../../components/navHeader/index.vue'
import NavSide from '../../components/navSide/index.vue'
import { ref } from 'vue';
let isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.el-header {
    padding: 0;
    border-bottom: 1px solid #eee;
    align-items: center;
}
</style>