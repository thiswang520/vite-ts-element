<template>
    <el-form v-if="model" :validate-on-rule-change="false" v-bind="$attrs" :model="model" :rules="rules">
        <template  v-for="(item,index) in options" :key="index">
            <el-form-item
            v-if="!item.children || !item.children!.length"
            :label="item.label"
            :prop="item.prop"
            >
            <component   :placeholder="item.placeholder" v-model="model[item.prop!]" v-bind="item.attrs" :is="`el-${item.type}`"></component>
            </el-form-item>
            <el-form-item v-if="item.children && item.children.length"
            :label="item.label"
            :prop="item.prop"
            :placeholder="item.placeholder"
            >
            <component  :placeholder="item.placeholder" v-model="model[item.prop!]" v-bind="item.attrs" :is="`el-${item.type}`">
                <component 
                v-for="(child,i) in item.children"
                :key="i"
                :is="`el-${child.type}`"
                :label="child.label"
                :value="child.value"
                ></component>
            </component>
            </el-form-item>
        </template>
    </el-form>
</template>
<script lang="ts" setup>
import cloneDeep  from 'lodash/cloneDeep';
import { PropType,ref ,onMounted, watch} from 'vue';
import { FormOptions } from '../type/types';
let props = defineProps({
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true
    }
})
let model = ref<any>(null)
let rules = ref<any>(null)
//初始化表单的方法
let initForm = () => {
    if(props.options && props.options.length){
        let m: any = {}
        let r: any = {}
        props.options.map((item: FormOptions) => {
            m[item.prop!] = item.value
            r[item.prop!] = item.rules
        })
        model.value =  cloneDeep(m)
        rules.value =  cloneDeep(r)
    }
}
onMounted(() => {
    initForm()
})
//监听父组件传的值
watch(() => props.options, () => {
    initForm()
},{deep: true})
  </script>
  <style lang="scss" scoped>
  
  </style>