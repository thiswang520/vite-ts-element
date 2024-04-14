<template>
    <div class="chooseArea">
        <el-select clearable placeholder="请选择省份" v-model="province">
            <el-option v-for="item in allAreas" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select clearable :disabled="!province" style="margin: 0 10px" placeholder="请选择城市" v-model="city">
            <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select clearable :disabled="!province ||  !city" placeholder="请选择区域" v-model="area">
            <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
    </div>
</template>
<script lang="ts" setup>
import areas from '../../../components/chooseArea/lib/pca-code.json'
import {ref, watch} from 'vue';

export interface AreaItem {
    code: string;
    name: string;
    children?: AreaItem[]
}
export interface Data {
    code: string;
    name: string;
}

let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
let allAreas = ref(areas)

let selectCity = ref<AreaItem>([])
let selectArea = ref<AreaItem>([])
let emits = defineEmits(['change'])

watch(() => province.value, val => {
    if(val) {
        let cities = allAreas.value.find(item  => item.code === province.value)!.children
        selectCity.value = cities
    }
    city.value = ''
    area.value = ''
})

watch(() => city.value, val => {
    if(val) {
        let area = selectCity.value.find(item  => item.code === city.value)!.children!
        selectArea.value = area
    }
    area.value = ''
})

watch(() => area.value, val => {
   if(val) {
    let provinceData:Data = {
        code: province.value,
        name: province.value && allAreas.value.find(item  => item.code === province.value)!.children
    }
    let cityData:Data = {
        code: city.value,
        name:city.value &&  selectCity.value.find(item  => item.code === city.value)!.children!
       
    }
    let areaData:Data = {
        code: area.value,
        name: area.value && selectArea.value.find(item  => item.code === val)!.children!  
    } 
    emits('change', {
        province: provinceData,
        city: cityData,
        area: areaData
    })
   }
})

</script>

<style lang="scss" scoped>
.chooseArea{
    display: flex;
}
</style>