<script setup>
import { reactive } from 'vue'
import { LineChart, DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  comments: { type: Array, default: [] },
  type: { type: String, default: 'line' },
})

const data = reactive({
  labels: props.comments.map((comment) => comment.email),

  datasets: [
    {
      label: 'The number of characters in the mail',
      // fill: false,
      pointRadius: 2,
      data: props.comments.map((comment) => comment.email.length),
      borderColor: '#237BFF',
      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
    },
  ],
})
</script>

<template>
  <LineChart class="bg-white" v-if="props.type === 'line'" :chartData="data" />
  <DoughnutChart class="bg-white rounded-lg h-96" v-if="props.type === 'doughnut'" :chartData="data" />
</template>
