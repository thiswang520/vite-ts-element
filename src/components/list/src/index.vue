<template>
  <div  class="list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(item,index) in list" :key="index"
      :label="item.title"
      >
      <el-scrollbar max-height="300px">
        <div class="container" @click="clickItem(item1,index1)" v-for="(item1,index1) in item.content" :key="index1">
        <div class="avatar" v-if="item1.avatar">
          <el-avatar size="small" :src="item1.avatar"></el-avatar>
        </div>
        <div class="content">
          <div v-if="item1.title" class="title">
            <div>{{ item1.title }}</div>
            <el-tag v-if="item1.tag" :type="item1.tagType">{{ item1.tag }}</el-tag>
          </div>
          <div v-if="item1.desc">{{ item1.desc }}</div>
          <div v-if="item1.time" class="time">{{ item1.time }}</div>
        </div>
        </div>
        <div class="actions">
          <div class="a-item" @click="clickAction(action,i)" :class="{'border': i !== actions.length}" v-for="(action, i) in actions" :key="i">
            <div class="a-icon">
              <component :is="action.icon"></component>
            </div>
            <div class="a-text">{{ action.text }}</div>
          </div>
        </div>
      </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import {PropType} from 'vue'
import ListItem,{ListOptions,ActionOptions} from './types'
let props = defineProps({
  //列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  //操作内容
  actions: {
    type:  Array as PropType<ActionOptions[]>,
    default: () => []
  }
})
let emits = defineEmits(['clickItem','clickAction'])
let clickItem = (item: ListItem,index: number) => {
  emits('clickItem',{item,index})
}
let clickAction= (item: ActionOptions,index: number) => {
  emits('clickAction',{item,index})
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    background: #e6f6ff;
  }
  .avatar{
    flex: 1;
  }
  .content{
    flex: 3;
    .time{
      font-size: 12px;
      color: #999;
      margin-top: 8px;
    }
    .title{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.actions{
    display: flex;
    height: 50px;
    align-items: center;
    border-top: 1px solid #eee;
    cursor: pointer;
    .a-item{
      height: 50px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .a-icon {
        margin-right: 4px;
        position: relative;
        top: 3px;
      }
    }
  }
  .border {
    border-right: 1px solid #eee;
  }
</style>