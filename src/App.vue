<template>
  <div id="app">
    <nav>
      <router-link to="/login">登录</router-link>
      <router-link to="/dashboard">主页</router-link>
      <router-link to="/device-management">设备管理</router-link>
      <router-link to="/real-time-data">实时数据</router-link>
      <router-link to="/history-data">历史数据</router-link>
      <router-link to="/health-advice">健康建议</router-link>
      <router-link to="/user-profile">个人信息</router-link>
      <router-link to="/share">分享</router-link>
      <router-link to="/settings">设置</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 15px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
