import { ref, computed, watch } from 'vue'
import { useFetch } from './useLoadData'
import { POSTS, PAGINATION_LIMIT, COMMENTS } from '../services/CollectionNames'
import { filterOnTitle, sortedOnTitle } from '../helpers/ArrayHelper'

export async function useActionsPosts() {
  const title = ref('')
  const numberPage = ref(1)

  const paginationLimit = PAGINATION_LIMIT

  const { data: posts } = await useFetch(POSTS)
  const { data: comments } = await useFetch(COMMENTS)

  const filterPosts = computed(() => sortedOnTitle(filterOnTitle(posts.value, title.value)))

  const pageCount = computed(() => Math.ceil(filterPosts.value.length / paginationLimit))

  const paginationsPage = computed(() =>
    sortedOnTitle(filterPosts.value.slice((numberPage.value - 1) * paginationLimit, paginationLimit * numberPage.value))
  )

  const changePage = (number) => (numberPage.value = number)

  watch(title, () => (numberPage.value = 1))

  return { title, numberPage, filterPosts, comments, changePage, paginationsPage, pageCount }
}
