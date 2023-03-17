<template>
  <div class="tableView">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="index" label="序号"></el-table-column>
      <el-table-column prop="ipAdr" label="ip地址"> </el-table-column>
      <el-table-column prop="" label="禁用时间"> </el-table-column>
      <el-table-column prop="behaviorType" label="行为类型"> </el-table-column>
      <el-table-column prop="operating" label="操作">
        <template slot-scope="scope">
          <el-button
            @click="buttonClicked(scope.row.index)"
            type="text"
            size="small"
            >解禁</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Forbidden",
  data() {
    return {};
  },
  methods: {
    buttonClicked: function (index) {
      //执行解禁操作
      console.log(index);
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
