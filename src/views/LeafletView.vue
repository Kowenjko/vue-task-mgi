<script setup>
import { ref, onMounted } from 'vue'
import PopUp from '../components/PopUp.vue'
import InputMarker from '../components/InputMarker.vue'
import DefaultButton from '../components/DefaultButton.vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { COORDINATE_UKRAINE, ICON_MARKER } from '../services/CollectionNames'
import { useLocalstorage } from '../composables/useLocalstorage'

const openPopUpMarker = ref(false)
const nameMarker = ref('')
const latlng = ref(null)
const lat = ref(null)
const lng = ref(null)

let map = null

const closePopUp = () => {
  openPopUpMarker.value = false
  nameMarker.value = ''
  latlng.value = null
  lat.value = null
  lng.value = null
}

const myIcon = L.icon({ iconUrl: ICON_MARKER })

const addMarker = () => {
  if (lat.value && lng.value && nameMarker.value) {
    L.marker([lat.value, lng.value], { icon: myIcon }).addTo(map).bindTooltip(nameMarker.value)
    useLocalstorage({ name: nameMarker.value, lat: lat.value, lng: lng.value })
  } else alert('Виввели не всі дані')
  closePopUp()
}

const onMapClick = (event) => {
  openPopUpMarker.value = true
  console.log('You clicked the map at ' + event.latlng)
  latlng.value = event.latlng
  if (latlng.value) {
    lat.value = latlng.value.lat
    lng.value = latlng.value.lng
  }
}

const loadMarkers = (markers) =>
  markers.forEach((marker) => L.marker([marker.lat, marker.lng], { icon: myIcon }).addTo(map).bindTooltip(marker.name))

onMounted(() => {
  map = L.map('map').setView(COORDINATE_UKRAINE, 6)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)
  const { markers } = useLocalstorage()
  if (markers) loadMarkers(markers)
  map.on('click', onMapClick)
})
</script>
<template>
  <div class="relative">
    <DefaultButton class="mt-20" name="Create Marker" @click-button="openPopUpMarker = true" />
    <div id="map" @click="onMapClick" class="mt-10 relative z-0" style="height: 75vh; width: 55vw"></div>
    <PopUp @close="closePopUp" :open="openPopUpMarker" width="400">
      <InputMarker
        v-model:nameMarker="nameMarker"
        v-model:lat="lat"
        v-model:lng="lng"
        @addMarker="addMarker"
        :latlng="latlng"
      />
    </PopUp>
  </div>
</template>
