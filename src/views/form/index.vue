<template>
    <m-form label-width="100px" :options="options"></m-form>
</template>
  <script lang="ts" setup>
 let options: FormOptions[] = [
    {
        type: 'input',
        value: '',
        label: '用户名',
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
    }
 ]
  </script>
  <style lang="scss" scoped>
  
  </style>