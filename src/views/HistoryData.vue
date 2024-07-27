<template>
    <div class="history-data">
      <h1>历史数据</h1>
      <line-chart :data="chartData" />
    </div>
  </template>
  
  <script>
  import LineChart from '@/components/LineChart.vue';
  
  export default {
    components: {
      LineChart
    },
    data() {
      return {
        chartData: {
          labels: ['2024-01-01', '2024-01-02', '2024-01-03'],
          datasets: [{ data: [60, 65, 70] }]
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .history-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  </style>
  