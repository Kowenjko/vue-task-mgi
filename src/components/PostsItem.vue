<script setup>
import { useFetch } from '../composables/useLoadData'
import { POSTS } from '../services/CollectionNames'
import CardLayout from '../layouts/CardLayout.vue'
import ChartComments from './ChartComments.vue'

const props = defineProps({
  post: { type: Object },
})

const { data: comments } = await useFetch(`${POSTS}/${props.post.id}/comments`)
</script>

<template>
  <CardLayout class="text-white">
    <h5 class="font-bold text-[#237BFF]">{{ post.title }}</h5>
    <p class="py-4">{{ post.body }}</p>
    <p class="font-bold pb-4">
      Count comments: <span class="font-normal">{{ comments.length }}</span>
    </p>
    <ChartComments type="doughnut" :comments="comments" />
  </CardLayout>
</template>

<style lang="sass" scoped></style>
