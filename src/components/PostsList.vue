<script setup>
import PostItem from './PostItem.vue'

const props = defineProps({
  posts: { type: Array, default: [] },
})
</script>

<template>
  <PostItem v-for="post in props.posts" :key="post.id" :post="post" />
</template>

<style lang="scss" scoped></style>
