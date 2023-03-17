<template>
  <div class="container">
    <div class="items item-title">正常时间</div>
    <div class="items">
      <el-time-select
        placeholder="起始时间"
        v-model="startTime"
        :picker-options="{
          start: '00:00',
          step: '01:00',
          end: '24:00',
        }"
      >
      </el-time-select>
      <div class="line"></div>
      <el-time-select
        placeholder="结束时间"
        v-model="endTime"
        :picker-options="{
          start: '00:00',
          step: '01:00',
          end: '24:00',
          minTime: startTime,
        }"
      >
      </el-time-select>

      <div class="date"></div>
    </div>
    <div class="items item-title">关键数据接口</div>
    <div class="items table">
      <div class="btn"><el-button @click="addNew">新增</el-button></div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="index" label="序号"></el-table-column>
        <el-table-column prop="joggleName" label="接口名称"> </el-table-column>
        <el-table-column prop="operating" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="deleteClicked(scope.row.index)"
              type="text"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
//import { getFormDate } from "../util/getFormDate";
import { ref } from "vue";
export default {
  name: "Setting",
  data() {
    return {
      startTime: "",
      endTime: "",
      tableData: ref([{ index: 1, joggleName: "/getUserInfo" }]),
    };
  },
  methods: {
    handleDateChange: function (index) {
      console.log(index);
    },
    addNew: function () {},
  },
};
</script>

<style scoped>
.items {
  width: 100%;
  flex: 0;
  display: flex;
}
.item-title {
  font-size: large;
  font-weight: bold;
  padding: 30px 0;
  text-align: left;
  align-items: center;
}

.table {
  flex: 1;
  flex-direction: column;
}

.date {
  flex: 0;
  margin-right: 20px;
  background-color: aqua;
}

.line {
  width: 15px;
  margin: 19px;
  height: 2px;
  background-color: black;
}
.btn {
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0;
}
</style>
