<template>
    <div class="login">
      <h1>登录</h1>
      <input type="text" v-model="email" placeholder="邮箱" />
      <input type="password" v-model="password" placeholder="密码" />
      <button @click="handleLogin">登录</button>
      <p @click="navigateToRegister">没有账号？注册</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        this.$router.push('/dashboard');
      },
      navigateToRegister() {
        this.$router.push('/register');
      }
    }
  };
  </script>
  
  <style scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  input {
    margin-bottom: 10px;
    padding: 10px;
    width: 200px;
  }
  button {
    padding: 10px 20px;
  }
  p {
    color: blue;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>
  