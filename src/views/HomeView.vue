<script setup>
import { ref, computed, watch } from 'vue'
import SearchPost from '../components/SearchPost.vue'
import PoginationsPost from '../components/PoginationsPost.vue'
import PostsList from '../components/PostsList.vue'
import PopUp from '../components/PopUp.vue'
import ChartComments from '../components/ChartComments.vue'
import DefaultButton from '../components/DefaultButton.vue'
import { useLoadData } from '../composables/useLoadData'
import { POSTS, PAGINATION_LIMIT, COMMENTS } from '../services/CollectionNames'

const title = ref('')
const numberPage = ref(1)
const posts = ref([])
const comments = ref([])
const openPopUp = ref(false)
const paginationLimit = PAGINATION_LIMIT

posts.value = await useLoadData(POSTS)
comments.value = await useLoadData(COMMENTS)

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
  <div class="flex gap-10 items-center">
    <SearchPost v-model="title" />
    <DefaultButton name="Open Chart" @click-button="openPopUp = true" />
  </div>
  <PopUp @close="openPopUp = false" :open="openPopUp" width="900">
    <ChartComments :comments="comments" />
  </PopUp>

  <div v-if="filterPosts.length > 0">
    <PoginationsPost :pageCount="pageCount" :numberPage="numberPage" @changePage="changePage" />
    <PostsList :posts="paginationsPage" />
  </div>
  <div class="text-3xl text-center font-bold" v-else>No result</div>
</template>
