<script setup>
import { ref } from 'vue'
import DefaultInput from '../components/DefaultInput.vue'
import PoginationsPost from '../components/PoginationsPost.vue'
import PostsList from '../components/PostsList.vue'
import PopUp from '../components/PopUp.vue'
import ChartComments from '../components/ChartComments.vue'
import DefaultButton from '../components/DefaultButton.vue'
import { useActionsPosts } from '../composables/useActionsPosts'

const openPopUp = ref(false)
const { title, numberPage, comments, changePage, paginationsPage, pageCount, filterPosts } = await useActionsPosts()
</script>

<template>
  <div class="flex gap-10 items-center my-7">
    <DefaultInput v-model="title" label="Search post" name="title" placeholder="Search post" />
    <DefaultButton class="w-[20%]" name="Open Chart" @click-button="openPopUp = true" />
  </div>
  <PopUp @close="openPopUp = false" :open="openPopUp">
    <ChartComments :comments="comments" />
  </PopUp>

  <div v-if="filterPosts.length > 0">
    <PoginationsPost :pageCount="pageCount" :numberPage="numberPage" @changePage="changePage" />
    <PostsList :posts="paginationsPage" />
  </div>
  <div class="text-3xl text-center font-bold" v-else>No result</div>
</template>
