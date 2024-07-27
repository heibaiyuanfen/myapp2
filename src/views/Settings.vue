<template>
    <div class="settings">
      <h1>设置</h1>
      <button @click="navigateTo('privacy-settings')">隐私设置</button>
      <button @click="logout">退出登录</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(route) {
        this.$router.push(`/${route}`);
      },
      logout() {
        // 退出登录逻辑
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  .settings {
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
  