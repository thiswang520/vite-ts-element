<template>
  <div style="display: flex">
  
    <div style="margin-right: 40px; width: 200px">
      <!-- 日期选择 -->
      <el-date-picker
        type="date"
        placeholder="请选择开始日期"
        :disabledDate="startDiableDate"
        v-model="startDate"
      ></el-date-picker>
    </div>
    <div style="margin-right: 40px; width: 200px">
      <el-date-picker
        type="date"
        placeholder="请选择结束日期"
        :disabledDate="endDiableDate"
        :disabled="endDis"
        v-model="endDate"
      ></el-date-picker>
    </div>
    <div style="margin-right: 40px; width: 200px">
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
    <div style="margin-right: 40px; width: 200px">
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
//开始日期
let startDate = ref<Date | null>();
//结束日期
let endDate = ref<Date | null>();

let endDis = ref(true);

//禁用开始日期
let startDiableDate = (time: Date) => {
  if (props.disableToday)
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 1;
};
//禁用结束日期
let endDiableDate = (time: Date) => {
  if (props.disableToday)
    return time.getTime() < startDate.value?.getTime() + 1000 * 60 * 60 * 1;
};

watch(
  () => startDate.value,
  (val) => {
    if (!val) {
      endDate.value = null;
      endDis.value = true;
    } else {
      emits("startDate", val);
      endDis.value = false;
    }
  }
);
watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emits("endDate", {
        startDate: startDate.value,
        endDate: val,
      });
    }
  }
);

//开始时间
let startTime = ref<string>("");
//结束时间
let endTime = ref<string>("");

let endTimedis = ref<Boolean>(true);

let emits = defineEmits(["startChange", "endChange", "startDate", "endDate"]);

let props = defineProps({
  //默认选择今天之前的日期
  disableToday: {
    type: Boolean,
    default: true,
  },
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
      endTime.value = "";
      endTimedis.value = true;
    } else {
      endTimedis.value = false;
      emits("startChange", val);
    }
  }
);
watch(
  () => endTime.value,
  (val) => {
    if (val !== "") {
      emits("endChange", {
        startTime: startTime.value,
        endTime: val,
      });
    }
  }
);
</script>
  <style lang="scss" scoped>
</style>