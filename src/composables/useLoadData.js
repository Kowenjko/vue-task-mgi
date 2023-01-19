import { ref } from 'vue'

export async function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  try {
    const response = await fetch(url)
    const result = await response.json()
    data.value = result
  } catch (err) {
    error.value = err
  }

  return { data, error }
}
