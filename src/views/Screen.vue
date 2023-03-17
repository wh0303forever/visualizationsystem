<template>
  <div class="container">
    <div class="ScreenView">
      <el-select
        v-model="dateSelected"
        placeholder="请选择日期范围"
        class="screenOption"
      >
        <el-option v-for="item in dateOptions" :key="item" :value="item">
        </el-option>
      </el-select>
      <el-select
        v-model="typeSelected"
        placeholder="请选择类型"
        class="screenOption"
      >
        <el-option v-for="item in typeOptions" :key="item" :value="item">
        </el-option>
      </el-select>
      <el-date-picker
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        @change="handleDateChange"
        v-model="date"
        class="screenOption"
      >
      </el-date-picker>
    </div>
    <div class="tableView">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="index" label="序号"></el-table-column>
        <el-table-column prop="ipAdr" label="ip地址"> </el-table-column>
        <el-table-column prop="joggleName" label="接口名称"> </el-table-column>
        <el-table-column prop="requestType" label="请求类型"> </el-table-column>
        <el-table-column prop="requestFrequency" label="请求频率(次/h)">
        </el-table-column>
        <el-table-column prop="behaviorType" label="行为类型">
        </el-table-column>
        <el-table-column prop="operating" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="detailedClicked(scope.row.index)"
              type="text"
              size="small"
              >详细信息</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { dateOptions, typeOptions, tableData } from "../assets/data";
import { getFormDate } from "../util/getFormDate";
export default {
  name: "Screen",
  data() {
    return {
      dateOptions,
      typeOptions,
      dateSelected: "当天",
      typeSelected: "恶意请求",
      date: getFormDate(),
      tableData,
    };
  },
  methods: {
    handleDateChange: function () {
      console.log(this.date);
    },
    detailedClicked: function (index) {
      console.log(index);
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.ScreenView {
  flex: 1;

  display: flex;
  align-items: center;
}

.screenOption {
  margin: 0 10px;
}
</style>
