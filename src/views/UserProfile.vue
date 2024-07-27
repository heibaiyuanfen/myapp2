<template>
    <div class="user-profile">
      <h1>个人信息</h1>
      <input type="text" v-model="name" placeholder="姓名" />
      <input type="text" v-model="age" placeholder="年龄" />
      <input type="text" v-model="gender" placeholder="性别" />
      <button @click="handleSave">保存</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        age: '',
        gender: ''
      };
    },
    methods: {
      handleSave() {
        // 保存用户信息逻辑
      }
    }
  };
  </script>
  
  <style scoped>
  .user-profile {
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
  </style>
  