<script setup>
import { ref } from 'vue'
import PopUp from '../components/PopUp.vue'
import InputMarker from '../components/InputMarker.vue'
import DefaultButton from '../components/DefaultButton.vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LIcon, LTileLayer, LMarker, LTooltip } from '@vue-leaflet/vue-leaflet'
import { COORDINATE_UKRAINE, LEAFLET_URL, ICON_MARKER } from '../services/CollectionNames'
import { useLocalstorage } from '../composables/useLocalstorage'

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
  console.log('Координати:' + event.latlng)
  if (event.latlng) {
    lat.value = event.latlng.lat
    lng.value = event.latlng.lng
  }
}
</script>

<template>
  <div>
    <DefaultButton class="mt-4 w-[15%]" name="Create Marker" @click-button="openPopUpMarker = true" />
    <l-map
      class="mt-4 z-0 w-full rounded-lg shadow-xl"
      :zoom="6"
      :minZoom="3"
      :maxZoom="18"
      :zoomAnimation="true"
      :center="COORDINATE_UKRAINE"
      style="height: 75vh"
      @click="onMapClick"
    >
      <l-tile-layer :url="LEAFLET_URL" />

      <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="[marker.lat, marker.lng]">
        <l-icon :icon-url="ICON_MARKER" />
        <l-tooltip> {{ marker.name }} </l-tooltip>
      </l-marker>
    </l-map>
    <PopUp @close="closePopUp" :open="openPopUpMarker" width="400px">
      <InputMarker v-model:nameMarker="nameMarker" v-model:lat="lat" v-model:lng="lng" @addMarker="addMarker" />
    </PopUp>
  </div>
</template>
