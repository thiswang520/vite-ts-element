<template>
    <div>
        <m-choose-city @changge="changge" @changeProvince="changeProvince"></m-choose-city>
    </div>
</template>
  <script lang="ts" setup>
  let changge = (val) => {
    console.log(val);
    
  }
  let changeProvince = (val) => {
    console.log(val);
    
  }
  </script>
  <style lang="scss" scoped>
  
  </style>