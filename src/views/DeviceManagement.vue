<template>
    <div class="device-management">
      <h1>设备管理</h1>
      <button @click="navigateTo('bind-device')">绑定新设备</button>
      <button @click="navigateTo('bound-devices')">已绑定设备</button>
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
  .device-management {
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
  