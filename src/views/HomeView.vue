<script setup>
import { ref, computed } from 'vue'
import DefaultInput from '../components/DefaultInput.vue'
import PoginationsPost from '../components/PoginationsPost.vue'
import PostItem from '../components/PostItem.vue'
import PopUp from '../components/PopUp.vue'
import ChartComments from '../components/ChartComments.vue'
import DefaultButton from '../components/DefaultButton.vue'
import { useFetch } from '../composables/useLoadData'
import { POSTS, PAGINATION_LIMIT, COMMENTS } from '../services/CollectionNames'

const title = ref('')
const numberPage = ref(1)
const openPopUp = ref(false)
const paginationLimit = PAGINATION_LIMIT

const { data: posts } = await useFetch(POSTS)
const { data: comments } = await useFetch(COMMENTS)

const filterPosts = computed(() =>
  posts.value.filter((post) => post.title.toLowerCase().includes(title.value.toLowerCase()))
)

const pageCount = computed(() => Math.ceil(filterPosts.value.length / paginationLimit))

const paginationsPage = computed(() =>
  filterPosts.value.slice((numberPage.value - 1) * paginationLimit, paginationLimit * numberPage.value)
)

const changePage = (number) => (numberPage.value = number)
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
    <PostItem v-for="post in paginationsPage" :key="post.id" :post="post" />
  </div>
  <div class="text-3xl text-center font-bold" v-else>No result</div>
</template>
