<template>
    <div>
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart } from 'chart.js';
  
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    mounted() {
      this.createChart();
    },
    watch: {
      data: {
        handler() {
          this.updateChart();
        },
        deep: true
      }
    },
    methods: {
      createChart() {
        const ctx = this.$refs.canvas.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.data,
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      },
      updateChart() {
        this.chart.data = this.data;
        this.chart.update();
      }
    }
  };
  </script>
  
  <style scoped>
  canvas {
    width: 100%;
    height: 400px;
  }
  </style>
  