<script setup>
import PostsItem from './PostsItem.vue'

const props = defineProps({
  posts: { type: Array, default: [] },
})
</script>

<template>
  <ul>
    <PostsItem v-for="post in posts" :key="post.id" :post="post" />
  </ul>
</template>

<style lang="scss" scoped></style>
