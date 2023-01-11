export async function useLoadData(url) {
  try {
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (err) {
    return err
  }
}
