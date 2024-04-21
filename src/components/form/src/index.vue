<template>
    <el-form ref="form" v-if="model" :validate-on-rule-change="false" v-bind="$attrs" :model="model" :rules="rules">
        <template  v-for="(item,index) in options" :key="index">
            <el-form-item
            v-if="!item.children || !item.children!.length"
            :label="item.label"
            :prop="item.prop"
            >
            <component  v-if="item.type !== 'upload'" :placeholder="item.placeholder" v-model="model[item.prop!]" v-bind="item.attrs" :is="`el-${item.type}`"></component>
            <el-upload v-else
            v-bind="item.uploadAttrs"
            :on-preview="onPreview"
            :on-remove="onRemove"
            :on-success="onSuccess"
            :on-error="onError"
            :on-progress="onProgress"
            :on-change="onChange"
            :before-upload="beforeUpload"
            :before-remove="beforeRemove"
            :http-request="httpRequest"
            :on-exceed="onExceed"
            >
                <slot name="uploadArea"></slot>
                <slot name="uploadTip"></slot>
            </el-upload>
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
        <el-form-item>
                <slot name="action" :form="form" :model="model"></slot>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import cloneDeep  from 'lodash/cloneDeep';
import { PropType,ref ,onMounted, watch} from 'vue';
import { FormOptions,FormInstance } from '../type/types';

let emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'before-upload', 'before-remove', 'on-exceed'])

let props = defineProps({
    //表单的配置项
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true
    },
    //用户自定义上传的方法
    httpRequest: {
        type: Function
    }
})
let model = ref<any>(null)
let rules = ref<any>(null)
let form = ref<FormInstance | null>()
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

// 上传组件的所有方法
let onPreview = (file: File) => {
  emits('on-preview', file)
}
let onRemove = (file: File, fileList: FileList) => {
  emits('on-remove', { file, fileList })
}
let onSuccess = (response: any, file: File, fileList: FileList) => {
  // 上传图片成功 给表单上传项赋值
  let uploadItem = props.options.find(item => item.type === 'upload')!
  model.value[uploadItem.prop!] = { response, file, fileList }
  emits('on-success', { response, file, fileList })
}
let onError = (err: any, file: File, fileList: FileList) => {
  emits('on-error', { err, file, fileList, })
}
let onProgress = (event: any, file: File, fileList: FileList) => {
  emits('on-progress', { event, file, fileList })
}
let onChange = (file: File, fileList: FileList) => {
  emits('on-change', { file, fileList })
}
let beforeUpload = (file: File) => {
  emits('before-upload', file)
}
let beforeRemove = (file: File, fileList: FileList) => {
  emits('before-remove', { file, fileList })
}
let onExceed = (files: File, fileList: FileList) => {
  emits('on-exceed', { files, fileList })
}

</script>
  <style lang="scss" scoped>
  
  </style>