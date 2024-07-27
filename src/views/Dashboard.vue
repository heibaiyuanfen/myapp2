<template>
    <div class="dashboard">
      <h1>主页</h1>
      <button @click="navigateTo('device-management')">设备管理</button>
      <button @click="navigateTo('real-time-data')">实时数据</button>
      <button @click="navigateTo('history-data')">历史数据</button>
      <button @click="navigateTo('health-advice')">健康建议</button>
      <button @click="navigateTo('user-profile')">个人信息</button>
      <button @click="navigateTo('share')">分享</button>
      <button @click="navigateTo('settings')">设置</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(route) {
        this.$router.push(`/${route}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  button {
    margin-bottom: 10px;
    padding: 10px 20px;
  }
  </style>
  