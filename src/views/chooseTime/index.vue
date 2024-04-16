<template>
    <m-choose-time @startDate="startDate" @endDate="endDate" :startOptions="startOptions" @startChange="startChange" @endChange="endChange"></m-choose-time>
</template>
  <script lang="ts" setup>
  interface endValue {
    startTime: string,
    endTime: string
  }
  let startChange = (val: string) => {
    console.log(val); 
  }
  let endChange = (val: endValue) => {
    console.log(val);
    
  }

  let startDate = (val: Date) => {
    console.log(val);
  }
  let endDate = (val: Date) => {
    console.log(val);
    
  }
  
let startOptions = {
    color: 'red',
    disabled: false
}
  </script>
  <style lang="scss" scoped>
  
  </style>