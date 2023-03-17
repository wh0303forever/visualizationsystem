<template>
  <div class="container">
    <div class="view-title">本年</div>
    <div id="YearView" class="view1"></div>
    <div class="view-title">本月</div>
    <div id="MonthView" class="view1"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { trendYearOption } from "../assets/data";
export default {
  name: "Trend",
  data() {
    return {
      YearViewChart: undefined,
      MonthViewChart: undefined,
      trendYearOption,
    };
  },
  methods: {},
  created() {},
  mounted() {
    this.MonthViewChart = echarts.init(document.querySelector("#MonthView"));
    this.YearViewChart = echarts.init(document.querySelector("#YearView"));
    this.YearViewChart.setOption(this.trendYearOption);
    this.MonthViewChart.setOption(this.trendYearOption);
  },
};
</script>

<style></style>
