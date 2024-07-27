<template>
    <div class="real-time-data">
      <h1>实时数据</h1>
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
          labels: [],
          datasets: [{ data: [] }]
        }
      };
    },
    mounted() {
      this.fetchRealTimeData();
      setInterval(this.fetchRealTimeData, 1000);
    },
    methods: {
      fetchRealTimeData() {
        const newValue = Math.random() * 100;
        const newTimestamp = new Date().toLocaleTimeString();
        this.chartData.labels.push(newTimestamp);
        this.chartData.datasets[0].data.push(newValue);
        if (this.chartData.labels.length > 10) {
          this.chartData.labels.shift();
          this.chartData.datasets[0].data.shift();
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .real-time-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  </style>
  