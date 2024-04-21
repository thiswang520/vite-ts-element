<template>
    <el-form :validate-on-rule-change="false" v-bind="$attrs" :model="model" :rules="rules">
        <el-form-item
        :label="item.label"
        v-for="(item,index) in options"
        :key="index"
        :prop="item.prop"
        >
        <component v-model="model[item.prop!]" v-bind="item.attrs" :is="`el-${item.type}`"></component>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import cloneDeep  from 'lodash/cloneDeep';
import { PropType,ref ,onMounted} from 'vue';
import { FormOptions } from '../type/types';
let props = defineProps({
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true
    }
})
let model = ref<any>({})
let rules = ref<any>({})

onMounted(() => {
    let m: any = {}
    let r: any = {}

    props.options.map((item: FormOptions) => {
        m[item.prop!] = item.value
        r[item.prop!] = item.rules
    })
    model.value =  cloneDeep(m)
    rules.value =  cloneDeep(r)
    
})
  </script>
  <style lang="scss" scoped>
  
  </style>