export function useLocalstorage(data = null) {
  const markers = JSON.parse(localStorage.getItem('markers'))

  if (!markers && data) localStorage.setItem('markers', JSON.stringify([data]))
  if (markers && data) localStorage.setItem('markers', JSON.stringify([...markers, data]))

  const clearLocalStorage = () => localStorage.clear()

  return { markers, clearLocalStorage }
}
