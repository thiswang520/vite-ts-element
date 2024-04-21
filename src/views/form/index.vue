<template>
    <m-form label-width="100px" 
    :options="options"
    multiple
    @on-change="handleChage"
    @before-upload="handleBeforUpload"
    @on-preview="handlePreview"
    @on-remove="handleRemove"
    @before-remove="berforeRemove"
    @on-success="handleSuccess"
    @on-exceed="handleExceed"
    >
        <template #uploadArea>
            <el-button size="small" type="primary">Click to upload</el-button>
        </template>
        <template #uploadTip>
            <div style="color: #ccc; font-size: 12px;">jpg/png files</div>
        </template>
        <template #action="scope">
            <el-button type="primary" @click="submitForm(scope)">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
        </template>
    </m-form>
</template>
<script lang="ts" setup>
import { FormInstance } from '../../components/form/type/types'
import {ElMessage, ELMessageBox} from 'element-plus'
interface Scope {
    form: FormInstance,
    model: any
}
let submitForm = (scope: Scope) => {
    scope.form.validate((valid) => {
        if(valid) {
            console.log(scope.model)
            ElMessage.success('提交成功')
        } else {
            ElMessage.error(('表单填写错误，请检查'));   
        }
    })
}
let resetForm = (scope: Scope) => {
    scope.form.resetFields()
}
 let options: FormOptions[] = [
    {
        type: 'input',
        value: '',
        label: '用户名',
        placeholder: '请输入用户名',
        prop: 'username',
        rules: [
            {
                required: true,
                message: '用户名不能为空',
                trigger: 'blur'
            },
            {
                min: 2,
                max:6,
                message: '用户名在2-6',
                trigger: 'blur'
            }
        ],
        attrs: {
            clearable: true,
        }
    },
    {
        type: 'input',
        value: '',
        label: '密码',
        placeholder: '请输入密码',
        prop: 'password',
        rules: [
            {
                required: true,
                message: '密码不能为空',
                trigger: 'blur'
            },
            {
                min: 6,
                max: 15,
                message: '密码在6-16位',
                trigger: 'blur'
            }
        ],
        attrs: {
            showPassword: true,
        }
    },
    {
        type:'select',
        value: '',
        placeholder: '请选择职位',
        prop: 'role',
        label: '职位',
        attrs: {
            style: {
            width: '50%'
        },
        },
        rules: [
            {
                required: true,
                message: '职位不能为空',
                trigger: 'blur'
            },   
        ],
        children: [
            {
                type: 'option',
                label: '经理',
                value: '1'
            },
            {
                type: 'option',
                label: '主管',
                value: '2'
            },
            {
                type: 'option',
                label: '员工',
                value: '3'
            }
        ]
    },
    {
        type: 'checkbox-group',
        value: [],
        prop: 'like',
        label: '爱好',
        rules: [
            {
                required: true,
                message: '爱好不能为空',
                trigger: 'blur'
            },   
        ],
        children: [
            {
                type: 'checkbox',
                label: '足球',
                value: '足球'
            },
            {
                type: 'checkbox',
                label: '篮球',
                value: '篮球'
            },
            {
                type: 'checkbox',
                label: '排球',
                value: '排球'
            }
        ]
    },
    {
        type: 'radio-group',
        value: '',
        prop: 'gender',
        label: '性别',
        rules: [
            {
                required: true,
                message: '性别不能为空',
                trigger: 'blur'
            },   
        ],
        children: [
            {
                type: 'radio',
                label: '男',
                value: 'male'
            },
            {
                type: 'radio',
                label: '女',
                value: 'female'
            },
            {
                type: 'radio',
                label: '保密',
                value: 'not'
            }
        ]
    },
    {
        type: 'upload',
        prop: 'pic',
        label: '上传',
        uploadAttrs: {
            action: 'https://jsonplaceholder.typicode.com/posts/',
            multiple: true,
            limit: 2
        },
        rules: [
            {
                required: false,
                message: '图片不能为空',
                trigger: 'blur'
            },   
        ],
    }
 ]
 let handleChage = (val: any) => {
    console.log('handleChage');
    console.log(val);
 }
 let handleBeforUpload = (val: any) => {
    console.log('handleBeforUpload');
    console.log(val);
 }
 let handlePreview = (val: any) => {
    console.log('handlePreview');
    console.log(val);
 }
 let handleRemove = (val: any) => {
    console.log('handleRemove');
    console.log(val);
 }
 let berforeRemove = (val: any) => {
    console.log('berforeRemove');
    console.log(val);
 }
 let handleSuccess = (val: any) => {
    console.log('handleSuccess');
    console.log(val);
 }
 let handleExceed = (val: any) => {
    console.log('handleSuccess');
    console.log(val);
 }
  </script>
  <style lang="scss" scoped>
  
  </style>