<template>
  <div style="display: flex">
    <div style="margin-right: 40px; width: 300px">
      <el-time-select
        v-model="startTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      >
      </el-time-select>
    </div>
    <div style="margin-right: 40px; width: 300px">
      <el-time-select
        :disabled="endTimedis"
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        v-bind="$attrs.endOptions"
      >
      </el-time-select>
    </div>
  </div>
</template>
  <script lang="ts" setup>
import { ref, watch } from "vue";
//开始时间
let startTime = ref<string>("");
//结束时间
let endTime = ref<string>("");

let endTimedis = ref<Boolean>(true);

let emits = defineEmits(["startChange", 'endChange']);

let props = defineProps({
  //开始时间占位符
  startPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  endPlaceholder: {
    type: String,
    default: "请选择结束时间",
  },
  //开始时间初始化选择
  startTimeStart: {
    type: String,
    default: "08:00",
  },
  startStep: {
    type: String,
    default: "00:30",
  },
  //开始时间结束选择
  startTimeEnd: {
    type: String,
    default: "24:00",
  },
  endTimeStart: {
    type: String,
    default: "08:00",
  },
  endStep: {
    type: String,
    default: "00:30",
  },
  //开始时间结束选择
  endTimeEnd: {
    type: String,
    default: "24:00",
  },
});

watch(
  () => startTime.value,
  (val) => {
    if (val === "" || val === undefined) {
        endTime.value = ""
        endTimedis.value = true
    }
    else {
      endTimedis.value = false;
      emits("startChange", val);
    }
  }
);
watch(
  () => endTime.value,
  (val) => {
    if(val !== ''){
        emits('endChange',{
            startTime: startTime.value,
            endTime: val
        })
    }
  }
);
</script>
  <style lang="scss" scoped>
</style>