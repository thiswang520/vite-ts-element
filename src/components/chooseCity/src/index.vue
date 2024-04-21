<template>
    <el-popover
        placement="bottom-start"
        title=""
        :width="600"
        trigger="click"
        conten="内容"
        v-model:visible="visible"
    >
    <template #reference>
        <div class="result">
            <div>{{ result }}</div>
            <div :class="{'rotate': visible}">
                <ArrowDown />
            </div>
        </div>
    </template>
    <div class="container">
        <el-row>
            <el-col :span="6">
                <el-radio-group v-model="radioValue" size="small">
                    <el-radio-button label="按城市"></el-radio-button>
                    <el-radio-button label="按省份"></el-radio-button>
                </el-radio-group>
            </el-col>
            <el-col style="margin-top: 2px" :span="16">
                <el-select  @change="changeSelect"  :filter-method="filterMethod" placeholder="请搜索城市" v-model="selectValue" filterable size="small">
                    <el-option v-for="item in Options"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                    >
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <template v-if="radioValue === '按城市'">
            <div class="city">
                <div class="city-item" @click="clickChat(item)" v-for="(item,index) in Object.keys(cities)" :key="index">{{ item }}</div>
            </div>    
            <el-scrollbar max-height="300px">
            <template v-for="(value,key) in cities" :key="key">
                <el-row  style="margin-bottom: 10px" :id="key">
                    <el-col :span="2">{{ key }}:</el-col>
                    <el-col :span="20" class="city-name">
                        <div @click="clickItem(item)" class="city-name-item" v-for="(item,index) in value" :key="item.id">
                            <div>{{ item.name }}</div>
                        </div>
                    </el-col>
                </el-row>
            </template>

        </el-scrollbar>
        </template> 
        <template v-else>
            <div class="provinces">
                <div class="provinces-item" @click="clickChat(item)" v-for="(item,index) in Object.keys(cities)" :key="index">{{ item }}</div>
            </div>    
            <el-scrollbar max-height="300px">
            <template v-for="(item, index) in Object.values(provinces)" :key="index">
                <template v-for="(item1, index1) in item" :key="index1">
                <el-row style="margin-bottom: 10px;" :id="item1.id">
                    <el-col :span="3">{{ item1.name }}:</el-col>
                    <el-col :span="21" class="province-name">
                    <div
                        class="province-name-item"
                        v-for="(item2, index2) in item1.data"
                        :key="index2"
                    >
                        <div @click="clickProvince(item2)">{{ item2 }}</div>
                    </div>
                    </el-col>
                </el-row>
            </template>
          </template>
        </el-scrollbar>
        </template> 
     
    </div>
    </el-popover>
</template>
<script lang="ts" setup>
import { Options } from 'element-plus/lib';
import city from '../lib/city.ts'
import province from '../lib/province.json'
import {ref, onMounted,watch} from 'vue'
import {City} from './types'
    //分发事件
    let emits = defineEmits(['changge','changeProvince'])

  let result = ref<string>('请选择')
  let visible = ref<Boolean>(false)
  let radioValue = ref<string>('按省份')
  let selectValue = ref<string>('')
  let cities = ref(city.cities)
  let provinces = ref(province)
  let allCity = ref<City[]>([])
  let serachValues = ref<string>('')
  //下来显示城市的数据

  let Options = ref<City[]>([])
  let clickItem = (item: City) => {
    result.value = item.name
    visible.value = false
    emits('changge',item)
  }
  let clickChat = (item: string) => {
    let el = document.getElementById(item)
    if(el) el.scrollIntoView()
  }
  let clickProvince = (item: string) => {
  // 给结果赋值
  result.value = item
  // 关闭弹出层
  visible.value = false
  emits('changeProvince', item)
}
onMounted(() => {
    let values = Object.values(cities.value).flat(2)
    allCity.value = values
    Options.value = values
})
//自定义搜索过滤
let filterMethod = (val: string) => {
    serachValues.value = val
    let values = Object.values(cities.value).flat(2)
    if(val === '') {
        Options.value = values
    } else {
        if(radioValue.value === '按城市') {
            //中文和拼音一起过滤
            Options.value = values.filter(item => {
                return item.name.includes(val) || item.spell.includes(val)
            })
        }else {
            //中文过滤
            Options.value = values.filter(item => {
                return item.name.includes(val) 
            })
        }
    }
    
}
let changeSelect = (val: number) => {
    let city = allCity.value.find(item => item.id === val)!
    result.value = city.name
    if(radioValue.value === '按城市') {
        emits('changge',city)
    }else {
        emits('changeProvince',city.name)
    }
}
  </script>
  <style lang="scss" scoped>
  .result{
    display: flex;
    width: fit-content;
    cursor: pointer;
  }
  .rotate {
    transform: rotate(180deg);
  }
  svg{
    width: 20px;
    position: relative;
    top: 2px;
    margin-left: 4px;
    transition: all 0.25s linear;
  }
  .container{
    padding: 8px;
    align-items: center;
  }
  .city,.provinces{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    .city-item,.provinces-item {
        padding:3px 6px;
        margin-right: 8px;
        margin-bottom: 6px;
        border: 1px solid #eee;
        cursor: pointer;
    }
  }
  .city-name,.province-name {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .city-item,.province-name-item {
        margin-right: 6px;
        margin-bottom: 6px;
        cursor: pointer;
    }
  }
  </style>