<template>
  <div class="container">
    <div class="view-title">总数量</div>
    <div id="allView" class="view1">
      <div id="allView_barChart" class="view2"></div>
      <div id="allView_sectorChart_num" class="view2"></div>
      <div id="allView_sectorChart_time" class="view2"></div>
    </div>
    <div class="view-title">
      <el-date-picker
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        @change="handleDateChange"
        v-model="date"
      >
      </el-date-picker>
    </div>
    <div id="dateView" class="view1">
      <div id="dateView_barChart" class="view2"></div>
      <div id="dateView_sectorChart_num" class="view2"></div>
      <div id="dateView_sectorChart_time" class="view2"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getFormDate } from "../util/getFormDate";
import {
  option_sector_time,
  option_bar,
  option_sector_num,
} from "../assets/data";

export default {
  name: "OverView",
  data() {
    return {
      date: undefined,
    };
  },
  components: {},
  methods: {
    handleDateChange: function () {
      //日期改变，请求数据
      console.log(this.date);
    },
  },
  created() {
    this.date = getFormDate();
    //在此处请求数据
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var allView_barChart = echarts.init(
      document.querySelector("#allView_barChart")
    );
    var allView_sectorChart_num = echarts.init(
      document.querySelector("#allView_sectorChart_num")
    );
    var allView_sectorChart_time = echarts.init(
      document.querySelector("#allView_sectorChart_time")
    );
    var dateView_barChart = echarts.init(
      document.querySelector("#dateView_barChart")
    );
    var dateView_sectorChart_num = echarts.init(
      document.querySelector("#dateView_sectorChart_num")
    );
    var dateView_sectorChart_time = echarts.init(
      document.querySelector("#dateView_sectorChart_time")
    );

    // 绘制图表
    allView_barChart.setOption(option_bar);
    allView_sectorChart_num.setOption(option_sector_num);
    allView_sectorChart_time.setOption(option_sector_time);
    dateView_barChart.setOption(option_bar);
    dateView_sectorChart_num.setOption(option_sector_num);
    dateView_sectorChart_time.setOption(option_sector_time);
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
