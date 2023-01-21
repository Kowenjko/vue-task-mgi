import { ref } from 'vue'
import { useLocalstorage } from './useLocalstorage'

export function useActionsLeaflet() {
  const openPopUpMarker = ref(false)

  const markers = ref([])
  const nameMarker = ref('')
  const lat = ref(null)
  const lng = ref(null)

  const { markers: markersStorage } = useLocalstorage()
  if (markersStorage) markers.value = markersStorage

  const closePopUp = () => {
    openPopUpMarker.value = false
    nameMarker.value = ''
    lat.value = null
    lng.value = null
  }

  const addMarker = () => {
    if (lat.value && lng.value && nameMarker.value) {
      const newMarker = { name: nameMarker.value, lat: lat.value, lng: lng.value }
      markers.value = [...markers.value, newMarker]
      useLocalstorage(newMarker)
    } else alert('Ви ввели не всі дані')
    closePopUp()
  }

  const onMapClick = (event) => {
    openPopUpMarker.value = true
    console.log('Координати: ' + event.latlng)
    if (event.latlng) {
      lat.value = event.latlng.lat
      lng.value = event.latlng.lng
    }
  }

  return { openPopUpMarker, markers, addMarker, onMapClick, closePopUp, lat, lng, nameMarker }
}
