<template>
  <div id="app">
    <el-container>
      <el-header height="30px" class="title">恶意爬虫检测系统</el-header>
      <el-container>
        <el-aside class="aside" width="200px">
          <el-menu
            mode="vertical"
            default-active="/"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            class="menu"
            @select="handleSelect"
            router
          >
            <el-menu-item index="/">
              <i class="el-icon-pie-chart"></i>
              <span slot="title">概览</span>
            </el-menu-item>
            <el-menu-item index="2" route="/Screen">
              <i class="el-icon-s-operation"></i>
              <span slot="title">筛选</span>
            </el-menu-item>
            <el-menu-item index="/Trend">
              <i class="el-icon-s-marketing"></i>
              <span slot="title">趋势</span>
            </el-menu-item>
            <el-menu-item index="/Forbidden">
              <i class="el-icon-circle-close"></i>
              <span slot="title">禁用</span>
            </el-menu-item>
            <el-menu-item index="Setting">
              <i class="el-icon-s-tools"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main"> <router-view /> </el-main> </el-container
    ></el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  components: {},
  methods: {
    handleSelect: function (index) {
      console.log(index);
    },
  },
  mounted() {},
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  height: 715px;
  padding: 0;
  padding: 20px;
}

.menu {
  height: 715px;
}

.title {
  line-height: 30px;
  background-color: #e5e5f7;
  /* opacity: 0.8;
  background-image: linear-gradient(
      30deg,
      #4c4c54 12%,
      transparent 12.5%,
      transparent 87%,
      #4c4c54 87.5%,
      #4c4c54
    ),
    linear-gradient(
      150deg,
      #4c4c54 12%,
      transparent 12.5%,
      transparent 87%,
      #4c4c54 87.5%,
      #4c4c54
    ),
    linear-gradient(
      30deg,
      #4c4c54 12%,
      transparent 12.5%,
      transparent 87%,
      #4c4c54 87.5%,
      #4c4c54
    ),
    linear-gradient(
      150deg,
      #4c4c54 12%,
      transparent 12.5%,
      transparent 87%,
      #4c4c54 87.5%,
      #4c4c54
    ),
    linear-gradient(
      60deg,
      #4c4c5477 25%,
      transparent 25.5%,
      transparent 75%,
      #4c4c5477 75%,
      #4c4c5477
    ),
    linear-gradient(
      60deg,
      #4c4c5477 25%,
      transparent 25.5%,
      transparent 75%,
      #4c4c5477 75%,
      #4c4c5477
    );
  background-size: 20px 35px;
  background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px; */
  color: red;
  font-weight: bold;
  font-size: larger;
}
</style>
