<template>
    <div class="share">
      <h1>分享健康数据</h1>
      <button @click="handleShare('微信')">分享到微信</button>
      <button @click="handleShare('朋友圈')">分享到朋友圈</button>
      <button @click="handleShare('Facebook')">分享到Facebook</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleShare(platform) {
        // 分享逻辑
        alert(`分享到${platform}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .share {
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
  